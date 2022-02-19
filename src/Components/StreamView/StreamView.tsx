/**
 * This reference template is designed to showcase the elements used to construct your own
 * application.
 * 
 * When developing take care to:
 *  - Retain user interaction to begin audio.
 *  - Understand video sizing and mobile screen orientation.
 
 * See attached documentation for reference. Contact support@pureweb.com with any questions.
 * 
 *
 * Copyright (C) PureWeb 2020
 */

import {
    ModelDefinition,
    PlatformNext,
    UndefinedModelDefinition,
    DefaultStreamerOptions,
    StreamerStatus,
} from "@pureweb/platform-sdk";

import {
    useStreamer,
    useLaunchRequest,
    LaunchRequestOptions,
    System,
} from "@pureweb/platform-sdk-react";

import * as qs from "query-string";
import React, { useEffect, useState } from "react";
import useAsyncEffect from "use-async-effect";
import "./StreamView.css";
import clientConfig from "../../client.json";
import { EmbeddedView } from "../EmbededView/EmbededView";

import { LaunchView } from "../Launch/Launch";
import logger from "../../Log";

const client: ClientJson = clientConfig as ClientJson;

class ClientJson {
    environmentId?: string;
    launchType?: string;
    projectId?: string;
    modelId?: string;
    version?: string;
    endpoint?: string;
    usePointerLock?: boolean;
    pointerLockRelease?: boolean;
    useNativeTouchEvents?: boolean;
}

class ClientOptions {
    // Overridable connection options
    LaunchType?: string;

    // Launch queue configuration
    ProjectId?: string;
    ModelId?: string;
    Version?: string;
    EnvironmentId?: string;
    Endpoint?: string;

    // Overridable streamer options
    ForceRelay = false;
    UseNativeTouchEvents?: boolean;
    UsePointerLock?: boolean;
    PointerLockRelease?: boolean;

    isValid(): boolean {
        if (!this.ProjectId) {
            return false;
        }
        if (!this.ModelId) {
            return false;
        }
        return true;
    }
}

// Initialize audio.
// load() must be called from a user interaction, especially to retain iOS audio
// this can be 'mouseup', 'touchend' or 'keypress'
// Pass the audioStream created from useStreamer as the srcObject to play game audio.
const audio = new Audio();
audio.autoplay = true;
audio.volume = 0.5;

// Parse query parameters
const query = qs.parse(window.location.search);
const clientOptions: ClientOptions = new ClientOptions();
clientOptions.LaunchType = (query["launchType"] as string) ?? client.launchType;
clientOptions.Endpoint = (query["endpoint"] as string) ?? client.endpoint;
clientOptions.ProjectId = (query["projectId"] as string) ?? client.projectId;
clientOptions.ModelId = (query["modelId"] as string) ?? client.modelId;
clientOptions.Version = (query["version"] as string) ?? client.version;
clientOptions.EnvironmentId =
    (query["environmentId"] as string) ?? client.environmentId;
// use client json config if usePointerLock query string parameter is undefined, else use query string parameter. Default to false if non are present
clientOptions.UsePointerLock =
    (query["usePointerLock"] === undefined
        ? client.usePointerLock
        : query["usePointerLock"] === "true") ?? true;
// release the pointer lock on mouse up if true
clientOptions.PointerLockRelease =
    (query["pointerLockRelease"] === undefined
        ? client.pointerLockRelease
        : query["pointerLockRelease"] === "true") ?? true;

clientOptions.ForceRelay = query["forceRelay"] !== undefined ?? false;
clientOptions.UseNativeTouchEvents =
    (query["useNativeTouchEvents"] === undefined
        ? client.useNativeTouchEvents
        : query["useNativeTouchEvents"] === "true") ?? false;
// Initialize platform reference
const platform = new PlatformNext();
platform.initialize({
    endpoint: clientOptions.Endpoint || "https://api.pureweb.io",
});

interface StreamViewProps {
    setLoaded: (loaded: boolean) => void;
}

const StreamView: React.FC<StreamViewProps> = (props: StreamViewProps) => {
    const [modelDefinitionUnavailable, setModelDefinitionUnavailable] =
        useState(false);
    const [modelDefinition, setModelDefinition] = useState(
        new UndefinedModelDefinition()
    );
    const [availableModels, setAvailableModels] = useState<ModelDefinition[]>();
    const [launchRequestError, setLaunchRequestError] = useState<Error>();
    const streamerOptions = DefaultStreamerOptions;

    const launchRequestOptions: LaunchRequestOptions = {
        regionOverride: query["regionOverride"] as string,
        virtualizationProviderOverride: query[
            "virtualizationProviderOverride"
        ] as string,
    };
    const [status, launchRequest, queueLaunchRequest] = useLaunchRequest(
        platform,
        modelDefinition,
        launchRequestOptions
    );
    const [streamerStatus, emitter, videoStream, audioStream] = useStreamer(
        platform,
        launchRequest,
        streamerOptions
    );
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (streamerStatus === StreamerStatus.Failed) {
            platform.disconnect();
        }
    }, [streamerStatus]);

    if (audioStream) {
        audio.srcObject = audioStream;
    }

    const launch = async () => {
        setLoading(true);
        audio.load();

        if (clientOptions.LaunchType !== "local") {
            try {
                await queueLaunchRequest();
            } catch (err) {
                setLaunchRequestError(err);
            }
        }
    };
    useAsyncEffect(async () => {
        if (clientOptions.ProjectId) {
            logger.info(
                "Initializing available models: " + clientOptions.ProjectId
            );
            try {
                await platform.useAnonymousCredentials(
                    clientOptions.ProjectId,
                    clientOptions.EnvironmentId
                );
                await platform.connect();
                logger.info("Agent Connected: " + platform.agent.id);
                streamerOptions.iceServers = platform.agent.serviceCredentials
                    .iceServers as RTCIceServer[];
                streamerOptions.forceRelay = clientOptions.ForceRelay;
                const models = await platform.getModels();
                setAvailableModels(models);
                logger.debug("Available models", models);
            } catch (err) {
                logger.error(err);
            }
        }
    }, [clientOptions]);
    useEffect(() => {
        if (availableModels?.length) {
            const selectedModels = availableModels.filter(function (
                model: ModelDefinition
            ): boolean {
                if (clientOptions.ModelId === model.id) {
                    // If there is a version specified and we encounter it
                    if (
                        clientOptions.Version &&
                        clientOptions.Version === model.version
                    ) {
                        return true;
                    }
                    // If there is no version specified and we find the primary version
                    if (!clientOptions.Version && model.active) {
                        return true;
                    }
                }
                return false;
            });
            if (selectedModels?.length) {
                setModelDefinition(selectedModels[0]);
            } else {
                setModelDefinitionUnavailable(true);
            }
        }
    }, [availableModels]);

    useEffect(() => {
        if (modelDefinition.type === 0) return;

        launch();
    }, [modelDefinition]);

    // Log status messages
    useEffect(() => {
        logger.info("Status", status, streamerStatus);
    }, [status, streamerStatus]);

    // Notify user of missing or errors in configuration
    if (!clientOptions.isValid()) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    overflow: "none",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <p>
                    Your client has one or more configuration errors. Please
                    consult the{" "}
                    <a href="https://www.npmjs.com/package/@pureweb/cra-template-pureweb-client">
                        {" "}
                        README{" "}
                    </a>{" "}
                    for details on how to configure the client template.
                </p>
            </div>
        );
    }

    if (modelDefinitionUnavailable) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    overflow: "none",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <span>The model that you have requested does not exist</span>
            </div>
        );
    }

    if (launchRequestError) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    overflow: "none",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <span>
                    {process.env.NODE_ENV === "development"
                        ? `There was an error with the launch request: ${launchRequestError}`
                        : "It appears the requested model is currently not online as per your set schedule. Please contact support if it should be available."}
                </span>
            </div>
        );
    }

    // Begin connection
    if (streamerStatus === StreamerStatus.Disconnected) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    overflow: "none",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <h2>Disconnected from stream</h2>
            </div>
        );
    }

    if (streamerStatus === StreamerStatus.Failed) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    overflow: "none",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <h2>Failure during stream</h2>
                <h2>Please refresh to request a new session</h2>
            </div>
        );
    }

    if (streamerStatus === StreamerStatus.Withdrawn) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    overflow: "none",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <h2>Streamer contribution withdrawn</h2>
            </div>
        );
    }

    if (loading) {
        return (
            <EmbeddedView
                VideoStream={videoStream}
                StreamerStatus={streamerStatus as StreamerStatus}
                LaunchRequestStatus={status}
                InputEmitter={emitter}
                UseNativeTouchEvents={clientOptions.UseNativeTouchEvents!}
                UsePointerLock={clientOptions.UsePointerLock!}
                PointerLockRelease={clientOptions.PointerLockRelease!}
                setLoaded={props.setLoaded}
            />
        );
    } else if (clientOptions.LaunchType !== "local" && !availableModels) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    overflow: "none",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <h2>Initializing...</h2>
            </div>
        );
    } else if (
        clientOptions.LaunchType !== "local" &&
        !availableModels?.length
    ) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    overflow: "none",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <h2>No models are currently available in this environment.</h2>
            </div>
        );
    } else {
        return <LaunchView Launch={launch} />;
    }
};

interface StreamViewWrapperProps {
    setLoaded: (loaded: boolean) => void;
}

const StreamViewWrapper: React.FC<StreamViewWrapperProps> = (
    props: StreamViewWrapperProps
) => {
    return System.IsBrowserSupported() ? (
        <div
            style={{
                backgroundColor: "white",
                height: "100%",
                flex: 1,
                display: "flex",
            }}
        >
            <StreamView setLoaded={props.setLoaded} />
        </div>
    ) : (
        <div className="ui red segment center aligned basic">
            <h2 className="header">Your browser is currently unsupported</h2>
        </div>
    );
};

export default StreamViewWrapper;

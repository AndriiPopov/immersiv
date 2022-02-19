import React from "react";

import StreamViewWrapper from "../../Components/StreamView/StreamView";
import { Button } from "./Button";
import clientConfig from "../../client.json";
const client: ClientJson = clientConfig as ClientJson;

class ClientJson {
    description?: string = "description";
    title?: string = "title";
    phone?: string = "0459 239 699";
    phoneLink?: string = "+61459239699";
    mail?: string = "christian@visualartstudios.com.au";
}
interface MobileLayoutProps {
    setLoaded: (loaded: boolean) => void;
    loaded: boolean;
}

export const MobileLayout: React.FC<MobileLayoutProps> = (
    props: MobileLayoutProps
) => {
    return (
        <div style={{ flex: 1 }}>
            <StreamViewWrapper setLoaded={props.setLoaded} />;
            {props.loaded && (
                <img
                    src="/images/logo-white.png"
                    alt="logo"
                    style={{
                        position: "absolute",
                        top: "30px",
                        right: "30px",
                        zIndex: 1,
                        width: "100px",
                    }}
                />
            )}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 80,
                    backgroundColor: "rgba(0,0,0,.2)",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Button link={`tel:${client.phoneLink}`} name="phone"></Button>
                <Button link={`mailto:${client.mail}`} name="mail"></Button>
            </div>
        </div>
    );
};

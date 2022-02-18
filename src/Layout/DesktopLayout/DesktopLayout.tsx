import React from "react";
import { Icon } from "semantic-ui-react";
import StreamViewWrapper from "../../Components/StreamView/StreamView";
import { Contacts } from "./Contacts";
import clientConfig from "../../client.json";
const client: ClientJson = clientConfig as ClientJson;

class ClientJson {
    description?: string = "description";
    title?: string = "title";
    phone?: string = "0459 239 699";
    phoneLink?: string = "+61459239699";
    mail?: string = "christian@visualartstudios.com.au";
}

interface DesktopLayoutProps {
    width: number;
    height: number;
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = (
    props: DesktopLayoutProps
) => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                display: "flex",
                flex: 1,
                padding: "70px 80px 90px",
                margin: "auto",
            }}
        >
            <div
                style={{
                    paddingBottom: "30px",
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    fontSize: "34px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "end",
                    fontFamily: "'Work Sans', sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.2em",
                }}
            >
                IMPERIAL SQUARE
            </div>
            <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                <Contacts invisible />
                <div style={{ flex: 1, position: "relative", display: "flex" }}>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            display: "flex",
                            border: "8px black solid",
                        }}
                    >
                        <StreamViewWrapper />
                    </div>
                </div>
                <Contacts />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Contacts invisible />

                <div
                    style={{
                        paddingTop: "30px",
                        fontSize: "24px",
                        height: "120px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        flexDirection: "row",
                        flex: 1,
                    }}
                >
                    <div
                        style={{
                            padding: "20px 50px",
                            borderRadius: "10px",
                            backgroundColor: "#808080",
                            width: "320px",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src="/images/controls.png"
                            alt="logo"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            padding: "0px 20px",
                        }}
                    >
                        <img
                            src="/images/imperial-logo.png"
                            alt="logo"
                            style={{ height: "120px" }}
                        />
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            borderRadius: "10px",
                            backgroundColor: "#808080",
                            width: "320px",
                            display: "flex",
                            height: "100%",
                            justifyContent: "space-between",
                            flexDirection: "column",
                        }}
                    >
                        <a
                            href={`tel:${client.phoneLink}`}
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                flex: 1,
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    padding: "5px",
                                    borderRadius: "30px",
                                    border: "1px solid white",
                                    width: "30px",
                                    height: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    name="phone"
                                    size="small"
                                    style={{ color: "white", margin: 0 }}
                                />
                            </div>
                            <div style={{ width: "10px" }}></div>
                            <div
                                style={{
                                    flex: 1,
                                    fontSize: "15px",
                                    border: "1px white solid",
                                    borderRadius: "5px",
                                    color: "white",
                                    padding: "3px 10px",
                                }}
                            >
                                {client.phone}
                            </div>
                        </a>
                        {/* <div style={{ height: "20px" }}></div> */}
                        <a
                            href={`mailto:${client.mail}`}
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                flex: 1,
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    padding: "5px",
                                    borderRadius: "30px",
                                    border: "1px solid white",
                                    width: "30px",
                                    height: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    name="mail"
                                    size="small"
                                    style={{ color: "white", margin: 0 }}
                                />
                            </div>
                            <div style={{ width: "10px" }}></div>
                            <div
                                style={{
                                    flex: 1,
                                    fontSize: "15px",
                                    border: "1px white solid",
                                    borderRadius: "5px",
                                    color: "white",
                                    padding: "3px 10px",
                                }}
                            >
                                {client.mail}
                            </div>
                        </a>
                    </div>
                </div>
                <Contacts invisible />
            </div>
        </div>
    );
};

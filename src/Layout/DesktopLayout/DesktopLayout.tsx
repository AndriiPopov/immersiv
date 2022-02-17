import React from "react";
import StreamViewWrapper from "../../Components/StreamView/StreamView";
import { Contacts } from "./Contacts";

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
                padding: "50px",
            }}
        >
            <div
                style={{
                    paddingBottom: "20px",
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    fontSize: "24px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "end",
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
                        }}
                    >
                        <StreamViewWrapper />
                    </div>
                </div>
                <Contacts />
            </div>
            <div
                style={{
                    paddingTop: "20px",
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    fontSize: "24px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                }}
            >
                <img src="/images/controlls.png" alt="logo" />
            </div>
        </div>
    );
};

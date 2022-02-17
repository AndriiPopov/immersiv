import React from "react";

import StreamViewWrapper from "../../Components/StreamView/StreamView";
import { Button } from "./Button";

interface MobileLayoutProps {
    width: number;
    height: number;
}

export const MobileLayout: React.FC<MobileLayoutProps> = (
    props: MobileLayoutProps
) => {
    return (
        <div style={{ flex: 1 }}>
            <StreamViewWrapper />;
            <img
                src="/images/logo-desktop.png"
                alt="logo"
                style={{
                    position: "absolute",
                    top: "30px",
                    right: "30px",
                    zIndex: 1,
                }}
            />
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
                <Button name="phone"></Button>
                <Button name="mail"></Button>
            </div>
        </div>
    );
};

import React from "react";

interface LoadingProps {
    loaded: boolean;
    mobile?: boolean;
}

export const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
    return props.loaded ? null : (
        <div
            style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                flexDirection: "column",
            }}
        >
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
            <div
                style={{
                    padding: "100px",
                    flex: 1,
                    boxSizing: "border-box",
                    position: "relative",
                    display: "flex",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <video autoPlay loop muted>
                        <source
                            src={"/videos/Immersiv-logo.mp4"}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <div style={{ paddingBottom: "100px" }}>Loading...</div>
        </div>
    );
};

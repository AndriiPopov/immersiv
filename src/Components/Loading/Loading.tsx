import React from "react";

import styles from "./Loading.module.css";

interface LoadingProps {
    loaded: boolean;
    mobile?: boolean;
}

export const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
    return props.loaded ? null : (
        <div className={styles.wrap}>
            <img
                src="/images/logo-white.png"
                alt="logo"
                className={styles.logo}
            />
            <div className={styles.center}>
                <div className={styles.video}>
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

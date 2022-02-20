import React from "react";

import StreamViewWrapper from "../../Components/StreamView/StreamView";
import { Button } from "./Button";
import styles from "./MobileLayout.module.css";
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
                    className={styles.logo}
                />
            )}
            <div className={styles.center}>
                <Button link={`tel:${client.phoneLink}`} name="phone"></Button>
                <Button link={`mailto:${client.mail}`} name="mail"></Button>
            </div>
        </div>
    );
};

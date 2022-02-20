import React from "react";
import { Icon } from "semantic-ui-react";
import StreamViewWrapper from "../../Components/StreamView/StreamView";
import { Contacts } from "./Contacts";
import clientConfig from "../../client.json";
import styles from "./DesktopLayout.module.css";

const client: ClientJson = clientConfig as ClientJson;

class ClientJson {
    description?: string = "description";
    title?: string = "title";
    phone?: string = "0459 239 699";
    phoneLink?: string = "+61459239699";
    mail?: string = "christian@visualartstudios.com.au";
}

interface DesktopLayoutProps {
    setLoaded: (loaded: boolean) => void;
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = (
    props: DesktopLayoutProps
) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.top}>IMPERIAL SQUARE</div>
            <div className={styles.center}>
                <Contacts invisible />
                <div className={styles.viewWrap}>
                    <div className={styles.viewInner}>
                        <StreamViewWrapper setLoaded={props.setLoaded} />
                    </div>
                </div>
                <Contacts />
            </div>
            <div className={styles.bottomWrap}>
                <Contacts invisible />

                <div className={styles.bottomCenter}>
                    <div className={styles.bottomCenterLeft}>
                        <img
                            src="/images/controls.png"
                            alt="logo"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className={styles.bottomCenterCenter}>
                        <img
                            src="/images/imperial-logo.png"
                            alt="logo"
                            style={{ height: "120px" }}
                        />
                    </div>
                    <div className={styles.bottomCenterRight}>
                        <a
                            href={`tel:${client.phoneLink}`}
                            className={styles.contactWrap}
                        >
                            <div className={styles.contactIconWrap}>
                                <Icon
                                    name="phone"
                                    size="small"
                                    className={styles.contactIcon}
                                />
                            </div>
                            <div style={{ width: "10px" }}></div>
                            <div className={styles.contactText}>
                                {client.phone}
                            </div>
                        </a>
                        {/* <div style={{ height: "20px" }}></div> */}
                        <a
                            href={`mailto:${client.mail}`}
                            className={styles.contactWrap}
                        >
                            <div className={styles.contactIconWrap}>
                                <Icon
                                    name="mail"
                                    size="small"
                                    className={styles.contactIcon}
                                />
                            </div>
                            <div style={{ width: "10px" }}></div>
                            <div className={styles.contactText}>
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

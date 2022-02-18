import React from "react";
import { Icon } from "semantic-ui-react";
import styles from "./Button.module.css";

interface ButtonProps {
    name: "phone" | "mail";
    link?: string;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <a className={styles.wrap} href={props.link}>
            <Icon name={props.name} size="big" className={styles.button} />
        </a>
    );
};

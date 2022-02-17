import React from "react";
import { Icon } from "semantic-ui-react";
import styles from "./Button.module.css";

interface ButtonProps {
    name: "phone" | "mail";
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <div className={styles.wrap}>
            <Icon name={props.name} size="big" className={styles.button} />
        </div>
    );
};

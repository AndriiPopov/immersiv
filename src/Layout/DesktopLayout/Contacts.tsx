import React from "react";
import styles from "./Contacts.module.css";

interface ContactsProps {
    invisible?: boolean;
}

export const Contacts: React.FC<ContactsProps> = (props: ContactsProps) => {
    return (
        <div
            className={styles.wrap}
            style={{
                visibility: props.invisible ? "hidden" : "visible",
            }}
        >
            Powered by
            <img
                src="/images/logo-black.png"
                alt="logo"
                style={{ width: "150px" }}
            />
        </div>
    );
};

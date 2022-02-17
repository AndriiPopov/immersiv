import React from "react";

interface ContactsProps {
    invisible?: boolean;
}

export const Contacts: React.FC<ContactsProps> = (props: ContactsProps) => {
    return (
        <div
            style={{
                padding: "50px",
                visibility: props.invisible ? "hidden" : "visible",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <div>CONTACT AGENT</div>
            <div>Phone number</div>
            <div>Address</div>
            <div>Email address</div>
            <img
                src="/images/logo-desktop.png"
                alt="logo"
                style={{ position: "absolute", bottom: 0 }}
            />
        </div>
    );
};

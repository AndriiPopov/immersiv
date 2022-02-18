import React from "react";

interface ContactsProps {
    invisible?: boolean;
}

export const Contacts: React.FC<ContactsProps> = (props: ContactsProps) => {
    return (
        <div
            style={{
                padding: "0px 50px 0px 20px",
                visibility: props.invisible ? "hidden" : "visible",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                position: "relative",
                fontSize: "13px",
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

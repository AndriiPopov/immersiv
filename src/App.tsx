import React, { useEffect, useState } from "react";

import "./App.css";

import { isMobile as isMobileAgent } from "react-device-detect";

import { useWindowSize } from "@react-hook/window-size";

import { DesktopLayout } from "./Layout/DesktopLayout/DesktopLayout";
import { MobileLayout } from "./Layout/MobileLayout/MobileLayout";
import { Loading } from "./Components/Loading/Loading";
import ReactGA from "react-ga";
import clientConfig from "./client.json";

const client: ClientJson = clientConfig as ClientJson;

class ClientJson {
    GA?: string;
}
const App: React.FC = () => {
    const [width, height] = useWindowSize();
    const isMobile = isMobileAgent || width < 1200 || height < 700;
    const [loaded, setLoaded] = useState(false);
    //Add google analytic
    useEffect(() => {
        if (client.GA) {
            ReactGA.initialize(client.GA);
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, []);

    return (
        <>
            {isMobile ? (
                <MobileLayout setLoaded={setLoaded} loaded={loaded} />
            ) : (
                <DesktopLayout setLoaded={setLoaded} />
            )}
            <Loading loaded={loaded} />
        </>
    );
};

export default App;

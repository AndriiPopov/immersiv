import React, { useState } from "react";

import "./App.css";

import { isMobile as isMobileAgent } from "react-device-detect";

import { useWindowSize } from "@react-hook/window-size";

import { DesktopLayout } from "./Layout/DesktopLayout/DesktopLayout";
import { MobileLayout } from "./Layout/MobileLayout/MobileLayout";
import { Loading } from "./Components/Loading/Loading";

const App: React.FC = () => {
    const [width, height] = useWindowSize();
    const isMobile = isMobileAgent || width < 1200 || height < 700;
    const [loaded, setLoaded] = useState(false);
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

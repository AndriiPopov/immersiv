import React from "react";

import "./App.css";

import { isMobile as isMobileAgent } from "react-device-detect";

import { useWindowSize } from "@react-hook/window-size";

import { DesktopLayout } from "./Layout/DesktopLayout/DesktopLayout";
import { MobileLayout } from "./Layout/MobileLayout/MobileLayout";

const App: React.FC = () => {
    const [width, height] = useWindowSize();
    const isMobile = isMobileAgent || width < 1200 || height < 700;

    return isMobile ? (
        <MobileLayout width={width} height={height} />
    ) : (
        <DesktopLayout width={width} height={height} />
    );
};

export default App;

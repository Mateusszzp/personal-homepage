import {  useSelector } from "react-redux";
import {  selectChangeLighte } from "../../changeLighteSlice";

import { theme, themeBlack } from "../../theme"
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import App from "../../App";


export const ChangeColor = () => {
    const lightMode = useSelector(selectChangeLighte);
    return (
        <ThemeProvider theme={lightMode ? theme : themeBlack} >
            <GlobalStyle />
            <App />
        </ThemeProvider>
    )
};



import React from "react";
import { SvgXml } from "react-native-svg";

export default function Homesvgimport(){
    const img = `<svg width="28px" height="29px" viewBox="0 0 28 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Tab-Bar-Icon---Home" transform="translate(-12.000000, -3.000000)" stroke="#979797">
            <path d="M26,4.37128443 L38.7882436,12.1822801 C39.2306696,12.4555453 39.5,12.9384603 39.5,13.4584744 L39.5,29 C39.5,29.6903559 39.220178,30.3153559 38.767767,30.767767 C38.3153559,31.220178 37.6903559,31.5 37,31.5 L30,31.5 L30,24.1549734 C30,23.7407598 29.8321068,23.3657598 29.5606602,23.0943132 C29.2892136,22.8228666 28.9142136,22.6549734 28.5,22.6549734 L23.5,22.6549734 C23.0857864,22.6549734 22.7107864,22.8228666 22.4393398,23.0943132 C22.1678932,23.3657598 22,23.7407598 22,24.1549734 L22,31.5 L15,31.5 C14.3096441,31.5 13.6846441,31.220178 13.232233,30.767767 C12.779822,30.3153559 12.5,29.6903559 12.5,29 L12.5,13.4584744 C12.5,12.9384603 12.7693304,12.4555453 13.2117564,12.1822801 L25.7372521,4.44588632 C25.8177742,4.39615173 25.9088871,4.37128443 26,4.37128443 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>`;

    const Homesvg = () => <SvgXml xml={img} height="60%" width="60%" />

    return <Homesvg />
}
import React from "react";
import { SvgXml } from "react-native-svg";

export default function Filessvgimport(){
    const img = `
    
<svg width="31px" height="27px" viewBox="0 0 31 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Tab-Bar-Icon---Files" transform="translate(-13.000000, -6.000000)" stroke="#979797">
        <path d="M40.932563,14.5235047 L40.932563,11.6539738 C40.932563,11.101689 40.4848478,10.6539738 39.932563,10.6539738 L25.0299657,10.6539738 C24.477681,10.6539738 24.0299657,10.2062585 24.0299657,9.65397376 L24.0299657,8 C24.0299657,7.44771525 23.5822505,7 23.0299657,7 L15,7 C14.4477153,7 14,7.44771525 14,8 L14,30.8571429 C14,31.4094276 14.4477153,31.8571429 15,31.8571429 L36.3206186,31.8571429 C37.6898992,31.8571429 38.8854235,30.9299924 39.2262174,29.6037991 L42.679072,16.1670797 C42.8165276,15.6321737 42.4943304,15.087117 41.9594245,14.9496613 C41.8781125,14.9287665 41.7944928,14.9181943 41.710539,14.9181943 L41.0106117,14.9181943 L41.0106117,14.9181943 L20.0447678,14.9181943 C19.601266,14.9181943 19.2107476,15.2103071 19.0854837,15.6357514 L14.4377245,31.4213181 L14.4377245,31.4213181" id="Files-Icon"></path>
    </g>
</g>
</svg>`;

    const Filessvg = () => <SvgXml xml={img}  height="80%" width="80%"  />

    return <Filessvg />
}
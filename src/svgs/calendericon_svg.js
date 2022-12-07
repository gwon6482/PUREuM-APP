import React from "react";
import { SvgXml } from "react-native-svg";

export default function Calendarsvgimport(){
    const img = `
    <svg width="28px" height="29px" viewBox="0 0 28 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Tab-bar-Icon---Calander" transform="translate(-12.000000, -3.000000)">
                <g transform="translate(12.000000, 4.000000)">
                    <path d="M21.5,0 C22.3284271,0 23,0.671572875 23,1.5 L23,3 L25,3 C26.6568542,3 28,4.34314575 28,6 L28,25 C28,26.6568542 26.6568542,28 25,28 L3,28 C1.34314575,28 0,26.6568542 0,25 L0,6 C0,4.34314575 1.34314575,3 3,3 L5,3 L5,1.5 C5,0.671572875 5.67157288,0 6.5,0 C7.32842712,0 8,0.671572875 8,1.5 L8,3 L20,3 L20,1.5 C20,0.671572875 20.6715729,0 21.5,0 Z M27,12 L1,12 L1,25 C1,26.0543618 1.81587779,26.9181651 2.85073766,26.9945143 L3,27 L25,27 C26.1045695,27 27,26.1045695 27,25 L27,12 Z M5,4 L3,4 C1.8954305,4 1,4.8954305 1,6 L1,11 L27,11 L27,6 C27,4.8954305 26.1045695,4 25,4 L23,4 L23,4.5 C23,5.32842712 22.3284271,6 21.5,6 C20.6715729,6 20,5.32842712 20,4.5 L20,4 L8,4 L8,4.5 C8,5.32842712 7.32842712,6 6.5,6 C5.67157288,6 5,5.32842712 5,4.5 L5,4 Z M7,4 L6,4 L6,4.5 C6,4.77614237 6.22385763,5 6.5,5 C6.77614237,5 7,4.77614237 7,4.5 L7,4 Z M22,4 L21,4 L21,4.5 C21,4.77614237 21.2238576,5 21.5,5 C21.7761424,5 22,4.77614237 22,4.5 L22,4 Z M21.5,1 C21.2238576,1 21,1.22385763 21,1.5 L21,3 L22,3 L22,1.5 C22,1.22385763 21.7761424,1 21.5,1 Z M6.5,1 C6.22385763,1 6,1.22385763 6,1.5 L6,3 L7,3 L7,1.5 C7,1.22385763 6.77614237,1 6.5,1 Z" id="Combined-Shape" fill="#979797" fill-rule="nonzero"></path>
                    <rect id="Rectangle" fill="#979797" x="9" y="14" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-2" fill="#979797" x="15" y="14" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-3" fill="#979797" x="21" y="14" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-6" fill="#979797" x="9" y="18" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-5" fill="#979797" x="15" y="18" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-4" fill="#979797" x="21" y="18" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-9" fill="#979797" x="9" y="22" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-11" fill="#979797" x="3" y="18" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-10" fill="#979797" x="3" y="22" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-8" fill="#979797" x="15" y="22" width="3" height="3" rx="1"></rect>
                    <rect id="Rectangle-Copy-7" fill="#979797" x="21" y="22" width="3" height="3" rx="1"></rect>
                    <path d="M3,3 L25,3 C26.6568542,3 28,4.34314575 28,6 L28,11 C28,11.5522847 27.5522847,12 27,12 L0,12 L0,12 L0,6 C-2.02906125e-16,4.34314575 1.34314575,3 3,3 Z" id="Rectangle"></path>
                    <rect id="Rectangle" stroke="#979797" fill="#FFFFFF" x="5" y="0" width="3" height="6" rx="1.5"></rect>
                    <rect id="Rectangle-Copy" stroke="#979797" fill="#FFFFFF" x="20" y="0" width="3" height="6" rx="1.5"></rect>
                </g>
            </g>
        </g>
    </svg>`;

    const Canlendarsvg = () => <SvgXml xml={img} height="60%" width="60%" />

    return <Canlendarsvg />
}
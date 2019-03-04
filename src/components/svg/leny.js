/* leny/leny.github.io
 *
 * /src/components/svg/leny.js - Leny SVG Component
 *
 * coded by leny@flatLand!
 * started at 04/03/2019
 */

import React from "react";
import {keyframes, css} from "@emotion/core";
import {percent} from "koutla-swiss";

import {MAIN_COLOR, REDHEAD_COLOR} from "../../core/constants";

const hairs = keyframes`
    0% {
        fill: ${MAIN_COLOR};
    }
    45% {
        fill: ${MAIN_COLOR};
    }
    55% {
        fill: ${REDHEAD_COLOR};
    }
    95% {
        fill: ${REDHEAD_COLOR};
    }
    100% {
        fill: ${MAIN_COLOR};
    }
`;

const winkEye = keyframes`
    0% {
        transform: scaleY(1.0);
    }
    50% {
        transform: scaleY(0.25);
    }
    85% {
        transform: scaleY(0.25);
    }
    100% {
        transform: scaleY(1.0);
    }
`;

const winkFace = keyframes`
    0% {
        transform: rotate(0);
    }
    33% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(0);
    }
`;

const styles = {
    head: css({
        transformOrigin: [percent(42), percent(50), 0].join(" "),
        "&:hover": {
            animation: [winkFace, "0.75s"].join(" "),
            "#right-eye": {
                animation: [winkEye, "0.5s"].join(" "),
            },
        },
    }),
    hairs: css({
        animation: [hairs, "15s", "ease", "0s", "infinite"].join(" "),
        animationPlayState: "running",
    }),
    rightEye: css({
        transformOrigin: [percent(50), percent(55), 0].join(" "),
    }),
};

export default ({className, fill = "#000000"}) => (
    <svg
        css={styles.head}
        className={className}
        viewBox={"0 0 32 32"}
        version={"1.1"}
        xmlns={"http://www.w3.org/2000/svg"}>
        <g stroke={"none"} strokeWidth={"1"} fill={fill} fillRule={"evenodd"}>
            <path
                d={
                    "M16,27 C21.5228475,27 26,22.5228475 26,17 C26,11.4771525 21.5228475,7 16,7 C10.4771525,7 6,11.4771525 6,17 C6,22.5228475 10.4771525,27 16,27 L16,27 L16,27 L16,27 L16,27 L16,27 Z M16,25 C20.418278,25 24,21.418278 24,17 C24,12.581722 20.418278,9 16,9 C11.581722,9 8,12.581722 8,17 C8,21.418278 11.581722,25 16,25 L16,25 L16,25 L16,25 L16,25 L16,25 Z"
                }
                id={"face"}
            />
            <path
                d={
                    "M13,16.75 C12.31,16.75 11.75,17.31 11.75,18 C11.75,18.69 12.31,19.25 13,19.25 C13.69,19.25 14.25,18.69 14.25,18 C14.25,17.31 13.69,16.75 13,16.75 L13,16.75 Z"
                }
                id={"left-eye"}
            />
            <path
                d={
                    "M19,16.75 C18.31,16.75 17.75,17.31 17.75,18 C17.75,18.69 18.31,19.25 19,19.25 C19.69,19.25 20.25,18.69 20.25,18 C20.25,17.31 19.69,16.75 19,16.75 L19,16.75 Z"
                }
                id={"right-eye"}
                css={styles.rightEye}
            />
            <path
                d={
                    "M12.794739,13.7140665 C10.2607496,15.9082893 7.79858398,15.2455368 7.79858398,15.2455368 C7.79858398,15.2455368 7.4100144,14.8681614 7.08729087,14.4496091 C6.61761228,14.4623702 6.03248946,14.6274142 5.48640195,15.1999838 C5.05814061,14.1463298 6.63371159,12.4902761 6.81391663,12.3057088 C7.37001026,10.0260085 9.33564951,8.88565653 10.7252588,8.35202565 C10.7731447,7.86615588 10.6785201,7.21601115 10.097168,6.57836914 C10.8595043,6.32891268 11.8512004,7.09455908 12.4297635,7.63516846 C12.9904601,7.04703223 14.4969148,5.7890625 17.1250002,5.7890625 C21.7661135,5.7890625 22.1979435,9.31441188 24.801486,10.0842079 C27.4050285,10.8540039 30.108388,10.0842079 30.108388,10.0842079 C30.108388,10.0842079 27.8702529,15.2455368 18.4139874,15.2455368 C16.3587983,15.2455368 15.1868813,14.4181075 14.5521235,13.6857374 C14.6590927,14.1993896 14.9376217,14.8113155 15.5556641,15.4533692 C14.773791,15.6212659 13.5382693,14.4930478 12.794739,13.7140665 L12.794739,13.7140665 Z"
                }
                id={"hairs"}
                css={styles.hairs}
            />
        </g>
    </svg>
);

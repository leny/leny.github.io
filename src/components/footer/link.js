/* leny/leny.github.io
 *
 * /src/components/footer/link.js - Footer Link Component
 *
 * coded by leny@flatLand!
 * started at 04/03/2019
 */

import React, {useState} from "react";
import {css} from "@pwops/emotion-css";
import {
    translateX,
    translateY,
    percent,
    s,
    cubicBezier,
    rem,
    attr,
} from "@pwops/core";

import {MAIN_COLOR, BCG_COLOR} from "../../core/constants";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const styles = {
    container: css({
        position: "relative",
        "&::before, &::after": {
            visibility: "hidden",
            opacity: 0,
            pointerEvents: "none",
            transition: ["all", s(0.15), cubicBezier(0.5, 1, 0.25, 1)],
            zIndex: 1,
        },
        "&::before": {
            absolute: [null, null, percent(100), percent(50)],
            padding: [rem(0.5), rem(1.5)],
            minWidth: rem(12),
            whiteSpace: "nowrap",
            borderRadius: rem(0.3),
            background: MAIN_COLOR,
            color: BCG_COLOR,
            content: attr("data-tooltip"),
            textAlign: "center",
            fontSize: rem(1.4),
            lineHeight: 1.2,
            marginBottom: rem(0.5),
            transform: translateX(percent(-50)),
        },
        "&::after": {
            absolute: [null, null, percent(100), percent(50)],
            border: [rem(0.8), "solid", "transparent"],
            width: 0,
            content: `""`,
            fontSize: 0,
            lineHeight: 0,
            transform: translateX(percent(-50)),
            borderTop: [rem(0.8), "solid", MAIN_COLOR],
            borderBottom: "none",
        },
        "&[data-tooltip]:hover::before, &[data-tooltip]:hover::after": {
            visibility: "visible",
            opacity: 1,
            transform: [translateX(percent(-50)), translateY(rem(-0.5))],
        },
    }),
    icon: css({
        display: "inline-block",
        size: [`${rem(2.4)} !important`],
    }),
};

export default ({title, url, icon}) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <a
            key={title}
            css={styles.container}
            href={url}
            rel={"external"}
            title={isHovered ? "" : title}
            data-tooltip={title}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <FontAwesomeIcon css={styles.icon} icon={icon.split("_")} />
        </a>
    );
};

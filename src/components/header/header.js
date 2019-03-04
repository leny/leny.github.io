/* leny/leny.github.io
 *
 * /src/components/header/header.js - Header Component
 *
 * coded by leny@flatLand!
 * started at 04/03/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, margin, size, mq, flexcolumn} from "koutla-swiss";

import {MQ_TABLET} from "../../core/constants";

import Leny from "../svg/leny";
import Name from "../svg/leny.me";

const styles = {
    container: css({
        ...margin(0),
    }),
    title: css({
        ...margin(0, 0, rem(2)),
        ...flexcolumn("flex-start", "center"),
    }),
    svg: css({
        display: "block",
        ...margin(0),
    }),
    leny: css({
        ...size(rem(7.2)),
        flex: "none",
        ...mq(MQ_TABLET, {
            ...size(rem(9.6)),
        }),
    }),
    name: css({
        ...size(rem(24), rem(6.4)),
        ...mq(MQ_TABLET, {
            height: rem(8.2),
        }),
    }),
};

export default ({className}) => (
    <header css={styles.container} className={className}>
        <h1 css={styles.title}>
            <Leny css={[styles.svg, styles.leny]} />
            <Name css={[styles.svg, styles.name]} title={"leny.me"} />
        </h1>
    </header>
);

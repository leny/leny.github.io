/* leny/leny.github.io
 *
 * /src/components/content/content.js - Content Component
 *
 * coded by leny@flatLand!
 * started at 04/03/2019
 */

import React from "react";
import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";

import {BORDER_COLOR} from "../../core/constants";

const styles = {
    container: css({
        margin: [0, 0, rem(2.4)],
        padding: [rem(0.8), 0],
        borderTop: [rem(0.1), "solid", BORDER_COLOR],
        borderBottom: [rem(0.1), "solid", BORDER_COLOR],
    }),
    title: css({
        display: "none",
    }),
    description: css({
        margin: [0],
        fontSize: rem(2),
        textAlign: "center",
    }),
};

export default ({className}) => (
    <section css={styles.container} className={className}>
        <h2 css={styles.title}>{"En savoir plus sur moi…"}</h2>
        <p css={styles.description}>
            <a href={"//pierre-antoine.delnatte.be"} rel={"external"}>
                {"Consulter mon CV"}
            </a>
        </p>
    </section>
);

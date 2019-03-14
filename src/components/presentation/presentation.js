/* leny/leny.github.io
 *
 * /src/components/presentation/presentation.js - Presentation Component
 *
 * coded by leny@flatLand!
 * started at 04/03/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@pwops/emotion-css";
import {mq} from "../../core/utils";
import {rem} from "@pwops/core";

import {MQ_TABLET} from "../../core/constants";

const styles = {
    container: css({
        margin: [0, 0, rem(1.6)],
        fontSize: rem(1.6),
    }),
    title: css({
        display: "block",
        marginBottom: rem(0.25),
        fontSize: rem(1.8),
        ...mq(MQ_TABLET, {fontSize: rem(1.6)}),
    }),
};

export default ({className}) => (
    <StaticQuery
        query={graphql`
            query {
                dataJson {
                    title
                    description
                }
            }
        `}
        render={data => (
            <p css={styles.container} className={className}>
                <strong css={styles.title}>{data.dataJson.title}</strong>
                <span>{data.dataJson.description}</span>
            </p>
        )}
    />
);

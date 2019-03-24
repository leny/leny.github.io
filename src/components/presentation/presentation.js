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
import md from "markdown-it";

import {MQ_TABLET} from "../../core/constants";

const parser = md();

const styles = {
    container: css({
        margin: [0, 0, rem(1.6)],
        fontSize: rem(1.6),
    }),
    title: css({
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
            <section css={styles.container} className={className}>
                <p css={styles.title}>
                    <strong>{data.dataJson.title}</strong>
                </p>
                {data.dataJson.description.map(content => (
                    <p
                        key={content}
                        dangerouslySetInnerHTML={{
                            __html: parser.renderInline(content),
                        }}
                    />
                ))}
            </section>
        )}
    />
);

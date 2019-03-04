/* leny/leny.github.io
 *
 * /src/components/footer/footer.js - Footer Component
 *
 * coded by leny@flatLand!
 * started at 04/03/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@emotion/core";
import {rem, size, flexrow, important} from "koutla-swiss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const styles = {
    container: css({
        ...flexrow("space-between", "center"),
    }),
    title: css({display: "none"}),
    icon: css({
        display: "inline-block",
        ...size(important(rem(2.4))),
    }),
};

export default ({className}) => (
    <StaticQuery
        query={graphql`
            query {
                dataJson {
                    links {
                        url
                        icon
                        title
                    }
                }
            }
        `}
        render={data => (
            <footer css={styles.container} className={className}>
                <h2 css={styles.title}>
                    {"Retrouvez-moi un peu partout sur le web"}
                </h2>
                {data.dataJson.links.map(({url, icon, title}) => (
                    <a key={title} href={url} rel={"external"} title={title}>
                        <FontAwesomeIcon
                            css={styles.icon}
                            icon={icon.split("_")}
                        />
                    </a>
                ))}
            </footer>
        )}
    />
);

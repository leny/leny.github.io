/* leny/leny.github.io
 *
 * /src/components/footer/footer.js - Footer Component
 *
 * coded by leny@flatLand!
 * started at 04/03/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@pwops/emotion-css";

import Link from "./link";

const styles = {
    container: css({
        flexRow: ["space-between", "center"],
    }),
    title: css({display: "none"}),
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
                <h2 css={styles.title}>{"Find me at these places:"}</h2>
                {data.dataJson.links.map(({url, icon, title}) => (
                    <Link key={url} title={title} url={url} icon={icon} />
                ))}
            </footer>
        )}
    />
);

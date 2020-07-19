/* leny/leny.github.io
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 28/02/2019
 */

import React from "react";
import {graphql} from "gatsby";
import {css} from "@pwops/emotion-css";
import {mq} from "../core/utils";
import {vh, rem, percent} from "@pwops/core";

import {MQ_TABLET} from "../core/constants";

import {Helmet} from "react-helmet";
import "../core/font-awesome";
import GlobalStyles from "../components/head/global-styles";
import ShareCard from "../components/head/share-card";

import Header from "../components/header/header";
import Presentation from "../components/presentation/presentation";
import Content from "../components/content/content";
import Footer from "../components/footer/footer";

const styles = {
    wrapper: css({
        position: "relative",
        flexRow: ["center", "center"],
        minHeight: vh(100),
        zIndex: 100,
        transform: "translateZ(0)",
        transformOrigin: "preserve-3d",
    }),
    main: css({
        width: percent(90),
        ...mq(MQ_TABLET, {
            maxWidth: rem(58),
            "&::before, &::after": {
                content: `" "`,
                display: "table",
            },
            "&::after": {
                clear: "both",
            },
        }),
    }),
    header: css({
        ...mq(MQ_TABLET, {
            width: rem(24),
            float: "left",
        }),
    }),
    presentation: css({
        ...mq(MQ_TABLET, {
            margin: [rem(11.75), 0, rem(2.4), rem(25)],
        }),
    }),
    content: css({
        ...mq(MQ_TABLET, {
            margin: [0, 0, rem(2.4), rem(25)],
        }),
    }),
    footer: css({
        ...mq(MQ_TABLET, {
            margin: [0, 0, 0, rem(25)],
        }),
    }),
};

export const query = graphql`
    query {
        dataJson {
            title
            cards {
                twitter {
                    card
                    title
                    description
                    image
                    creator
                }
                facebook {
                    type
                    title
                    description
                    site_name
                    image
                    locale
                }
            }
        }
    }
`;

export default ({data}) => (
    <div css={styles.wrapper}>
        <Helmet
            htmlAttributes={{
                lang: "en",
            }}>
            <title>{"leny.me - Pierre-Antoine Delnatte"}</title>
            <meta httpEquiv={"X-Clacks-Overhead"} content={"GNU Terry Pratchett"} />
        </Helmet>
        <GlobalStyles />
        <ShareCard type={"twitter"} values={data.dataJson.cards.twitter} />
        <ShareCard type={"og"} values={data.dataJson.cards.facebook} />
        <main css={styles.main}>
            <Header css={styles.header} />
            <Presentation css={styles.presentation} />
            <Content css={styles.content} />
            <Footer css={styles.footer} />
        </main>
    </div>
);

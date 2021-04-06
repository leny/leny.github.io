/* leny/leny.github.io
 *
 * /gatsby-config.js - Gatsby main configuration file
 *
 * coded by leny@flatLand!
 * started at 28/02/2019
 */

module.exports = {
    plugins: [
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data/`,
            },
        },
        {
            resolve: `gatsby-plugin-emotion`,
        },
        {
            resolve: `@el7cosmos/gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Source Sans Pro`,
                        variants: [`400`, `600`],
                    },
                ],
            },
        },
    ],
};

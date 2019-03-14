/* leny/leny.github.io
 *
 * /src/core/utils.js - Misc utils
 *
 * coded by leny@flatLand!
 * started at 14/03/2019
 */

export const mq = (query, props = {}) => ({[`@media(${query})`]: props});

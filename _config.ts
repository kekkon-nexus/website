import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume();

site.use(jsx());
site.use(lightningCss());

export default site;

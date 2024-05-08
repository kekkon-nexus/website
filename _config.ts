import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";

const site = lume();

site.use(jsx());
site.copy("style.css");

export default site;

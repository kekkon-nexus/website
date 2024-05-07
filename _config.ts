import lume from "lume/mod.ts";

const site = lume();

site.copy("index.html");
site.copy("style.css");

export default site;

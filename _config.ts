import lume from "lume/mod.ts";
import source_maps from "lume/plugins/source_maps.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "npm:@tailwindcss/typography";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(source_maps());
site.use(tailwindcss({
  options: {
    plugins: [typography],
  },
}));
site.use(postcss());

export default site;

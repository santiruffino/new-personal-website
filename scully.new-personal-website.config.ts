import { setPluginConfig, ScullyConfig, prod } from '@scullyio/scully';
import { GoogleAnalytics } from '@scullyio/scully-plugin-google-analytics';

const defaultPostRenderers = [];

if (prod) { 
  setPluginConfig(GoogleAnalytics, {globalSiteTag: 'G-9YBPCZYRSL'});
  defaultPostRenderers.push(GoogleAnalytics);
}

export const config: ScullyConfig = {
  defaultPostRenderers,
  projectRoot: "./src",
  projectName: "new-personal-website",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: [...defaultPostRenderers],
      slug: {
        folder: "./blog"
      }
    },
  }
};
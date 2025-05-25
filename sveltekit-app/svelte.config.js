import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import shiki from 'shiki';
import mdIt from 'markdown-it'; // Import markdown-it itself
import mdBlockEmbed from 'markdown-it-block-embed';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      highlight: {
        highlighter: async (code, lang = 'text') => {
          const highlighter = await shiki.getHighlighter({ theme: 'nord' });
          return highlighter.codeToHtml(code, lang);
        }
      },
      // Use a function to customize the markdown-it instance
      markdownIt: (md) => { // This replaces the old markdownItOptions
        // md parameter is the default markdown-it instance mdsvex uses.
        // We are creating a new instance here as per example,
        // or we could potentially md.use(mdBlockEmbed).
        // Creating new instance to ensure options are set as desired.
        const markdownItInstance = mdIt({ html: true, typographer: true });
        markdownItInstance.use(mdBlockEmbed, {
          containerClassName: 'video-embed',
          outputPlayerSize: false,
        });
        return markdownItInstance;
      },
      // remarkPlugins: [], // For remark plugins
      // rehypePlugins: [], // For rehype plugins
    }),
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, 
      precompress: false,
      strict: true
    }),
  }
};

export default config;

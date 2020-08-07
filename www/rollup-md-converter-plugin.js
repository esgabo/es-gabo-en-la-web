import { createFilter } from 'rollup-pluginutils';
import path from 'path';
import frontMatter from 'gray-matter';
import readingTime from 'reading-time';
import MarkdownIt from 'markdown-it';
import mdBlockVideoPlugin from 'markdown-it-block-embed';
import shiki from 'shiki';

export default function convertMarkdown(options = {}) {
    const filter = createFilter(options.include, options.exclude);

    let highlighter;
    // forces to wait for promise
    (async function() { highlighter = await getHighlighter();})();

    const converter = new MarkdownIt({
      highlight: (code, lang) => {
        return highlighter.codeToHtml(code, lang);
      }
    })
    .use(mdBlockVideoPlugin, {
      containerClassName: "video-embed",
      outputPlayerSize: false
    });

    return {
        name: 'rollup-md-converter-plugin',

        transform(code, id) {
            if (!filter(id) === -1) return null;

            const extension = path.extname(id)

            if (extension !== '.md') return null;

            const matterResult = frontMatter(code);
            const metadata = matterResult.data;
            metadata.reading = readingTime(matterResult.content);       

            const html = converter.render(matterResult.content);

            const result = JSON.stringify({
                html,
                metadata: metadata,
                filename: path.basename(id),
                path: id
            });

            return {
                code: `export default ${result}`,
                map: { mappings: '' },
            };
        }
    };
}

function getHighlighter() {
  return shiki.getHighlighter({ theme: 'nord' });
}
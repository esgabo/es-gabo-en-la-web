import { createFilter } from 'rollup-pluginutils';
import path from 'path';
import frontMatter from 'gray-matter';

export default function convertMarkdown(options = {}) {
    const filter = createFilter(options.include, options.exclude);

    const converter = options.converter;

    return {
        name: 'rollup-md-converter-plugin',

        transform(code, id) {
            if (!filter(id) === -1) return null;

            const extension = path.extname(id)

            if (extension !== '.md') return null;

            const matterResult = frontMatter(code);
            const html = converter.convertMarkdown(matterResult.content);

            const result = JSON.stringify({
                html,
                metadata: matterResult.data,
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


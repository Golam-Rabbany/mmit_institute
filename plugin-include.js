import { readFileSync } from 'fs';

const pattern = /(<main[\s\w="-:]*>).*(<\/main>)/s;

function transform(filename, content) {
    const indexContent = readFileSync('./pages/index.html', {encoding:'utf8', flag:'r'});
    if (filename.includes('.html') && !filename.includes('index.html') && !content.match(pattern)) {
        let match = indexContent.match(pattern);
        return indexContent.replace(pattern, match[1]+"\n"+content+"\n"+match[2]);
    }
    return null;
}

export default function pluginInclude () {
    return {
        name: 'include-html',
        transform (content, filename) {
            return transform(filename, content)
        },
        transformIndexHtml(content, info) {
            return transform(info.filename, content)
        }
    };
}
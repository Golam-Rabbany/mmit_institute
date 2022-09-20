import { defineConfig } from 'vite';
import pluginInclude from './plugin-include';
import fs from 'fs';

function discoverPages(path) {
    const pages = {
        entry: 'index.html'
    }
    fs.readdirSync(path).forEach(file => {
        let match = file.match(/(.*)\.html/);
        if(match) {
            pages[match[1]] = path+'/'+match[0]
        }
    });
    return pages
}


export default defineConfig({
    server: {
      open: '/pages/index.html'
    },
    build: {
        rollupOptions: {
            input: discoverPages('./pages')
        }
    },
    plugins: [
        pluginInclude()
    ]
});

  
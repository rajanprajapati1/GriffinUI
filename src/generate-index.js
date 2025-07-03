import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Absolute path to the New components folder
const componentsDir = join(__dirname, './components/New');

// Final index.ts file path in the current src directory
const indexFilePath = join(__dirname, 'index.ts'); // ✅ Fixed this line

const files = fs.readdirSync(componentsDir);

const exportLines = files
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => {
    const componentName = file.replace('.tsx', '');
    return `export { default as ${componentName} } from './components/New/${componentName}';`;
  });

fs.writeFileSync(indexFilePath, exportLines.join('\n') + '\n');

console.log(`✅ index.ts generated with ${exportLines.length} components.`);

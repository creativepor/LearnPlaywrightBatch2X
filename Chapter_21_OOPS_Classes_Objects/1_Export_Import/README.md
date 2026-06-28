# Export & Import Module - ES6 Modules

This folder contains examples demonstrating **ES6 Module System** for organizing and reusing code across multiple files.

## Overview

ES6 modules allow you to:
- **Export** variables, functions, and classes from one file
- **Import** them in another file
- Organize code into reusable, maintainable pieces
- Avoid global namespace pollution

## Files in This Folder

### 1. **181_Export_import.js** (Consumer Module)
- Demonstrates importing named exports from different modules
- Imports `BASE_URL` and `formatTestName` from utility files
- Shows basic import syntax

### 2. **182_Utils.js** (Consumer Module)
- Demonstrates **aliasing imports** using the `AS` keyword
- Imports the same variable `BASE_URL` from multiple modules with different aliases
  ```javascript
  import { BASE_URL as bul_util, ... } from "../utils.js";
  import { BASE_URL as bul_testtul, ... } from "../testutils.js";
  ```
- Prevents naming conflicts when importing identically named exports

### 3. **183_logger.js** (Consumer Module)
- Demonstrates importing **default exports**
- Uses simple syntax: `import log from '../logger.js'`
- Default exports don't need curly braces

### 4. **184_testUtils.js** (Provider Module)
- Demonstrates **named exports** for multiple items
- Exports:
  - `BASE_URL` variable
  - `formatUpperCaseString()` function
- Shows that some items can be left unexported (like `fname`)

### 5. **185_utils2.js** (Provider Module)
- Demonstrates **named exports** with utility functions
- Exports:
  - `BASE_URL` variable
  - `formatTestName()` function
- Similar structure to testUtils.js for comparison

### 6. **186_logger2.js** (Provider Module)
- Demonstrates **default export** and **named exports** together
  ```javascript
  export default function log(message) { ... }
  export function log2(message) { ... }
  ```
- Shows mixing default and named exports

## Key Concepts

### Named Exports & Imports
```javascript
// Export
export let BASE_URL = "https://example.com";
export function myFunction() { ... }

// Import
import { BASE_URL, myFunction } from "./module.js";
```

### Default Export & Import
```javascript
// Export
export default function log(message) { ... }

// Import
import log from "./logger.js";
```

### Aliasing Imports (Renaming)
```javascript
import { BASE_URL as bul_util } from "./utils.js";
import { BASE_URL as bul_testtul } from "./testutils.js";
```
Useful when importing the same name from multiple modules.

### Mixed Imports
```javascript
import defaultExport, { namedExport1, namedExport2 } from "./module.js";
```

## Export/Import Summary Table

| Type | Export Syntax | Import Syntax | Use Case |
|------|---------------|---------------|----------|
| **Named** | `export const x = 5;` | `import { x } from './file.js'` | Multiple exports from one module |
| **Default** | `export default fn;` | `import fn from './file.js'` | One main export per module |
| **Alias** | `export { x as y };` | `import { x as y } from './file.js'` | Avoid naming conflicts |
| **Namespace** | `export *` | `import * as ns from './file.js'` | Import all as object |

## Running These Examples

**Note:** ES6 modules require either:
- Node.js with `"type": "module"` in package.json
- Browser with `<script type="module">`
- Or a bundler like Webpack/Vite

```bash
# Example with Node.js (if package.json has "type": "module")
node 181_Export_import.js
node 182_Utils.js
node 183_logger.js
```

## Best Practices

✅ **DO:**
- Use named exports for multiple items
- Use default exports for the main export
- Use aliases to avoid conflicts
- Keep modules focused and single-responsibility

❌ **DON'T:**
- Export too many things from one module
- Mix multiple default exports in one file
- Use overly complex import paths
- Export mutable global state without care

## Related Concepts

- **Module Pattern:** Encapsulating code in functions/closures
- **Namespacing:** Organizing exports into logical groups
- **Tree Shaking:** Removing unused exports in bundlers
- **Module Resolution:** How imports are located

## Learning Path

1. Start with 181_Export_import.js (basic imports)
2. Move to 182_Utils.js (aliasing imports)
3. Study 186_logger2.js (default exports)
4. Review 184_testUtils.js and 185_utils2.js (export patterns)
5. Practice combining multiple export/import patterns

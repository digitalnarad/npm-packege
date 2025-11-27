# Node Common Dock

A CLI tool to scaffold a standard Node.js project structure.

## Features

- Generates a robust Node.js project structure.
- Merges with existing `package.json` if present.
- Interactive CLI prompts.

## Installation

You can install this package globally or use it with `npx`.

```bash
npm install -g node-common-dock-ab2
```

## Usage

### Quick Start (Recommended)

Run the following command in your terminal:

```bash
npx node-common-dock-ab2
```

This will prompt you for the target directory (default is current directory) and scaffold the project.

### Manual Installation

1. Create a new directory and initialize it:

   ```bash
   mkdir my-project
   cd my-project
   npm init -y
   ```

2. Install the package:

   ```bash
   npm install node-common-dock-ab2
   ```

3. Run the scaffold command:
   ```bash
   npx node-common-dock-ab2
   ```

### Options

- `-d, --dir <directory>`: Specify the target directory.
- `--overwrite`: Overwrite existing files without asking (use with caution).

## Project Structure

The generated project includes:

- **src/**: Source code (controllers, models, routes, etc.)
- **.env**: Environment variables
- **package.json**: Pre-configured scripts and dependencies

## License

MIT

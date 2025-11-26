#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const fsp = fs.promises;

// tiny arg parser
function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const val =
        argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
      args[key] = val;
    }
  }
  return args;
}

// rimraf
async function rimraf(p) {
  if (fs.existsSync(p)) {
    await fsp.rm(p, { recursive: true, force: true });
  }
}

// copy template
async function scaffoldFromLocal(templateDir, targetDir, overwrite) {
  if (overwrite) await rimraf(targetDir);
  if (fs.cp) {
    await fsp.cp(templateDir, targetDir, { recursive: true });
  }
}

// first invoke
(async () => {
  const args = parseArgs(process.argv);
  const processPath = process.cwd();
  const targetDir = args.dir || "boiler-plate";
  const overwrite = args.overwrite === "true" ? true : false;

  const absTarget = path.resolve(processPath, targetDir);
  if (fs.existsSync(absTarget) && !overwrite) {
    console.error(
      `Target ${absTarget} exists. Use --overwrite true or choose another --dir.`
    );
    return process.exit(1);
  }

  const templateDir = path.resolve(
    __dirname,
    "../templates/node-standard-main"
  );
  await scaffoldFromLocal(templateDir, absTarget, overwrite);

  console.log(`Scaffold complete at ${absTarget}`);
})();

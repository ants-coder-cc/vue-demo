//  用来检测node和npm版本的
"use strict";

// 下面的插件是chalk插件，他的作用是在控制台中输出不同的颜色的字，
// 大致这样用chalk.blue('Hello world')，这款插件只能改变命令行中的字体颜色
const chalk = require("chalk");
// 下面这个是semver插件，是用来对特定的版本号做判断的，
// 比如 // semver.gt('1.2.3','9.8.7') false 1.2.3版本比9.8.7版本低
// // semver.satisfies('1.2.3','1.x || >=2.5.0 || 5.0.0 - 7.2.3') true 1.2.3的版本符合后面的规则
const semver = require("semver");
const packageConfig = require("../package.json");
const shell = require("shelljs");

function exec(cmd) {
  return require("child_process")
    .execSync(cmd)
    .toString()
    .trim();
}

const versionRequirements = [
  {
    name: "node",
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
];

if (shell.which("npm")) {
  versionRequirements.push({
    name: "npm",
    currentVersion: exec("npm --version"),
    versionRequirement: packageConfig.engines.npm
  });
}

module.exports = function() {
  const warnings = [];

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i];

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(
        mod.name +
          ": " +
          chalk.red(mod.currentVersion) +
          " should be " +
          chalk.green(mod.versionRequirement)
      );
    }
  }

  if (warnings.length) {
    console.log("");
    console.log(
      chalk.yellow(
        "To use this template, you must update following to modules:"
      )
    );
    console.log();

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i];
      console.log("  " + warning);
    }

    console.log();
    process.exit(1);
  }
};

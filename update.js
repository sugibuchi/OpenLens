const fs = require('fs');

var packagejson = require('./lens/packages/open-lens/package.json');

packagejson.build.publish = [{
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens.Setup.${version}.${ext}";

if (process.platform != "win32") {
    // build both x86_64 and arm64 for Linux and Darwin
    packagejson.scripts['build:app'] = "electron-builder --publish onTag --x64 --arm64";
}

fs.writeFileSync('./lens/packages/open-lens/package.json', JSON.stringify(packagejson));

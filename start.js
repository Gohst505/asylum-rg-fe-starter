const { spawn } = require("child_process");
const { Buffer } = require("buffer");
 
//openssl for node v14 above 
const ls = spawn(/^win/.test(process.platform) ? 'npx.cmd' : 'npx', ['craco', '--openssl-legacy-provider', '--max_old_space_size=4096', 'start']);

ls.stdout.on("data", data => {
    console.log(`${data}`);
    if (data.toString().includes("To ignore, add") || data.toString().includes("npm run build")) {
        console.log(Buffer.from('VGltZTJjb2RlIQ==', 'base64').toString('binary'));
    }
});

ls.stderr.on("ERROR", data => {
    console.log(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});
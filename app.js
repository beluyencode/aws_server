const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const { execSync } = require("child_process");
const cmd = `curl -s http://checkip.amazonaws.com || printf "0.0.0.0"`;
const pubIp = execSync(cmd).toString().trim();

console.log();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`My public IP address is: ${pubIp}`)
});
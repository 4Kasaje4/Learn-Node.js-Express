const express = require('express');
const chalk = require('chalk');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname,'/public/')));

app.get('/',(req,res) => {
    res.send("Hello Kaseamsan");
});


app.listen(port, () => {
    console.log(chalk.yellow(`Server listening in port ${port}`));
});
require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const app = express();
const port = process.env.PORT;
const StudentsRouter = express.Router();

const M = require('./data/M.json');
const M1 = require('./data/M1.json');
const M2 = require('./data/M2.json');
const M3 = require('./data/M3.json');
const M4 = require('./data/M4.json');
const M5 = require('./data/M5.json');
const M6 = require('./data/M6.json');

app.set('views','./src/views');
app.set('view engine','ejs');
app.use('/', StudentsRouter);


StudentsRouter.route('/').get((req,res) => {
    res.render('index',{
        m : M
    })
})

StudentsRouter.route('/m/:id').get((req,res) => {
    const id = req.params.id;
    if( id == 1 ){
        res.render('M',{
            member: M1,
            m_id : id
        })
    }else if(id == 2){
        res.render('M',{
            member: M2,
            m_id : id
        })
    }else if(id == 3){
        res.render('M',{
            member: M3,
            m_id : id
        })
    }
    else if(id == 4){
        res.render('M',{
            member: M4,
            m_id : id
        })
    }
    else if(id == 5){
        res.render('M',{
            member: M5,
            m_id : id
        })
    }
    else if(id == 6){
        res.render('M',{
            member: M6,
            m_id : id
        })
    }
})


app.listen(port, () => {
    console.log(chalk.yellow(`Server listening in port ${port}`));
});

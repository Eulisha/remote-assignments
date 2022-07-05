const express = require('express');
const bodyPraser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.set('view engine', 'pug');
app.use(bodyPraser.urlencoded({extended:false}))

//Set mysql Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'assignment'
})

//login homepage
app.get('/', (req,res)=>{
    res.render('home') //呈現home.pug
})

//Sign in
app.post('/sign-in',(req,res) => {
    console.log(req.body);
    let sql = `SELECT * from user WHERE email = '${req.body.email}' AND password = '${req.body.password}';`;
    db.query(sql, (err,result)=>{
        if(err) {
            res.send('<script>alert("Oops, something worng. Please try again."); window.location.href = "/";</script>');
            throw err;
        } else if (result.length === 0){
            res.send('<script>alert("Wrong email or password. Please try again."); window.location.href = "/";</script>');
        } else{
            res.redirect('/member');
        }
        console.log(result);
    })
})
//Sign up
app.post('/sign-up',(req,res) => {
    console.log(req.body);
    let sqlSearch = `SELECT email FROM user WHERE email = '${req.body.email}';`;
    let sqlInsert = `INSERT INTO user (email, password) VALUES ('${req.body.email}', '${req.body.password}');`;
    db.query(sqlSearch, (err,result)=>{
        if(err) {
            res.send('<script>alert("Oops, something worng. Please try again."); window.location.href = "/";</script>');
            throw err;
        } else if (result.length !== 0){
            res.send('<script>alert("This email address already registed. Please try another one or use sign-in form."); window.location.href = "/";</script>');
        } else{
            db.query(sqlInsert, (err,result)=>{
                if(err) {
                    res.send('<script>alert("Oops, something worng. Please try again."); window.location.href = "/";</script>');
                    throw err;
                };
                res.redirect('/member');   
            })
        }
        console.log(result);
    })
})
//Finish sign-in or sign-up
app.get('/member',(req,res)=>{
    res.send('Welcome : )')
})

app.listen('3000', ()=>{
    console.log('server started on 3000.');
});


const express = require('express');
const router = express.Router();
const XMLHttpRequest = require('xhr2');

//首頁
router.get('/',(req,res)=>{
    res.send('Hello My Server.')
});


//連續數字計算器
router.get('/data',(req,res)=>{
    console.log(req.query);
    if (req.query.number){
        if(Number(req.query.number)){
            let total = 0;
            for (let i = 1; i<=Number(req.query.number);i++){
                total += i;
            };
            console.log(total);
            res.send(`${total}`);
        } else if (isNaN(Number(req.query.number))){
            console.log(Number(req.query.number));
            res.send('Wrong Parameter');
        }
    } else{
        console.log(Number(req.query.number));
        res.send('Lack of Parameter');
    }
});


//確認使用者名稱的cookie
router.get('/myName',(req,res)=>{
    console.log(req.cookies)
    const {username} = req.cookies;
    if (username){
        res.send('done'); //若有，則顯示done
    } else {
        res.render('user'); //若沒有，則顯示user.pug頁面
    }
})
//使用者輸入名稱後存入cookie
router.get('/trackName',(req,res)=>{
    res.cookie('username', req.query.name);
    res.redirect('/myName');
})


module.exports = router;

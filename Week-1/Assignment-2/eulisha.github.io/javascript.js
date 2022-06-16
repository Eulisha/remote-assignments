//動態更改歡迎訊息
const welcomemsg = document.querySelector('.welcome-msg')
// console.log(welcomemsg)
welcomemsg.addEventListener('click',()=>{
    welcomemsg.textContent = "歡迎你來！一起去戶外走走吧！ :)"})
//點選以展開或收合文章
const btn = document.querySelector('.read-more-btn')
const readMoreStatus= document.querySelector('#read-more-articles')
// console.log(readMoreStatus)
// console.log(btn)
btn.addEventListener('click',()=>{
    console.log(readMoreStatus.style.display);
    if (readMoreStatus.style.display === ''){
        readMoreStatus.style.display = 'flex';
    } 
    else{
        readMoreStatus.style.display = '';
    }
})

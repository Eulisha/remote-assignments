const inputNumber = document.getElementById('inputNumber');
const btnSubmitNumber = document.getElementById('btnSubmitNumber');

function getSubmitNumber(value) {
    let number = inputNumber.value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.reponseText);
            document.getElementById('result').innerHTML = `結果：${xhr.responseText}`;
        }
    }
    xhr.open('get',`/data?number=${number}`); //將收到的數字傳給/data做計算
    xhr.send();
}
btnSubmitNumber.addEventListener('click', getSubmitNumber); 
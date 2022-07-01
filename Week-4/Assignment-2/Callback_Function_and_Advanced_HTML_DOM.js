function ajax(src, callback){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src);
    xhr.onload = () =>{
        if(xhr.status == 200){
            console.log(xhr.response)
            let data = JSON.parse(xhr.responseText);
            callback(data);
        } else{
            console.log( Error(xhr.statusText));
        }
    };
    xhr.send();
}
function render(data){
    console.log(data);
    let ele = document.createElement('div')
    data.forEach(element => {
        let phone = document.createTextNode(element);
        ele.appendChild(phone); 
    });
    document.body.insertBefore(ele);
    
}

ajax(
    './products.json',
    // 'https://appworks-school.github.io/Remote-Assigiment-Data/products'
    function (resposnse){
        render(resposnse);
    }
)

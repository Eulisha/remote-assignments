function avg(data){
    let total = 0
    for (const item of data.products){
        total = total + item.price
    }
    return total/data.products.length
}

console.log(
    avg({
        size: 3,
        products:[
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            },
        ],
    })
)

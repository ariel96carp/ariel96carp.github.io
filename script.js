window.addEventListener('DOMContentLoaded', () => {
    const PRODUCTS = [
        {
            product: 'Televisor Samsung 42"',
            price: 55100
        },
        {
            product: 'Smart TV Philips 50"',
            price: 61250
        },
        {
            product: 'Smart TV Led Aorus 44"',
            price: 52000
        },
        {
            product: 'Smart TV Philips 40"',
            price: 48000
        }
    ]
    const getUserName = () => {
        let userName = prompt('¡Hola! ¿Cuál es tu nombre?')
        while (!(userName !== '')) {
            alert('Por favor ingrese un nombre.')
            userName = prompt('¡Hola! ¿Cuál es tu nombre?')
        }
        return userName
    }
    const getProduct = () => {
        let product = parseInt(prompt(`
            ¡Hola ${userName}! Elegí entre una de las siguientes opciones de compra (1 - 4): \n 
            1. Televisor Samsung 42" \n
            2. Smart TV Philips 50" \n
            3. Smart TV Led Aorus 44" \n
            4. Smart TV Philips 40"
        `))
        while (!(product >= 1 && product <= 4)) {
            alert('La opción elegida no es válida.')
            product = parseInt(prompt(`
                ¡Hola ${userName}! Elegí entre una de las siguientes opciones de compra: \n 
                1. Televisor Samsung 42" \n
                2. Smart TV Philips 50" \n
                3. Smart TV Led Aorus 44" \n
                4. Smart TV Philips 40"
            `))
        }
        return product
    }
    const getSaleQuantity = (index) => {
        let quantity = parseInt(prompt(`¿Cuántas unidades del televisor '${PRODUCTS[index].product}' desea comprar?`))
        while (isNaN(quantity) || quantity <= 0) {
            alert('Tiene que ingresar un número o ser mayor a 0.')
            quantity = parseInt(prompt(`¿Cuántas unidades del televisor '${PRODUCTS[index].product}' desea comprar?`))
        }
        return quantity
    }
    const userName = getUserName()
    let initiliaze = confirm('¿Desea realizar una compra?')
    while(initiliaze) {
        if (userName) {
            const product = getProduct()
            alert(`El precio del producto elegido es $${PRODUCTS[product - 1].price.toFixed(2)} `)
            const quantity = getSaleQuantity(product - 1)
            alert(`
                ¡Felicitaciones! Su compra de ${quantity} '${PRODUCTS[product - 1].product}' ha finalizado. \n
                El costo total de su compra es $${(PRODUCTS[product - 1].price * quantity).toFixed(2)}
            `)
        }
        initiliaze = confirm('¿Desea seguir comprando?')
    }
    alert('¡Muchas gracias por haber realizado la compra con nosotros!')
})
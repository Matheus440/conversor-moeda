let dolar = 5.8

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl") 

usdInput.addEventListener("keyup", () => {
    usdInput.value = formatCurrency(usdInput.value)

})

brlInput.addEventListener("keyup", () => {
    brlInput.format = formatCurrency(brlInput.value)
    
})

usdInput.value = "1000"
convert("usd-to-brl")

//function to convert the values
function formatCurrency(value) {
    let fixedValue = fixValue(value) //ajust value 
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formartter = new Intl.NumberFormat("pt-BR", options)
    return formartter.format(fixValue)    
}

function fixValue(value) {
    let fixValue = value.replace(",", ".")
    let floatValue = parseFloat(fixValue)
    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}



function convert(type) {
    if (type == "usd-to-brl") {



    }

    if (type == "brl-to-usd") {
    
    
    
    }   
}

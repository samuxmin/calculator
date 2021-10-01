const themeRange = document.getElementById('theme-toggle')
const keys = document.querySelector('.keys-container')
let calcText = document.getElementById('result');

let themeStep = 1;

keys.addEventListener('click', (e) => handleCalculatorButtons(e))
themeRange.addEventListener('change', (e)=>{
    themeStep = e.target.value
})

function handleCalculatorButtons (e) {
    if(e.target.tagName !== 'BUTTON' ){
        return
    }
    switch (e.target.innerHTML) {
        case "DEL":
            return calcText.innerText = calcText.innerText.slice(0,-1)
        
        case 'RESET':
        return calcText.innerText = "0"
    
        case '=':
            let result = eval(calcText.innerText.replaceAll("x", "*"))
            return calcText.innerText = result
        default:
            if(calcText.innerText ==="0"){
                calcText.innerText = calcText.innerText.slice(0,-1)
            }
            calcText.innerText += e.target.innerHTML
            break;
    }
}
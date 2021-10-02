const themeRange = document.getElementById('theme-toggle')
const keys = document.querySelector('.keys-container')
let calcText = document.getElementById('result');

const themes = ['normal', 'light', 'neon']

keys.addEventListener('click', (e) => handleCalculatorButtons(e))
themeRange.addEventListener('change', (e)=>{
    handleThemeChange(e.target.value)
});

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
function handleThemeChange (value){
    document.querySelector('body').classList.remove('normal-theme', 'light-theme', 'neon-theme')
    document.querySelector('body').classList.add(`${themes[parseInt(value)]}-theme`)
}
const themeRange = document.getElementById('theme-toggle')
const keys = document.querySelector('.keys-container')
let calcText = document.getElementById('result');

const themes = ['normal-theme', 'light-theme', 'neon-theme']

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
            if(calcText.innerText ==='Syntax ERROR' || calcText.innerText === "Math ERROR"){
                return calcText.innerText = '0'
            } else {
                return calcText.innerText = calcText.innerText.slice(0,-1)
        }

        case 'RESET':
        return calcText.innerText = "0"
    
        case '=':
            try {
                let result = eval(calcText.innerText.replaceAll("x", "*"))
                if(result === Infinity || isNaN(result)){
                    result = 'Math ERROR'
                }
                return calcText.innerText = result
            } catch (error) {
                return calcText.innerText = 'Syntax ERROR'
            }

        default:
            if(calcText.innerText ==="0"){
                calcText.innerText = calcText.innerText.slice(0,-1)
            } else if (calcText.innerText === "Syntax ERROR" || calcText.innerText === "Math ERROR"){
                calcText.innerText = ''
            }
            calcText.innerText += e.target.innerHTML
            break;
    }
}
function handleThemeChange (value){
    document.querySelector('body').classList.remove('normal-theme', 'light-theme', 'neon-theme')
    document.querySelector('body').classList.add(themes[parseInt(value)])-theme
}
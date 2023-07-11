const numbers = document.querySelectorAll('.num');
const pantalla = document.querySelector('.visor');
const clearButton = document.querySelector('.delete');
const equals = document.querySelector('.equals')
const pop = document.querySelector('.pop')
for(let i = 0; i < numbers.length; i++){
    const numero = numbers[i]
    numero.addEventListener('click', (e)=> {
        if(pantalla.value === 'ERR'){
            pantalla.value = ''
        }
        pantalla.value += numero.innerText
    })
}
clearButton.addEventListener('click', (e)=> pantalla.value = '')
equals.addEventListener('click', (e)=>{
    if(pantalla.value.includes('/0')){
        pantalla.value = 'ERR: COULD NOT DO THAT'
        return
    }
    pantalla.value = eval(pantalla.value)
    
})
pop.addEventListener('click', e => pantalla.value = pantalla.value.slice(0, -1))
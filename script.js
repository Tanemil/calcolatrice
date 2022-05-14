
let operatore1 = ''
let operatore2 = ''
let operazione = ''

let counter_sottrazione = 0

let  booleano_sottrazione = true

let booleano_operazione = true

let booleano_numero = true

let booleano_punto = true

let var_display = document.getElementsByTagName('p')[0]

function agg_1(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '1'
        aggiungi_a_var('1')
        booleano_sottrazione = false
    }
}
function agg_2(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '2'
        aggiungi_a_var('2')
        booleano_sottrazione = false
    }
}
function agg_3(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '3'
        aggiungi_a_var('3')
        booleano_sottrazione = false
    }
}
function agg_4(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '4'
        aggiungi_a_var('4')
        booleano_sottrazione = false
    }
}
function agg_5(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '5'
        aggiungi_a_var('5')
        booleano_sottrazione = false
    }
}
function agg_6(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '6'
        aggiungi_a_var('6')
        booleano_sottrazione = false
    }
}
function agg_7(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '7'
        aggiungi_a_var('7')
        booleano_sottrazione = false
    }
}
function agg_8(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '8'
        aggiungi_a_var('8')
        booleano_sottrazione = false
    }
}
function agg_9(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '9'
        aggiungi_a_var('9')
        booleano_sottrazione = false
    }
}
function agg_0(){
    check_lungezza()
    if (booleano_numero){
        var_display.innerText += '0'
        aggiungi_a_var('0')
        booleano_sottrazione = false
    }
}
function agg_punto(){
    check_lungezza()
    if (booleano_numero && booleano_punto){
        var_display.innerText += '.'
        aggiungi_a_var('.')
        booleano_punto = false
    }
}

function somma(){
    check_lungezza()
    if (booleano_operazione && operatore1 !== ''){
        var_display.innerText += '+'
        operazione += '+'
        booleano_operazione =false
        booleano_sottrazione = true
        booleano_numero = true
        booleano_punto = true
    }
}
function sottrai(){
    check_lungezza()
    if ( !booleano_operazione && booleano_sottrazione && (((counter_sottrazione == 0 && (operatore1 == '' || (operatore1 !== '' && operatore2 == '' ))) || counter_sottrazione == 0 && (operazione !== '' && operazione !== '-') ) || ((counter_sottrazione == 1 && operatore2 == '' && operatore1 !== '')|| counter_sottrazione == 1 && (operazione !== '' && operazione !== '-') ))){
        var_display.innerText += '-'
        aggiungi_a_var('-')
        counter_sottrazione++
        booleano_sottrazione = false 
        booleano_numero = true
        booleano_punto = true
    } else if ( booleano_operazione && (operatore1 !== '' && operatore2 == '')){
        var_display.innerText += '-'
        operazione += '-'
        booleano_operazione =false
        booleano_sottrazione = true 
        booleano_numero = true
        booleano_punto = true
    }
}
function moltiplica(){
    check_lungezza()
    if (booleano_operazione && operatore1 !== ''){
        var_display.innerText += '*'
        operazione += '*'
        booleano_operazione =false
        booleano_sottrazione = true
        booleano_numero = true
        booleano_punto = true
    }
}
function dividi(){
    check_lungezza()
    if (booleano_operazione && operatore1 !== ''){
        var_display.innerText += '/'
        operazione += '/'
        booleano_operazione =false
        booleano_sottrazione = true
        booleano_numero = true
        booleano_punto = true
    }
}
function cancella(){
    var_display.innerText = ''
    operatore1 = ''
    operatore2 = ''
    operazione = ''
    booleano_operazione = true
    counter_sottrazione = 0
    booleano_sottrazione = true
    booleano_numero = true
    booleano_punto = true
}

function calcola(){
    if (operazione == '/' && operatore2 == 0){
        alert('divisione per zero')
        cancella()
    } else{
        var_display.innerText = operazione_da_eseguire(operazione)
        operatore1 = operazione_da_eseguire(operazione)
        operatore2 = ''
        operazione = ''
        counter_sottrazione = 0
        booleano_operazione = true
        booleano_sottrazione = true
        booleano_numero = false
        booleano_punto = false
    }
}

function aggiungi_a_var(input){
    if (operazione == ''){
        operatore1 += input
    }else{
        operatore2 += input
    }
}

function operazione_da_eseguire(operatore){
    let risultato
    if (operatore == '+'){
        risultato = +operatore1 + +operatore2
    } else  if (operatore == '-'){
        risultato = +operatore1 - +operatore2
    }else  if (operatore == '*'){
        risultato = +operatore1 * +operatore2
    }else  if (operatore == '/'){
        risultato = +operatore1 / +operatore2
    } 
    return risultato
}

function check_lungezza(){
    if (var_display.innerText.length > 20){
        alert('hai finito lo spazio')
        booleano_numero = false
        booleano_punto = false
        booleano_operazione = false
    } 
}

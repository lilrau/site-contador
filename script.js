function calcular() {
    var start = window.document.querySelector('input#start')
    var end = window.document.querySelector('input#end')
    var step = window.document.querySelector('input#step')
    var res = window.document.querySelector('div#res')
    var o = Number(start.value) // inicio
    var f = Number(end.value) // fim
    var s = Number(step.value) // passo

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossível calcular, verifique os dados e tente novamente.'
    } else if (step.value == 0) {
        window.alert('[error]\nO valor "passo" não pode ser zero. Considerando passo como "1".')
        step = 1
        step.value = 1
    } else if (f > o) { // contagem progressiva
        res.innerHTML = 'Contando: '
        for (i = o; i <= f; i += s) {
            res.innerHTML += `${i} &#128073 `
        }
        res.innerHTML += '&#127937 &#129395'
    } else if (f < o) { // contagem regressiva
        res.innerHTML = 'Contando: '
        for (i = o; i >= f; i -= s) {
            res.innerHTML += `${i} &#128073 `
        }
        res.innerHTML += '&#127937 &#129395'
    }
}

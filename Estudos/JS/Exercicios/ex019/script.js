function gerar() {
    var num = document.getElementById('tab')
    var sl = document.getElementById('seltab')
    var res = document.getElementById('res')
    var valid = num * 10
    var n = Number(num.value)
    var c = 1
    sl.innerHTML = ''
    while (c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c} `
        sl.appendChild(item)
        c++
    }
    
}

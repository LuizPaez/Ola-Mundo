
function Contar() {
    var ini = document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('Erro, falta dados')
    }else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if( i < f){
            for( let c = i; c <= f; c += p){
                res.innerHTML += `${c} > `
            }
        }else {
            for( let c = i; c >= f; c -= p){
                res.innerHTML += `${c} > `
            }
        }


    }

}


    /*while (fim >= ini){
        ini + pas
    }
    res = ini
    res.innerText= `${res};`

}*/
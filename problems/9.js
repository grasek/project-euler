const calc = () => {
    const e = Array.from({length: 500}, (_, i) => ++i)
    for(let j = 100; j < e.length; j++){
        for(let k = 100; k < e.length; k++){
            for(let l = 100; l < e.length; l++){
                if(e[j]**2 + e[k]**2 == e[l]**2 && e[j] + e[k] + e[l] == 1000) return e[j] * e[k] * e[l];
            }
        }
    }
}

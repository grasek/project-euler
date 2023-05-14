const calc = () => {
    const dig = (num) => {return ([...(num.toString())]).map(e => parseInt(e))};

    const sameDig = (arr1, arr2) => arr1.every((element) => arr2.includes(element));

    for(let i = 125870; i < 250000; i++){
        if(sameDig(dig(i), dig(i * 2)) && sameDig(dig(i), dig(i * 3)) && sameDig(dig(i), dig(i * 4)) && sameDig(dig(i), dig(i * 5)) && sameDig(dig(i), dig(i * 6))) return i;
    }
}
console.log(calc())

const calc = () => {
    let result = [], i = 2n, pn = 3n, cn = 7n, pd = 2n, cd = 5n, no = 0n, d = 0n;
    while (i <= 1000) {
        no = cn * 2n + pn, d = cd * 2n + pd, pn = cn, pd = cd;
        if (String(no).length > String(d).length) result.push([no,d]);
        cn = no, cd = d;
        i++;
    }
    return result.length;
}

console.log(calc())

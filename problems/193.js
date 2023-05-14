const calc = () => {
	const result = [];

  const efficientSquareFree = (N) => {
  const Imax = Math.floor(Math.pow(N, 1 / 5));
  const D = Math.floor(Math.sqrt(N / Imax));

  const prime = new Array(D + 1).fill(1);
  const mobius = new Array(D + 1).fill(1);

  for (let i = 2; i <= D; i++) {
    if (!prime[i]) continue;
    mobius[i] = -1;
    for (let j = 2; j <= Math.floor(D / i); j++) {
      prime[i * j] = 0;
      mobius[i * j] *= -1;
    }
    for (let j = 1; j <= Math.floor(D / (i * i)); j++) mobius[j * i * i] = 0;
  }

  let s1 = 0;
  for (let i = 1; i <= D; i++) s1 += mobius[i] * Math.floor(N / (i * i));

  const M_list = [0];
  let M = 0;
  for (let i = 1; i <= D; i++) {
    M += mobius[i];
    M_list.push(M);
  }

  const Mxi_list = [];
  let Mxi_sum = 0;
  for (let i = Imax - 1; i >= 1; i--) {
    let Mxi = 1;
    const xi = Math.floor(Math.sqrt(N / i));

    const sqd = Math.floor(Math.sqrt(xi));
    for (let j = 1; j <= Math.floor(xi / (sqd + 1)); j++) {
      Mxi -= (Math.floor(xi / j) - Math.floor(xi / (j + 1))) * M_list[j];
    }

    for (let j = 2; j <= sqd; j++) {
      if (xi / j <= D) {
        Mxi -= M_list[Math.floor(xi / j)];
      } else {
        Mxi -= Mxi_list[Imax - j * j * i - 1];
      }
    }

    Mxi_list.push(Mxi);
    Mxi_sum += Mxi;
  }

  const s2 = Mxi_sum - (Imax - 1) * M_list[D];

  return s1 + s2;
}

return efficientSquareFree(2 ** 50)
}

console.log(calc());

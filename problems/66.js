const calc = () => {
	
function chakravala(n) {
  // Find the continued fraction of sqrt(n)
  let a0 = Math.floor(Math.sqrt(n));
  let m = 0, d = 1, a = a0;
  let seq = [a0];
  while (a !== 2*a0) {
    m = d*a - m;
    d = (n - m*m) / d;
    a = Math.floor((a0 + m) / d);
    seq.push(a);
  }
  
  // Use the continued fraction to find a fundamental solution
  let p = [0, 1];
  let q = [1, 0];
  let r = [a0, 1];
  for (let i = 1; i < seq.length; i++) {
    p.push(seq[i]*p[i] + p[i-1]);
    q.push(seq[i]*q[i] + q[i-1]);
    r.push(seq[i]*r[i] + r[i-1]);
  }
  let x = r[r.length - 2], y = q[q.length - 2];
  
  // Use transformations to generate an infinite sequence of solutions
  while (x*x - n*y*y !== 1) {
    let k = Math.floor((a0 + m*y) / Math.abs(d));
    let m1 = k*d - m;
    let d1 = (n - m1*m1) / d;
    let a1 = Math.floor((a0 + m1) / d1);
    let x1 = a1*x + n*y;
    let y1 = a1*y + x;
    x = x1;
    y = y1;
    m = m1;
    d = d1;
  }
  
  // Return the smallest positive integer solution
  return x;
}
	return chakravala(5)
}

console.log(calc());

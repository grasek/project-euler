function primePowerTriples(num){
    let result = 0;
    const triples = [];
    function sieveOfEratosthenes(num){
        const primes = [];
        let isPrime = new Array(num).fill(true);
        isPrime[0] = false;
        isPrime[1] = false;

        for(let i = 2; i <= Math.sqrt(isPrime.length); i++){
            if(isPrime[i] === false){
                continue;
            } else{
                for(let k = i * i; k < isPrime.length; k += i){
                    isPrime[k] = false;
                }
            }
        }

        for(let j = 0; j < isPrime.length; j++){
            if(isPrime[j] === true){
                primes.push(j);
            }
        }

        return primes;
    }

    const primes = sieveOfEratosthenes(Math.ceil(Math.sqrt(num)));
    
    function triplesGenerator(a, b, c){
        return a ** 2 + b ** 3 + c ** 4;
    }

    for(let primeA of primes){
        for(let primeB of primes){
            for(let primeC of primes){
                if(triples.includes(triplesGenerator(primeA, primeB, primeC)) || triplesGenerator(primeA, primeB, primeC) >= 50000000){
                    continue;
                } else{
                    result++
                }
            }
        }
    }
    
    return result;
}

console.log(primePowerTriples(50000000));
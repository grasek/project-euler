import { SOA } from '../algorithms/sieveOfAtkin.js'

const calc = () => {
  return SOA(2000000).reduce((a,b) => a + b)
}

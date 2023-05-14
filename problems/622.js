const calc = () => {
   const deck = Array.from({ length: 52 }, (_, i) => ++i);
   const rs = (deck) => {
       let result = 0, top = deck.slice(0, deck.length / 2), bottom = deck.slice(deck.length / 2, deck.length), shuffled = [];
      while (shuffled.length < 27 && shuffled[1] !== deck[1]) {
         for (let i = 0; i < bottom.length; i++) {
             top.splice(i + i + 1, 0, bottom[i]);
             top = shuffled.slice(0, shuffled.length / 2), bottom = shuffled.slice(shuffled.length / 2, shuffled.length);
         }
         result++;
      }
      return result;
   };
   return rs(deck, 0);
};

console.log(calc());

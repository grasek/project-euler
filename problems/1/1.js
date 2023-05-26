const calc = () => {
  return Array.from({ length: 999 }, (_, i) => ++i).filter(i => i % 3 === 0 || i % 5 === 0).reduce((a,b) => a+b);
};

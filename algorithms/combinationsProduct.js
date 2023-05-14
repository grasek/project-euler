export function combinationsProduct(arr, limit) {
   function dfs(curr, start, prod) {
      if (start === arr.length) {
         if (prod <= limit && prod > 1) {
            res.push(prod);
         }
         return;
      }
      dfs(curr, start + 1, prod);
      const nextProd = prod * arr[start];
      if (nextProd <= limit) {
         curr.push(arr[start]);
         dfs(curr, start, nextProd);
         curr.pop();
      }
   }

   const res = [];
   arr.sort((a, b) => a - b);
   dfs([], 0, 1);
   return res;
}
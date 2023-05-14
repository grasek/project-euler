const minPathSum = (grid) => {
	const m = grid.length, n = (grid[0] || []).length;
	const dp = Array(m);
	let left = 0, top = 0;

	if(!m || !n) return 0;

	for(let i = 0; i < m; i++){
		dp[i] = Array(n);
		for(let j = 0; j < n; j++){
			top = i === 0 ? Number.MAX_SAFE_INTEGER : dp[i - 1][j];
			left = j === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j - 1];
			dp[i][j] = grid[i][j] + (i === 0 && j === 0 ? 0 : Math.min(left, top));
		}
	}

	return dp[m - 1][n - 1];
}
console.log(minPathSum([[1,6,3],[5,2,3],[2,6,4]]))

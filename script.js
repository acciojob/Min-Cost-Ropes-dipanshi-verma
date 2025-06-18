function mincost(arr) {
  // Convert array to min-heap simulation using sort
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();
    let cost = first + second;
    totalCost += cost;

    // Insert the new rope back in sorted order
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}

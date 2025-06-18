function calculateMinCost() {
  const input = document.getElementById("inputRopes").value;
  const arr = input.split(",").map(num => parseInt(num.trim())).filter(n => !isNaN(n));

  if (arr.length < 2) {
    document.getElementById("result").innerText = "Please enter at least two rope lengths.";
    return;
  }

  const minCost = findMinCost(arr);
  document.getElementById("result").innerText = `Minimum cost to connect all ropes: ${minCost}`;
}

function findMinCost(arr) {
  const heap = [...arr];
  heap.sort((a, b) => a - b); // Min-heap simulation

  let totalCost = 0;

  while (heap.length > 1) {
    let first = heap.shift();
    let second = heap.shift();
    let cost = first + second;
    totalCost += cost;

    // Insert the new rope back into the sorted position
    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return totalCost;
}

// script.js
function mincost(arr) {
  if (arr.length === 0) return 0;
  const minHeap = [...arr].sort((a, b) => a - b);
  let cost = 0;

  while (minHeap.length > 1) {
    const first = minHeap.shift();
    const second = minHeap.shift();
    const sum = first + second;
    cost += sum;
    minHeap.push(sum);
    minHeap.sort((a, b) => a - b);
  }

  return cost;
}

function handleCalculate() {
  const input = document.getElementById("ropeInput").value;
  if (!input) {
    document.getElementById("result").innerText = "Please enter rope lengths.";
    return;
  }

  const arr = input.split(',').map(Number);
  if (arr.some(isNaN)) {
    document.getElementById("result").innerText = "Invalid input. Please enter numbers only.";
    return;
  }

  const result = mincost(arr);
  document.getElementById("result").innerText = `Minimum cost: ${result}`;
}

function calculateMinCost() {
  const input = document.getElementById("inputRopes").value;
  const arr = input.split(",").map(num => parseInt(num.trim())).filter(n => !isNaN(n));

  const resultDiv = document.getElementById("result");

  if (arr.length < 2) {
    resultDiv.innerText = "❗ Please enter at least two rope lengths.";
    resultDiv.style.color = "red";
    return;
  }

  const minCost = findMinCost(arr);
  resultDiv.innerText = `✅ Minimum cost to connect all ropes: ${minCost}`;
  resultDiv.style.color = "green";
}

function findMinCost(arr) {
  let heap = [...arr].sort((a, b) => a - b);
  let totalCost = 0;

  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();
    const cost = first + second;
    totalCost += cost;

    // Insert the new rope and re-sort
    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return totalCost;
}

function minCostRopes(arr) {
  // Min heap implementation using array
  arr.sort((a, b) => a - b);
  let cost = 0;

  while (arr.length > 1) {
    const first = arr.shift();
    const second = arr.shift();
    const sum = first + second;
    cost += sum;

    // Insert sum back while maintaining sorted order
    let inserted = false;
    for (let i = 0; i < arr.length; i++) {
      if (sum < arr[i]) {
        arr.splice(i, 0, sum);
        inserted = true;
        break;
      }
    }
    if (!inserted) arr.push(sum);
  }

  return cost;
}

function calculateMinCost() {
  const input = document.getElementById("ropeInput").value;
  const lengths = input.split(',').map(num => parseInt(num.trim())).filter(n => !isNaN(n));

  if (lengths.length < 2) {
    document.getElementById("result").textContent = "Enter at least two rope lengths.";
    return;
  }

  const result = minCostRopes(lengths);
  document.getElementById("result").textContent = `Minimum cost to connect ropes: ${result}`;
}

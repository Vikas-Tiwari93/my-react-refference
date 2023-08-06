// [5,-3,2,3,-4] k=2
// [5,-3], [-3,2],[2,3],[3,-4]
//   -3       -3    0     -4

function windowfn(arr, k) {
  let newarr = {};
  let output = [];
  for (let i = 0; i < k; i++) {
    newarr[i] = arr[i];
    if (arr[i] < 0) {
      output.push(arr[i]);
      console.log(newarr);
    }
  }

  for (let j = k; j < arr.length; j++) {
    delete newarr[j - k];
    newarr[j] = arr[j];
    console.log(newarr);
  }
  console.log(newarr);
}
windowfn([5, -3, 2, 3, -4], 2);

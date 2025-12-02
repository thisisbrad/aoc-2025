const file = Bun.file("input-single.txt");
const text = await file.text();
const sequence = text.split("\n");
// console.log(sequence);

// set direction
// steps in that direction after % 99

let pointer = 50;
const result: string[] = [];

// function getRemainder(number: number) {
//   return number % 99;
// }
function getRemainderStepsAndDir(number: number) {
  // console.log("?", number);
  // the number for now but I need to figure out the times modulo
  // 49 is each direction
  const stepsTaken = number / 49;
  const stepsRemain = number % 49;

  console.log("?", Math.floor(stepsTaken), Math.floor(stepsRemain));
  return stepsRemain;
}

// const test = getRemainder(631);
// const test = getRemainderStepsAndDir(631);

function findZeros(arr: string[]) {
  const zeros = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(">>>>", arr[i]);
    if (arr[i] === "0") {
      console.log("arr[i]", arr[i]);
      zeros.push(arr[i]);
    }
  }
  return zeros;
}

sequence.forEach((code) => {
  const direction = code.slice(0, 1);
  const numbers = parseInt(code.slice(1, 3));

  let curDir = direction;
  console.log("🦠", curDir);

  if (curDir === "R") {
    console.log("R clicks", numbers);
    console.log("total steps", pointer + numbers);
    const total = pointer + numbers;
    if (total > 99) {
      const key = getRemainderStepsAndDir(total);
      // const backstep = getRemainderStepsAndDir(total);
      // console.log("🎄 👉", backstep);
      // const key = 99 - backstep;
      console.log("🔑>", key);
      pointer = key;
      console.log(">>>", pointer);
      // result.push(key + ", ");
    } else {
      pointer = total;
      result.push(total + ", ");
    }
  }

  if (curDir === "L") {
    console.log("L clicks", numbers);
    console.log("total steps", pointer + numbers);
    const total = pointer + numbers;
    if (total < 99) {
      const key = getRemainderStepsAndDir(total);
      // const backstep = getRemainderStepsAndDir(total);
      // console.log("🎄 👈", backstep);
      // const key = 0 + backstep;
      console.log("🔑>", key);
      pointer = key;
      console.log(">>>", pointer);
      // result.push(pointer + ", ");
    } else {
      pointer = total;
      result.push(pointer + ", ");
    }
  }
});

// const resultFile = await Bun.write("output.txt", result);
// const content = await Bun.file("output.txt").text();
// const passwordStart = content.split(", ");
// const zeros_found = findZeros(passwordStart);
// console.log(zeros_found);
// console.log("try?", zeros_found.length);

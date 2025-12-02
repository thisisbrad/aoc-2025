// const sequence = [
//   "L68",
//   "L30",
//   "R48",
//   "L5",
//   "R60",
//   "L55",
//   "L1",
//   "L99",
//   "R14",
//   "L82",
// ];
//
const file = Bun.file("input.txt");
const text = await file.text();
const sequence = text.split("\n");
console.log(sequence);

let pointer = 50;
const result: string[] = [];

function getRemainder(number: number) {
  return number % 100;
}

function findZeros(arr: string[]) {
  const zeros = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(">>>>", arr[i]);
    if (arr[i] === "100") {
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
  // console.log("source: ", code);

  if (direction === "R") {
    //
    console.log("R clicks", numbers);
    console.log("total steps", pointer + numbers);
    const total = pointer + numbers;
    if (total > 99) {
      const backstep = getRemainder(total);
      console.log("🎄 👉", backstep);
      const key = 99 - backstep;
      console.log("🔑>", key);
      pointer = key;
      result.push(key + ", ");
    } else {
      pointer = total;
      result.push(total + ", ");
    }

    // for (let i = 0; i < 100; i++) {}
  }

  if (direction === "L") {
    //
    //
    console.log("L clicks", numbers);
    console.log("total steps", pointer + numbers);
    const total = pointer + numbers;
    if (total > 100) {
      const backstep = getRemainder(total);
      console.log("🎄 👈", backstep);
      const key = 0 + backstep;
      console.log("🔑>", key);
      pointer = key;
      result.push(pointer + ", ");
    } else {
      pointer = total;
      result.push(pointer + ", ");
    }

    // for (let i = 99; i >= 0; i--) {}
  }
});

const resultFile = await Bun.write("output.txt", result);
const content = await Bun.file("output.txt").text();
const passwordStart = content.split(", ");
// console.log(">>>", passwordStart);
const zeros_found = findZeros(passwordStart);
console.log(zeros_found);
console.log("try?", zeros_found.length);

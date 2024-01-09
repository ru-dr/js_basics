// for

for (let index = 1; index <= 5; index++) {
  const element = index;
  console.log(element);
}

// nested for using multiplication table

for (let i = 1; i <= 10; i++) {
  console.log("\n");
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log("\n"); // new line

// break & continue ( control flow )

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("\n");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// note: break will stop the loop and continue will skip the current iteration
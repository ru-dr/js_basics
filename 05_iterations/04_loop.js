// for in

const short = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  php: "PHP",
  java: "Java",
};

for (const key in short) {
  console.log(`${key} = ${short[key]}`);
}

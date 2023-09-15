input = [
  { name: "A", age: "30" },
  { name: "B", age: "9" },
  { name: "C", age: "20" },
  { name: "D", age: "18" },
  { name: "E", age: "11" },
  { name: "F", age: "60" },
  { name: "G", age: "27" },
  { name: "H", age: "90" },
  { name: "I", age: "21" },
  { name: "J", age: "12" },
];

function Result(input) {
  input.sort((a, b) => {
    return a.age - b.age;
  });
  const result = input.filter((item) => item.age % 3 === 0 && item.age <= 30).map((item) => item.name);
  return result;
}
console.log(Result(input));

input = [
  { name: "Alex", tel: "0991112222", code: "xsf0001" },
  { name: "Jane", tel: "0812221234", code: "xsf0002" },
  { name: "Alex", tel: "0832214433", code: "xsf0001" },
  { name: "Alex", tel: "0991113122", code: "xsf0003" },
];

function Result(input) {
  let result = [];
  input.map((item) => {
    const duplicate = result.find((x) => x.code === item.code);
    if (!duplicate) {
      result.push(item);
    } else {
      const index = result.findIndex((x) => x.code === item.code);
      let tel = [];
      typeof result[index].tel === "string" ? tel.push(duplicate.tel) : (tel = duplicate.tel);
      tel.push(item.tel);
      result[index].tel = tel;
    }
  });
  return result;
}
console.log(Result(input));

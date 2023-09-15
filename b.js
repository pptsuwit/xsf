input = {
  customer: "Xsurface",
  contact: [{ name: "Max" }, { name: "Mike" }, { name: "Adam" }],
  address: "Sukhumvit 62",
};

function Result(input) {
  const result = input.contact.map((item) => {
    return {
      name: item.name,
      customer: input.customer,
      address: input.address,
    };
  });
  return result;
}

console.log(Result(input));

function getMinMax(str) {
  let arr = str
    .split(" ")
    .map((num) => +num)
    .filter((num) => typeof num === "number" && !isNaN(num));
  return (result = {
    min: Math.min(...arr),
    max: Math.max(...arr),
  });
}

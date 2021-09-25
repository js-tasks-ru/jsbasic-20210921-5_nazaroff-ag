function ucFirst(str) {
  if (str === "") {
    return "";
  }
  const firstLetter = str[0].toUpperCase();
  const otherLetters = str.slice(1, str.length);
  return firstLetter + otherLetters;
}

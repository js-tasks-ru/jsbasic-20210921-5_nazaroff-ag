function checkSpam(str) {
  let wordsToCheck = ["1xBet", "XXX"];
  str = str.toLowerCase();

  // 1 вариант решения
  // if (
  //   str.includes(wordsToCheck[0].toLowerCase()) ||
  //   str.includes(wordsToCheck[1].toLowerCase())
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 2 вариант решения
  let result;

  str.includes(wordsToCheck[0].toLowerCase())
    ? (result = true)
    : str.includes(wordsToCheck[1].toLowerCase())
    ? (result = true)
    : (result = false);
  return result;
}

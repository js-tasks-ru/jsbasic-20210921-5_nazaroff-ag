function truncate(str, maxlength) {
  // 1 вариант решения
  // if (str.length <= maxlength) {
  //   return str;
  // } else {
  //   return str.slice(0, maxlength - 1) + "…";
  // }

  // 2 вариант решения
  str.length <= maxlength ? str : (str = str.slice(0, maxlength - 1) + "…");
  return str;
}

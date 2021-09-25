function truncate(str, maxlength) {
  // if (str.length <= maxlength) {
  //   return str;
  // } else {
  //   return str.slice(0, maxlength - 1) + "…";
  // }
  str.length <= maxlength ? str : (str = str.slice(0, maxlength - 1) + "…");
  return str;
}

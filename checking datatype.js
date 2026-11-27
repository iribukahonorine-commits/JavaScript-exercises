function parseF(s) {
 
  if (typeof s === "number") {
    return Number.isNaN(s) ? null : s;
  } 
  else if (typeof s === "string") {
    let result = Number(s);
    return Number.isNaN(result) ? null : result;
  } 
  else {
    return null;
  }
}
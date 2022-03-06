export function toCamelCase(str: string): string {
  let newStr = '';
  if (str) {
    const wordArr = str.toLowerCase().split(/[-_]/g);
    for (const i in wordArr) {
      if (Number(i) > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newStr += wordArr[i];
      }
    }
  } else {
    return newStr;
  }
  return newStr;
}

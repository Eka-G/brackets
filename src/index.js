module.exports = function check(str, bracketsConfig) {
  let checkIn = [];
  let res = true;

  str.split("").map(item => {
    switch (item) {
      case "(":
      case "[":
      case "{":
        checkIn.push(item);
        break;

      case ")":
        if (checkIn.length === 0) res = false;
        if (checkIn[checkIn.length - 1] === "(") {
          checkIn.pop()
        } else res = false;
        break;

      case "]":
        if (checkIn.length === 0) res = false;
        if (checkIn[checkIn.length - 1] === "[") {
          checkIn.pop()
        } else res = false;
        break;

      case "}":
        if (checkIn.length === 0) res = false;
        if (checkIn[checkIn.length - 1] === "{") {
          checkIn.pop()
        } else res = false;
        break;

      case "|":
        checkIn.filter(item => item === "|").length % 2 === 0 ? checkIn.push(item) :
          checkIn[checkIn.length - 1] === "|" ?
            checkIn.pop() : res = false;;
        break;
    }
  });

  return res === false ? false :
    checkIn.length === 0 ? res = true : res = false;
}

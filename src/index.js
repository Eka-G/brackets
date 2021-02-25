module.exports = function check(str, bracketsConfig) {
  let checkIn = [];
  let res = true;

  str.split("").forEach(item => {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] === bracketsConfig[i][1] && bracketsConfig[i][0] === item) { //проверка на соответсвие одинаковых символов
        checkIn.find(x => x === bracketsConfig[i][0]) ? checkIn.pop() : checkIn.push(item);
        continue;
      }

      if (item === bracketsConfig[i][0]) {
        checkIn.push(item);
        continue;
      } else if (item === bracketsConfig[i][1]) {
        checkIn.find(repeat => repeat === bracketsConfig[i][1]) === true ? checkIn.push(item) :
          checkIn[checkIn.length - 1] === bracketsConfig[i][0] ? checkIn.pop() : res = false;
        continue;
      }
    }
  })

  return res === false ? false :
    checkIn.length === 0 ? res = true : res = false;
}

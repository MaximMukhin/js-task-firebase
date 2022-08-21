const userName = "Maxim";
const sayHi = (userName) => `Привет я ${userName}`;

console.log(sayHi(userName));

module.exports = {
  userName,
  sayHi,
};

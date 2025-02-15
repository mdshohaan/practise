let Player = new Object();
Player.name = "arif";
Player.age = 23;

Player.getName = () => {
  return `this is My name ${Player.name}`;
};
console.log(Player.getName()); //this is My name arif


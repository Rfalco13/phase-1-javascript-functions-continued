function saturdayFun(activity = 'roller-skate') {
    const message = `This Saturday, I want to ${activity}!`;
    console.log(message);
    return message;
}

console.log(saturdayFun());
console.log(saturdayFun('go hiking'));

const activity1 = saturdayFun('roller-skate');
console.log(activity1);

const activity2 = saturdayFun('go hiking');
console.log(activity2);

const mondayWork = function(activity = 'go to the office') {
    const message = `This Monday, I will ${activity}.`;
    console.log(message);
    return message;
};

console.log(mondayWork());

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing"));
  



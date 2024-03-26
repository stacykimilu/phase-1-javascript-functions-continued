// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  const encouragingPromptFunction = wrapAdjective("*");
  console.log(encouragingPromptFunction("a hard worker")); // Output: "You are *a hard worker*!"
  
  const encouragingPromptFunction2 = wrapAdjective("||");
  console.log(encouragingPromptFunction2("a dedicated programmer")); // Output: "You are ||a dedicated programmer||!"
  
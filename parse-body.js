function firstStep(input) {
  // Your code here
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  return input.map(function (e) {
    return e.split('=');
  });
}

function thirdStep(input) {
  // Your code here
  return input.map(function (e) {
    return [e[0].replace(/\+/g, " "), e[1].replace(/\+/g, " ")];
  });
}

function fourthStep(input) {
  // Your code here
  return input.map(function (e) {
    return [decodeURIComponent(e[0]), decodeURIComponent(e[1])];
  });
}

function fifthStep(input) {
  // Your code here
  return input.reduce(function (accum, curr) {
    const [key, value] = curr;

    accum[key] = value;

    return accum;
  }, {});
}

function parseBody(str) {
  // Your code here
  let newStr = firstStep(str);
  newStr = secondStep(newStr);
  newStr = thirdStep(newStr);
  newStr = fourthStep(newStr);
  newStr = fifthStep(newStr);
  return newStr;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
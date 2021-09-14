import React, {useEffect, useState} from 'react';

var App = function(props) {
  const [equation, setEquation] = useState('');
  const [answer, setAnswer] = useState(0);

  var calculator = function() {
    var result = 0;
    if (equation.indexOf('(') !== -1) {
      var subSet = equation.slice(equation.indexOf('(') + 1, equation.indexOf(')'));
      for (var i = 0; i < subSet.length; i++) {
        if (subSet[i] ==='*') {
          result += (parseInt(subSet[i - 1]) * parseInt(subSet[i + 1]));
        } else if (subSet[i] === '/') {
          result += (parseInt(subSet[i - 1]) / parseInt(subSet[i + 1]));
        } else if (subSet[i] === '+' && result !== 0) {
          result += (parseInt(subSet[i + 1]));
        } else if (subSet[i] === '+') {
          result += parseInt(subSet[i - 1]) + parseInt(subSet[i + 1])
        } else if (subSet[i] === '-') {
          result += (parseInt(subSet[i - 1]) - parseInt(subSet[i + 1]));
        }
      }
      equation.split('').splice(equation.indexOf('(') + 1, subSet.length + 1, result);
    }
    result = 0;
    for (var i = 0; i < equation.length; i++) {
      if (equation[i] ==='*') {
        result += (parseInt(equation[i - 1]) * parseInt(equation[i + 1]));
      } else if (equation[i] === '/') {
        result += (parseInt(equation[i - 1]) / parseInt(equation[i + 1]));
      } else if (equation[i] === '+' && result !== 0) {
        result += (parseInt(equation[i + 1]));
      } else if (equation[i] === '+') {
        result += parseInt(equation[i - 1]) + parseInt(equation[i + 1])
      } else if (equation[i] === '-') {
        result += (parseInt(equation[i - 1]) - parseInt(equation[i + 1]));
      }
    }
    setAnswer(result)
    return answer;
  }


  return (
    <div>
      <input placeholder="enter your question" onChange={event => setEquation(event.target.value)}/>
      <button onClick={calculator}>submit</button>
      <div>
        <h2>{answer}</h2>
      </div>
    </div>
  )
}

export default App;
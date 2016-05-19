var debug = false;

function predict() {
  //Pclass, Name, Sex, Age, SibSp, Parch, Fare, Embarked
  //Ports {'Q': 1, 'C': 0, 'S': 2}
  $.getJSON('/predict?Pclass=3&Name=Braund, Mr. Owen Harris&Sex=0&Age=22&SibSp=1&Parch=0&Fare=7.25&Embarked=2', function(data) {
    
    console.log(data);
    var result = data.result;    
    $('#result').text(result);
  });
}
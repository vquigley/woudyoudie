var debug = false;

function predict() {
  //Pclass, Name, Sex, Age, SibSp, Parch, Fare, Embarked
  //Ports {'Q': 1, 'C': 0, 'S': 2}
  var params = {
    Pclass: $("#pClass").val(),
    Sex: $("#sex").val(),
    Age: $("#age").val(),
    SibSp: $("#sibSp").val(),
    Parch: $("#parch").val(),
    Fare: getFare(pClass),
    Embarked: $('#embarked').val()
  };

  //$.getJSON('predict?Pclass=3&Name=noCare&Sex=0&Age=22&SibSp=1&Parch=0&Fare=7.25&Embarked=2', function(data) {
  $.getJSON('predict', params, result);
}

function result(data) {
    console.log(data);
    var result = data.result;
    $('#result').text(result);
}

function getFare(pClass) {
    if (pClass == 3) return 78.3510608491;
    if (pClass == 2) return 20.6621831522;
    if (pClass == 1) return 13.6755501018;
    return 20.0;
}
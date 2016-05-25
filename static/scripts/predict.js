var debug = false;

function predict() {
  //Pclass, Name, Sex, Age, SibSp, Parch, Fare, Embarked
  //Ports {'Q': 1, 'C': 0, 'S': 2}
  if (isNaN($("#siblings").val()) ||
        isNaN($("#spouse").val()) ||
        isNaN($("#parents").val()) ||
        isNaN($("#children").val())) {
    changeStatus("need-input");
    return;
  }

  var params = {
    Pclass: $("#pClass").val(),
    Sex: $("#sex").val(),
    Age: Number($("#age").val()),
    SibSp: Number($("#siblings").val()) + Number($("#spouse").val()),
    Parch: Number($("#parents").val()) + Number($("#children").val()),
    Fare: getFare(pClass),
    Embarked: $('#embarked').val()
  };
  console.log(params);
  changeStatus("loading");

  $.getJSON('predict', params, result);
}

function result(data) {
    console.log(data);
    var result = data.result;
    var status = result ? "survived" : "died";
    changeStatus(status);
}

function changeStatus(status) {
  $("#show").children("div").addClass("hidden");
  $("#" + status).removeClass("hidden");
}
function getFare(pClass) {
    if (pClass == 3) return 78.3510608491;
    if (pClass == 2) return 20.6621831522;
    if (pClass == 1) return 13.6755501018;
    return 20.0;
}
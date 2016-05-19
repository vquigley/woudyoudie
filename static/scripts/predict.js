var debug = false;

function predict() {
  //Pclass, Name, Sex, Age, SibSp, Parch, Fare, Embarked
  //Ports {'Q': 1, 'C': 0, 'S': 2}
  $.getJSON('/predict?Pclass=3&Name=Braund, Mr. Owen Harris&Sex=0&Age=22&SibSp=1&Parch=0&Fare=7.25&Embarked=2', function(data) {
    
    console.log(data);
    var result = data.result;    
    var target = $('#target').val();
    var status_id;
    if (target == '') {
      status_id = '';
    } else if (target == result) {
      status_id = 'correct';
    } else {
      status_id = 'incorrect';
    }

    if (debug) { 
      $("#result").append(mapping[index]);
      index++;
      $("#target").val($("#target").val() + "[" + image_vector + "], ");
    } else {
      $('#result').append('<span id=\'' + status_id + '\'>' + result + '</span>');
    }
  });
}
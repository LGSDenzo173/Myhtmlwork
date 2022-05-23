var numfield1 = document.getElementById('numfield1')
var numfield2 = document.getElementById('numfield2')
var resultfield = document.getElementById('resultfield');
var form = document.getElementById('xiswhatofy')

form.addEventListener('submit', function(event) {
  if (!numfield1.value || !numfield2.vlaue) {
    alert("Please Enter a Number");
}else {
    var x = parseFloat(numfield1.value);
    var y = parseFloat(numfield2.vale);
    
    var result = x/y;
    var percent = result * 100;

    resultfield.innerText = "Answer: " + percent + "%"

  }

})

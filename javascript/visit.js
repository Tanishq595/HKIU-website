
var forms = document.getElementById("reserveform");

var error = document.getElementById("error");
var button = document.getElementById('checkavailability');
button.addEventListener('click', check_form);
function check_form() {
    var nam = document.querySelector('#date').value;
    var tim = document.querySelector('#time').value;
    var numb = document.querySelector('#visitors').value;
    if (nam == "" || tim == "" || numb == "") {
        error.innerHTML = "Data not completed, please re-enter.";
        error.setAttribute('style', 'display: block ; color: red ; text-align: center;');
    }
    else if (numb < 1) {
        error.innerHTML = "Please enter a valid number of people!";
        error.setAttribute('style', ' display : block ; color: red ; text-align: center;');
    }
    else if (parseInt(numb) != parseFloat(numb)) {
        error.innerHTML = "Please enter a valid number of people!";
        error.setAttribute('style', 'display : block ; color: red ; text-align: center;');
    }
    else {
        error.innerHTML = "";
        var res = reserve(nam, tim, numb);
        if (res == true) {
            error.innerHTML = "";
            setTimeout(function(){
                alert("Your reservation is successful!");
            },0);
            
        }
        else {
            error.innerHTML = "";
            setTimeout(function(){
                alert("Sorry, the reservation is full!");
            },0);
        }
        resetform();
    }

}
// document.getElementById('reset').addEventListener('click', resetform);

function resetform() {
    error.innerHTML = "";
    document.querySelector('#date').value = null;
    document.querySelector('#time').value = null;
    document.querySelector('#visitors').value = null;
}






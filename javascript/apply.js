var clgenghead = document.getElementById("clgeng");
var clgschead = document.getElementById("clgsc");
var clgishead = document.getElementById("clgis");

var engin = document.getElementById("Engin");
var scie = document.getElementById("Scie");
var inter = document.getElementById("Inter");

var f1 = document.querySelectorAll('.Engineering>form');
var f2 = document.querySelectorAll('.Science>form');
var f3 = document.querySelectorAll('.Interdisciplinary>form');
window.addEventListener('load', clgengblock);
clgenghead.onclick = clgengblock;
clgschead.onclick = clgscblock;
clgishead.onclick = interblock;
function headcolor(c1, c2, c3) {
    clgenghead.style.backgroundColor = c1;
    clgschead.style.backgroundColor = c2;
    clgishead.style.backgroundColor = c3;
}

function clgengblock() {
    headcolor("white", "rgb(243, 201, 228)", "rgb(243, 201, 228)");
    engin.style.display = "block";
    scie.style.display = "none";
    inter.style.display = "none";
}
function clgscblock() {
    headcolor("rgb(243, 201, 228)", "white", "rgb(243, 201, 228)");
    engin.style.display = "none";
    scie.style.display = "block";
    inter.style.display = "none";
}
function interblock() {
    headcolor("rgb(243, 201, 228)", "rgb(243, 201, 228)", "white");
    engin.style.display = "none";
    scie.style.display = "none";
    inter.style.display = "block";
}
function addHoverEffect(forms) {
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = "rgb(255, 245, 245)";
        });
        forms[i].addEventListener('mouseout', function () {
            this.style.backgroundColor = "rgb(242, 234, 249)";
        });
    }
}

addHoverEffect(f1);
addHoverEffect(f2);
addHoverEffect(f3);


function check(x) {
    if (x == 1)
        return "st";
    else if (x == 2)
        return "nd";
    else if (x == 3)
        return "rd";
    else
        return "th";
}
var rank_chosen = new Set();
var major_chosen = new Set();
var lowest = 1;
function handleclick(boxSelector, majorName, collegeName) {
    var names = document.querySelector(boxSelector);
    var results = names.value;
    var table = document.getElementById("result");
    var result = Number.parseInt(results);
    var status = true;
    var a = 0;
    var b = 0;

    if (result < 1 || result > 10) {
        alert("Please enter the rank of chosen major between 1 and 10");
        names.value = '';
    }

    else if (Number.isInteger(result) != true || result.length < 1) {
        alert("Please enter the rank of chosen major");
    }
    else {
        

        if (rank_chosen.has(result)) {
            a++;

        }



        if (major_chosen.has(majorName)) {
            b++;


        }

        if (a > 0 && b == 0) {
            alert("You have already chosen this rank");
            status = false;
            names.value = '';
        }
        else if (a == 0 && b > 0) {
            alert("You have already chosen the major");
            status = false;
            names.value = '';
        }
        else if (a > 0 && b > 0) {
            alert("You have already chosen the major");
            status = false;
            names.value = '';
        }
        else {
            if (status) {
                var rows1 = table.rows;
                for (let i = 0; i < rows1.length; i++) {
                    var x = rows1[i];
                    var y = x.cells[2];
                    if (result == parseInt(y.innerHTML) && status == true) {
                        var cell1 = x.cells[0];
                        var cell2 = x.cells[1];
                        if (cell1.innerHTML === "") {
                            var z = check(result);
                            document.getElementById("error").innerHTML = "";
                            alert("You have chosen" + " " + majorName + " " + "as your" + " " + result + z + " " + "chosen major in" + " " + collegeName + " " + "successfully");

                            cell1.innerHTML = collegeName;
                            cell2.innerHTML = majorName;
                            rank_chosen.add(result);
                            major_chosen.add(majorName);
                            updateTable();
                            names.value = '';

                        }
                    }
                }
            }


        }
        if (result > parseInt(lowest)) {
            lowest = result;
        }
    }

}

var box1 = document.querySelector('.rankofchoice1');
box1.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#cs', 'Bsc in Computer Science and Technology', 'College of Engineering');

});
var box2 = document.querySelector('.rankofchoice2');
box2.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#ei', 'BEng in Electronic Information', 'College of Engineering');
});

var box3 = document.querySelector('.rankofchoice3');
box3.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#mse', 'BEng in Materials Science and Engineering', 'College of Engineering');
});

var box4 = document.querySelector('.rankofchoice4');
box4.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#mc', 'BEng in Materials and Chemicals', 'College of Engineering');
});

var box5 = document.querySelector('.rankofchoice5');
box5.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#est', 'BSc in Electronic Science and Technology', 'College of Engineering');
});

var box6 = document.querySelector('.rankofchoice6');
box6.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#phy', 'BSc in Physics', 'College of Science');
});

var box7 = document.querySelector('.rankofchoice7');
box7.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#chem', 'BSc in Chemistry', 'College of Science');
});

var box8 = document.querySelector('.rankofchoice8');
box8.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#bio', 'Bsc in Biology', 'College of Science');
});

var box9 = document.querySelector('.rankofchoice9');
box9.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#cogs', 'BSc in Cognitive Science', 'College of Interdisciplinary Studies');
});

var box10 = document.querySelector('.rankofchoice10');
box10.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#be', 'Bsc in Biomedical Engineering', 'College of Interdisciplinary Studies');
});

var box11 = document.querySelector('.rankofchoice11');
box11.addEventListener('click', function (event) {
    event.preventDefault();
    handleclick('#bm', 'Bsc in Biology and Medicine', 'College of Interdisciplinary Studies');
});
document.getElementById('submit').onclick = function (event) {
    event.preventDefault();
    var gap = [];
    var table = document.getElementById("result");
    var rows = table.rows;
    for (let i = 1; i < lowest; i++) {
        var con = rows[i].cells[1].innerHTML;
        if (con == '') {
            gap.push(i);
        }
    }

    var filledRows = 0;
    for (let i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[0].innerHTML !== "") {
            filledRows++;
        }
    }

    var gapstring = '';
    for (var i = 0; i < gap.length; i++) {
        if (i === gap.length - 1 && gap.length > 1) {
            gapstring += " and " + gap[i] + check(gap[i]) + " chosen major,";
        }
        else {
            gapstring += " " + gap[i] + check(gap[i]) + " chosen major,";
        }
    }
    if (gap.length > 0 && filledRows != 0) {
        document.getElementById("error").innerHTML = "You have not chosen your" + gapstring + " you can not leave any gap between your majors";
        document.getElementById("error").setAttribute("style", "display : block ; color: red; text-align: center; padding: 10px;");
    }
    else if (filledRows == 0) {
        // Display "You have not chosen any." message
        document.getElementById("error").innerHTML = "You have not chosen any major.";
        document.getElementById("error").setAttribute('style', 'display : block ; color: red; text-align: center; padding: 10px;');

    }

    else {
        var date = new Date().toLocaleDateString();
        var time = new Date().toLocaleTimeString();
        document.getElementById("error").innerHTML = "You have successfully submitted your application at time " + date + " " + time;
        document.getElementById("error").setAttribute("style", " display : block ; color: red; text-align: center; padding: 10px;");
    }
};
document.getElementById('clear').onclick = function (event) {
    event.preventDefault();
    updateTable();
    var table = document.getElementById("result");
    let row_s = table.rows;
    for (var i = 1; i < row_s.length; i++) {
        row_s[i].cells[0].innerHTML = '';
        row_s[i].cells[1].innerHTML = '';
    }
    document.getElementById("error").innerHTML = "";
    document.getElementById("done").innerHTML = "Total Number of Majors Applied : 0 ";
    rank_chosen.clear();
    major_chosen.clear();
    lowest = 0;
    console.log(lowest);
};
function updateTable() {
    var table = document.getElementById("result");
    var filledRows = 0;
    for (var i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[0].innerHTML !== "") {
            filledRows++;
        }

    }
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString(); var k = filledRows;

    document.getElementById('time').innerHTML = "Last change time:" + date + " " + time;
    document.getElementById("done").innerHTML = "Total Number of Majors Applied :" + " " + k;

}
function calctry() {
    var total_credits = 0;
    var total_points = 0;
    var prevcgpa = document.getElementById("prevcgpa").value;
    var prevcred = document.getElementById("prevcred").value;
    total_points += Number(prevcgpa) * Number(prevcred);
    total_credits += Number(prevcred);

    var grades = document.getElementsByClassName("grades");
    var credits = document.getElementsByClassName("credits");

    for (var i = 0; i < grades.length; i++) {
        var curr_grad = grades[i];
        var curr_cred = credits[i].value;
        var curr_cred_num = Number(curr_cred);

        var grade = trytocoef(curr_grad.options[curr_grad.selectedIndex].text);
        total_points += curr_cred_num * grade;
        total_credits += curr_cred_num;
    }
    var gpa = (total_points - (Number(prevcgpa) * Number(prevcred))) / (total_credits - Number(prevcred));
    gpa = gpa.toFixed(2);
    var final = total_points / total_credits;
    final = final.toFixed(2);

    document.getElementById("result").classList.add("alert")
    document.getElementById("result").classList.add("alert-warning")
    document.getElementById("result").innerHTML = "<strong>Calculated!</strong> Here are your results:<br><br> GPA: " + gpa.toString() + "<br>CGPA: " + final.toString();

    document.getElementById("insert").innerHTML = '<button class="btn btn-primary" type="submit">Save your courses and grades.</button>';
}

function calcusa() {
    var total_credits = 0;
    var total_points = 0;
    var prevcgpa = document.getElementById("prevcgpa").value;
    var prevcred = document.getElementById("prevcred").value;
    total_points += Number(prevcgpa) * Number(prevcred);
    total_credits += Number(prevcred);

    var grades = document.getElementsByClassName("grades");
    var credits = document.getElementsByClassName("credits");

    for (var i = 0; i < grades.length; i++) {
        var curr_grad = grades[i];
        var curr_cred = credits[i].value;
        var curr_cred_num = Number(curr_cred);

        var grade = usatocoef(curr_grad.options[curr_grad.selectedIndex].text);

        total_points += curr_cred_num * grade;
        total_credits += curr_cred_num;
    }

    var gpa = (total_points - (Number(prevcgpa) * Number(prevcred))) / (total_credits - Number(prevcred));
    gpa = gpa.toFixed(2);
    var final = total_points / total_credits;
    final = final.toFixed(2);

    document.getElementById("result").classList.add("alert")
    document.getElementById("result").classList.add("alert-warning")
    document.getElementById("result").innerHTML = "<strong>Calculated!</strong> Here are your results:<br><br> GPA: " + gpa.toString() + "<br>CGPA: " + final.toString();

    document.getElementById("insert").innerHTML = '<button class="btn btn-primary" type="submit">Save your courses and grades.</button>';
}

function trytocoef(t) {
    switch(t) {
        case "AA": return 4;
        case "BA": return 3.5;
        case "BB": return 3;
        case "CB": return 2.5;
        case "CC": return 2;
        case "DC": return 1.5;
        case "DD": return 1;
        case "FD": return 0.5;
        case "FF": return 0;
        case "NA": return 0;
        default: return 0;
    }
}

function usatocoef(t) {
    switch(t) {
        case "A": return 4;
        case "A-": return 3.7;
        case "B+": return 3.3;
        case "B": return 3;
        case "B-": return 2.7;
        case "C+": return 2.3;
        case "C": return 2;
        case "C-": return 1.7;
        case "D+": return 1.3;
        case "D": return 1;
        case "F": return 0;
        default: return 0;
    }
}
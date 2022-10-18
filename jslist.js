function valAdd() {
    let word = document.forms["form"]["word"].value;
    let number = document.forms["form"]["number"].value;
    if (word == "") {
        alert("That's not a valid word, try again.");
        return false;
    }
    else if ((number != 1) && (number != 2)) {
        alert ("Try again dummy.");
        document.forms["form"]["number"].value = "";
        return false;
    }
    else {
        if (number == 1) {
            let tableNum = document.getElementById("list1");
            (tableNum.insertRow(tableNum.rows.length)).innerHTML = word;}
        else {
            let tableNum = document.getElementById("list2");
            (tableNum.insertRow(tableNum.rows.length)).innerHTML = word;}
        document.forms["form"]["word"].value = "";
        document.forms["form"]["number"].value = "";
        return true;
    }
}

function clearList1() {
    let tableNum = document.getElementById("list1");
    tableNum.innerHTML = " ";
}

function clearList2() {
    let tableNum = document.getElementById("list2");
    tableNum.innerHTML = " ";
}
function calculate(event) {
    event.preventDefault();

    // zurücksetzen Fehlermeldung
    document.getElementById("errorMessage").innerHTML = "";

    // Abfrage Eingaben aus Formular

    const height = Number(document.getElementById("height").value);
    const age = Number(document.getElementById("age").value);
    const weight = Number(document.getElementById("weight").value);
    const activity = Number(document.getElementById("activity").value);
    let sex = "";
    if (document.getElementById("female").checked) {
        sex = "female";
    } else if (document.getElementById("male").checked) {
        sex = "male";
    } else {
        sex = "undefined";
    }

    console.log(height);
    console.log(age);
    console.log(weight);
    console.log(sex);
    console.log(activity);



    let baseKcal = "";
    let baseKj = "";
    let totalKcal = "";
    let totalKj = "";

    // Abfrage, ob alle Angaben gemacht, wenn nicht - Abbruch, sonst - Berechnung

    if (!(height && age && weight && ((sex = "female") || (sex = "male")))) {
        document.getElementById("errorMessage").innerHTML = "Prüfe die Eingaben, jedes Feld muss ausgefüllt sein!";
        return;
    } else {
        if (document.getElementById("female").checked) {
            console.log("female");

            baseKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);

            document.getElementById("baseKcal").innerHTML = baseKcal.toFixed(2);
            document.getElementById("baseKj").innerHTML = (baseKcal * 4.184).toFixed(2);

            totalKcal = baseKcal * activity;
            document.getElementById("totalKcal").innerHTML = totalKcal.toFixed(2);
            document.getElementById("totalKj").innerHTML = (totalKcal * 4.184).toFixed(2);
        } else if (document.getElementById("male").checked) {
            console.log("male");

            baseKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);

            document.getElementById("baseKcal").innerHTML = baseKcal.toFixed(2);
            document.getElementById("baseKj").innerHTML = (baseKcal * 4.184).toFixed(2);

            totalKcal = baseKcal * activity;
            document.getElementById("totalKcal").innerHTML = totalKcal.toFixed(2);
            document.getElementById("totalKj").innerHTML = (totalKcal * 4.184).toFixed(2);
        } else {
            console.log("error");
        }
    }
}
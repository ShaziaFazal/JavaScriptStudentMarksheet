let DataList = [];

function MyFun() {
    // get student info

    console.log('hello');


    let Name = document.form1.name.value;
    document.getElementById('txtname').innerHTML = Name;


    let FName = document.form1.fname.value;
    document.getElementById('txtfname').innerHTML = FName;

    let Institute = document.form1.institutename.value;
    document.getElementById('inst-name').innerHTML = Institute;

    let Batch = document.form1.batch.value;
    document.getElementById('txtbatch').innerHTML = Batch;

    // get subject marks
    let Automation = document.form1.automation.value;
    document.getElementById('auto').innerHTML = Automation;
    // console.log(Automation);
    let Web = document.form1.web.value;
    document.getElementById('designing').innerHTML = Web;

    let English = document.form1.english.value;
    document.getElementById('eng').innerHTML = English;

    let C = document.form1.c.value;
    document.getElementById('prog').innerHTML = C;


    let Total = eval(parseFloat(document.form1.automation.value) + parseFloat(document.form1.web.value) + parseFloat(document.form1.english.value) + parseFloat(document.form1.c.value));
    document.getElementById("total").innerHTML = Total;

    console.log(Total);

    let percentage = eval(parseFloat(Total * 100) / 400);
    document.getElementById("percent").innerHTML = percentage.toFixed(2) + "%";

    console.log(percentage);

    switch (true) {
        case (percentage >= 80):
            document.getElementById("grade").innerHTML = "A+";
            break;
        case (percentage >= 70):
            document.getElementById("grade").innerHTML = "A";
            break;
        case (percentage >= 60):
            document.getElementById("grade").innerHTML = "B";
            break;
        case (percentage >= 50):
            document.getElementById("grade").innerHTML = "C";
            break;
        case (percentage >= 40):
            document.getElementById("grade").innerHTML = "D";
            break;
        case (percentage < 40):
            document.getElementById("grade").innerHTML = "Fail";
            break;
    }


}
function printData() {
    var divToPrint = document.getElementById("info-table");
    newWin = window.open("info-table");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
}
// function setData() {
//     let x = document.getElementById('info-table');
//     document.getElementById('std_info').innerHTML = DataList.push(x);
//     // DataList.innerHTML;
//     console.log(x);
// }




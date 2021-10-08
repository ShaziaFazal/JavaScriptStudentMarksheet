let DataList = [];
let currentIndex = null;
// const propertyNames = Object.keys(StdInfo);
// const propertyNames = Object.keys(SubMarks);
// const propertyNames = Object.keys(Result);
// const propertyNames = Object.keys(DataList);


// console.log(propertyNames);



function getData() {
    let stdInfo = document.getElementById("std_info");
    stdInfo.innerHTML = "";
    // console.log(DataList, "DataList")
    stdInfo.innerHTML = DataList.map((item, index) =>
        `
     <div>
     <table border="1" width="500px" id="info-table">
     <tr>
     <th colspan="2" width="240">Student Information</th>
     </tr>
     <tr>
     <td width="135">Name:</td>
     <td>
     <FONT face="arial" id="txtname">${item.name}</FONT>
     </td>
     </tr>
     <tr>
     <td width="135">Father Name:</td>
     <td>
     <font face="arial" id="txtfname">${item.fname}</font>
     </td>
     </tr>
     <tr>
     <td width="135">Institute Name:</td>
     <td>
     <font face="arial" id="inst-name">${item.institutename}</font>
     </td>
     </tr>
     <tr>
     <td width="135">Batch:</td>
     <td>
     <font face="arial" id="txtbatch">${item.batch}</font>
     </td>
     </tr>
     <tr>
     <th colspan="2" width="135">Subject Remarks</th>
     </tr>
     <tr>
     <td width="135">Office Automation:</td>
     <td>
     <font face="arial" id="auto">${item.automation}</font>
     </td>
     </tr>
     <tr>
     <td width="135">Web Designing:</td>
     <td>
     <font face="arial" id="designing">${item.web}</font>
     </td>
     </tr>
     <tr>
     <td width="135">English:</td>
     <td>
     <font face="arial" id="eng">${item.english}</font>
     </td>
     </tr>
     <tr>
     <td width="135">C++:</td>
     <td>
     <font face="arial" id="prog">${item.prog}</font>
     </td>
     </tr>
     <tr>
     <th colspan="2" width="140">Result</th>
     </tr>
     <tr>
     <td width="135">Total:</td>
     <td>
     <font face="arial" id="total">${item.total}</font>
     </td>
     </tr>
<tr>
 <td width="135">Percentage:</td>
 <td>
 <font face="arial" id="percent">${item.percentage}</font>
 </td>
 </tr>
 <tr>
 <td width="135">Grade:</td>
 <td>
 <font face="arial" id="grade">${item.grade}</font>
 </td>
 </tr>
 </table>
 <button type="button" class="btn btn-warning" style="margin: 20px " onclick="editAble(${index})">Edit</button>
 <button onclick="printData(${index})" class="btn btn-primary" style="margin: 20px ">Print</button>
 <button type="button" class="btn btn-danger" style="margin: 20px " onclick="remove(${index})">Delete</button>

 </div>
 </br>
     `
    ).join('');

}

function MyFun() {
    // let data = document.getElementById('std_info').value;
    let Name = document.form1.name.value
    let FName = document.form1.fname.value;
    let Institute = document.form1.institutename.value;
    let Batch = document.form1.batch.value;

    let Automation = document.form1.automation.value;
    let Web = document.form1.web.value;
    let English = document.form1.english.value;
    let C = document.form1.c.value;

    let Total = eval(parseFloat(document.form1.automation.value) + parseFloat(document.form1.web.value) + parseFloat(document.form1.english.value) + parseFloat(document.form1.c.value));
    console.log(Total);

    let Percentage = eval(parseFloat(Total * 100) / 400);
    if (Percentage <= 100 && Percentage >= 80) {
        grades = "A";
    } else if (Percentage <= 79 && Percentage >= 60) {
        grades = "B";
    } else if (Percentage <= 59 && Percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    const submitvalue = {
        name: Name,
        fname: FName,
        institutename: Institute,
        batch: Batch,

        automation: Automation,
        web: Web,
        english: English,
        prog: C,

        total: Total,
        percentage: Percentage,
        grade: grades
    }

    if (submitvalue) {
        DataList.push(submitvalue);
    }
    // document.getElementById('std_info').value = " ";

    document.form1.name.value = "";
    document.form1.fname.value = "";
    document.form1.institutename.value = "";
    document.form1.batch.value = "";

    document.form1.automation.value = "";
    document.form1.web.value = "";
    document.form1.english.value = "";
    document.form1.c.value = "";

    getData();

}
function editAble(index) {
    currentIndex = index;
    document.form1.name.value = DataList[index].name;
    document.form1.fname.value = DataList[index].fname;
    document.form1.institutename.value = DataList[index].institutename;
    document.form1.batch.value = DataList[index].batch;

    document.form1.automation.value = DataList[index].automation;
    document.form1.web.value = DataList[index].web;
    document.form1.english.value = DataList[index].english;
    document.form1.c.value = DataList[index].prog;



}
function update() {
    // let editAble = document.getElementById("std_info");


    DataList[currentIndex].name = document.form1.name.value;
    DataList[currentIndex].fname = document.form1.fname.value;
    DataList[currentIndex].institutename = document.form1.institutename.value;
    DataList[currentIndex].batch = document.form1.batch.value;

    DataList[currentIndex].automation = document.form1.automation.value;
    DataList[currentIndex].web = document.form1.web.value;
    DataList[currentIndex].english = document.form1.english.value;
    DataList[currentIndex].prog = document.form1.c.value;

    getData();
    console.log(DataList);
    console.log(currentIndex)
}

function remove(e) {
    DataList.splice(e, 1);
    getData();
}

function printData() {


    var divToPrint = document.getElementById("info-table");
    newWin = window.open("info-table");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
}




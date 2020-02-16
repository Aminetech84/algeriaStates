
/*

document.getElementById('try').addEventListener("click", addClass);

function addClass() {
    
    
    console.log("123");
    
}
*/


/*

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);
        //let wilaya = response.wilaya;

        let wilayat = response.elBayadh.subStates.baladyiats;
        console.log(response.elBayadh.subStates);

        let output = '';
        /*for (const i in response) {
            console.log(response);
           
        }
        for (let i = 0; i < wilayat.length; i++) {

            output += ` <a href="${wilayat[i].codeTel}">${wilayat[i].codeTel}</a>`
            //console.log(wilayat[i].codeTel);


        }
        document.getElementById('try').innerHTML = output;*/

        //console.log(response.wilaya.one);
        //console.log(xhttp);

        // let people = response.people;

        //let output = '';
        /* for (let i = 0; i < people.length; i++) {
             console.log(people[i].name);
             
            // output += '<li>'+ people[i].name + '</li>'; 
         }*/
  /*      //document.getElementById('people').innerHTML = output;
    }
};

xhttp.open("GET", "wilaya.json", true);
xhttp.send();

/*
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);
        //let people = response.people;
        console.log(response.wilaya.one.code);
        //console.log(people);
        //let output = '';
        for (let i = 0; i < people.length; i++) {
            console.log(people[i].name);
            
           // output += '<li>'+ people[i].name + '</li>'; 
        }
        //document.getElementById('people').innerHTML = output;
    }
};

xhttp.open("GET", "people1.json", true);
xhttp.send();
*/

















//const elBayadh = require('/test1');

/*

const test = ['1', '2', '3'];

const elBayadh = [{code: "32",  other: [{m: "hi m"}, {o: "hi o"}, {d: "hi d"}]},'5'];


for (let i = 0; i < elBayadh.length; i++) {
    console.log(`${elBayadh[1]}`);
    
}
/*
for (let i = 0; i < test.length; i++) {
    console.log(`${test[i]}`);
    
}*/

//console.log(elBayadh[0].other[0]);

//console.log("Hello");
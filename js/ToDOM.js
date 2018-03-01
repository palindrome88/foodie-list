"use strict";
//Import the script functions --
let fetchesFood = require("./food-promises");

let loadCards = document.getElementById("list-of-restaurants");
let loadCardsCitiesSet = document.getElementById("list-of-cities");
let testMe = document.getElementById("testme");
let rests = document.getElementById("found-rests");
// City Containers
let cityContainer1 = [{}];
let cityContainer2 =[{}];

// Restaurant Containers
let container = [{}];
let insideContainer =[{}];


// Define what to do with the restaurants on the return of the promise.
function getRestaurants(){
    let count = 0;
    let sortable = [];

    fetchesFood.fetchRestaurants().then(

        (resolve) => {
         
            container = resolve;
            let keys = Object.keys(container);
    
            for (let i in container){

                insideContainer = container[i];
                count++;
                for (let cnt in insideContainer){
                    //-----------------------------------------
                    console.log(insideContainer[cnt]);
                    sortable.push([insideContainer[cnt], insideContainer[cnt].my_rating]);
                    sortable.sort(function (a, b){
                        return a[1] - b[1];
                    });
                }
            }
            for (var i in sortable){
                loadCards.innerHTML += `<div class = "card"> 
                Id: ${sortable[i][0].id}</br>
                Restarant: ${sortable[i][0].restaurant} </br>
                Rating: ${sortable[i][0].my_rating} </br> 
                </br>
                </div>`;
            }
    },
        (reject)=>{
            console.log("Something's wrong with getRestaurants()");
        }
    );
}

function getCities(){

    fetchesFood.fetchCities().then(

        (resolve)=>{
            cityContainer1 = resolve;
            for (var t in cityContainer1){
                cityContainer2 = cityContainer1[t];
                for(var u in cityContainer2){
                    console.log(cityContainer2[u].id);
                    loadCardsCitiesSet.innerHTML += `<option value="${cityContainer2[u].city}" id="select-${u}">
                    ${cityContainer2[u].city}
                    </option>`;
                }
                document.querySelector('select[name="list"]').onchange=changeEventHandler;
        }
    },
        (reject)=>{
            console.log("ERROR, for fetchCities() in getCities() scope.");
        }
    );
}


// SUPER IMPORTANT LESSON LEARNED HERE.
function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) {console.log('Please Select One');}
    else  {
        let str = `${event.target.value}`;
        testMe.innerHTML += str + "</br>";
        selectCities(str);
 }
}

function selectCities(city){
    switch (city){
        case "Itupeva":
        testMe.innerHTML = " ";      
        console.log("Itupeva is selected.");
        for (var t0 in insideContainer){
                if (insideContainer[t0].city_id === cityContainer2[0].id)
                {
                    console.log(`Found for ${city}.`);
                    console.log(insideContainer[t0]);
                    testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t0].restaurant}, Last Date of Visit: ${insideContainer[t0].date_visited} </br>`;
                }
            }
            break;
        case "Changsheng":
        testMe.innerHTML = " ";
            console.log("Changsheng is selected.");
            for (var t1 in insideContainer){
                if (insideContainer[t1].city_id === cityContainer2[1].id)
                {
                    console.log(`Found for ${city}.`);
                    console.log(insideContainer[t1]);
                    testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t1].restaurant}, Last Date of Visit: ${insideContainer[t1].date_visited}</br>`;
                }
            }
            break;
        case "Mingelchaur":
        testMe.innerHTML = " ";
        for (var t2 in insideContainer){
            if (insideContainer[t2].city_id === cityContainer2[2].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t2]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t2].restaurant}, Last Date of Visit: ${insideContainer[t2].date_visited}</br>`;
            }
        }
            break;
        case "Bigoudine":
        testMe.innerHTML = " ";
        for (var t3 in insideContainer){
            if (insideContainer[t3].city_id === cityContainer2[3].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t3]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t3].restaurant}, Last Date of Visit: ${insideContainer[t3].date_visited}</br>`;
            }
        }
            break;
        case "La Soledad":
        testMe.innerHTML = " ";
        for (var t4 in insideContainer){
            if (insideContainer[t4].city_id === cityContainer2[4].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t4]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t4].restaurant}, Last Date of Visit: ${insideContainer[t4].date_visited}</br>`;
            }
        }
            break;
        case "Shengshan":
        testMe.innerHTML = " ";
        for (var t5 in insideContainer){
            if (insideContainer[t5].city_id === cityContainer2[5].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t5]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t5].restaurant}, Last Date of Visit: ${insideContainer[t5].date_visited}</br>`;
            }
        }
            break;
        case "Nashville":
        testMe.innerHTML = " ";
        for (var t6 in insideContainer){
            if (insideContainer[t6].city_id === cityContainer2[6].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t6]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t6].restaurant}, Last Date of Visit: ${insideContainer[t6].date_visited} </br>
                HOMETOWN!!</br>`;
            }
        }
            break;
        case "Rabat":
        testMe.innerHTML = " ";  
        for (var t7 in insideContainer){
            if (insideContainer[t7].city_id === cityContainer2[7].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t7]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t7].restaurant}, Last Date of Visit: ${insideContainer[t7].date_visited}</br>`;
            }
        }
            break;
        case "Hamilton":
        testMe.innerHTML = " ";
        for (var t8 in insideContainer){
            if (insideContainer[t8].city_id === cityContainer2[8].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t8]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t8].restaurant}, Last Date of Visit: ${insideContainer[t8].date_visited}</br>`;
            }
        }
            break;
        case "El Llano":
        testMe.innerHTML = " ";
        for (var t9 in insideContainer){    
            if (insideContainer[t9].city_id === cityContainer2[9].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t9]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t9].restaurant}, Last Date of Visit: ${insideContainer[t9].date_visited}</br>`;
            }
        }
            break;  
        case "Longwu":
        testMe.innerHTML = " ";
        for (var t10 in insideContainer){
            if (insideContainer[t10].city_id === cityContainer2[10].id)
            {
                console.log(`Found for ${city}.`);
                console.log(insideContainer[t10]);
                testMe.innerHTML += `City: ${city}, Restaurant: ${insideContainer[t10].restaurant}, Last Date of Visit: ${insideContainer[t10].date_visited}</br>`;
            }
        }
            break;
        default:
            break;
    }
}



module.exports = {getRestaurants, getCities, selectCities};
"use strict";
//Import the script functions --
let fetchesFood = require("./food-promises");

let loadCards = document.getElementById("list-of-restaurants");
let loadCardsCitiesSet = document.getElementById("list-of-cities");
let testMe = document.getElementById("testme");

let container = [{}];
let container2 = [{}];
// Define what to do with the restaurants on the return of the promise.
function getRestaurants(){
    let count = 0;
    let sortable = [];

    fetchesFood.fetchRestaurants().then(

        (resolve) => {
         
            container = resolve;
            let keys = Object.keys(container);

            // container[i][0].id; <-- expose ID for item 0 "{id: 1, restaurant: "Schaefer, DuBuque and Satterfield", city_id: 4, date_visited: "6/25/2017", my_rating: 4.52}"
            let insideContainer;
            for (let i in container){

                                //  container[i] <===== Whole Array
                insideContainer = container[i];
                count++;
                for (let cnt in insideContainer){
                    //-----------------------------------------
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
            container2 = resolve;
            for (var t in container2){

                let container3 = container2[t];
                for(var u in container3){
                    console.log(container3[u].city);
                    loadCardsCitiesSet.innerHTML += `<option value="${container3[u].city}" id="select-${u}">
                    ${container3[u].city}
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
        console.log("It is working though:" + event.target.value);
        console.log(str);
        testMe.innerHTML += str + "</br>";

        selectCities(str);
 }
}

function selectCities(city){
    switch (city){
        case "Itupeva":
            console.log("Itupeva is selected.");
            for (var t0 in container2){

                let container3 = container2[t0];
                for(var u0 in container3){
                    if (container3[u0].id === 0){
                    console.log(container3[u0].city);
                    testMe.innerHTML += `<option value="${container3[u0].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u0].city}
                    </option>`;
                    }
                }
            }  
            break;
        case "Changsheng":
            console.log("Changsheng is selected.");
            for (var t1 in container2){
                let container3 = container2[t1];
                for(var u1 in container3){
                    if (container3[u1].id === 1){
                    testMe.innerHTML += `<option value="${container3[u1].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u1].city}
                    </option>`;
                    }
                }
            } 
            break;
        case "Mingelchaur":
            for (var t3 in container2){

                let container3 = container2[t3];
                for(var u3 in container3){
                    if (container3[u3].id === 3){
                    console.log(container3[u3].city);
                    loadCardsCitiesSet.innerHTML += `<option value="${container3[u3].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u3].city}
                    </option>`;
                    }
                }
            }
            break;
        case "Bigoudine":
            for (var t4 in container2){

                let container3 = container2[t4];
                for(var u4 in container3){
                    if (container3[u4].id === 4){
                    console.log(container3[u4].city);
                    loadCardsCitiesSet.innerHTML += `<option value="${container3[u4].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u4].city}
                    </option>`;
                    }
                }
            }
            break;
        case "La Soledad":
            for (var t5 in container2){

                let container3 = container2[t5];
                for(var u5 in container3){
                    if (container3[u5].id === 5){
                    console.log(container3[u5].city);
                    loadCardsCitiesSet.innerHTML += `<option value="${container3[u5].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u5].city}
                    </option>`;
                    }
                }
            }
            break;
        case "Shengshan":
            for (var t6 in container2){

                let container3 = container2[t6];
                for(var u6 in container3){
                    if (container3[u6].id === 6){
                    console.log(container3[u6].city);
                    loadCardsCitiesSet.innerHTML += `<option value="${container3[u6].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u6].city}
                    </option>`;
                    }
                }
            }
            break;
        case "Nashville":
        for (var t7 in container2){

            let container3 = container2[t7];
            for(var u7 in container3){
                if (container3[u7].id === 7){
                console.log(container3[u7].city);
                loadCardsCitiesSet.innerHTML += `<option value="${container3[u7].city}" onselect="printToDOM.getCities(city)">
                ${container3[u7].city}
                </option>`;
                }
            }
        }
            break;
        case "Rabat":
        for (var t8 in container2){

            let container3 = container2[t8];
            for(var u8 in container3){
                if (container3[u8].id === 8){
                console.log(container3[u8].city);
                loadCardsCitiesSet.innerHTML += `<option value="${container3[u8].city}" onselect="printToDOM.getCities(city)">
                ${container3[u8].city}
                </option>`;
                }
            }
        }
            break;
        case "Hamilton":
            for (var t9 in container2){

                let container3 = container2[t9];
                for(var u9 in container3){
                    if (container3[u9].id === 9){
                    console.log(container3[u9].city);
                    loadCardsCitiesSet.innerHTML += `<option value="${container3[u9].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u9].city}
                    </option>`;
                    }
                }
            }
            break;
        case "El Llano":
            for (var t10 in container2){

                let container3 = container2[t10];
                for(var u10 in container3){
                    if (container3[u10].id === 10){
                    console.log(container3[u10].city);
                    loadCardsCitiesSet.innerHTML += `<option value="${container3[u10].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u10].city}
                    </option>`;
                    }
                }
            }
            break;  
        case "Longwu":
            for (var t11 in container2){

                let container3 = container2[t11];
                for(var u11 in container3){
                    if (container3[u11].id === 11){
                    console.log(container3[u11].city);
                    loadCardsCitiesSet.innerHTML += `<option value="${container3[u11].city}" onselect="printToDOM.getCities(city)">
                    ${container3[u11].city}
                    </option>`;
                    }
                }
            }
            break;
        default:
            break;
    }
}



module.exports = {getRestaurants, getCities, selectCities};
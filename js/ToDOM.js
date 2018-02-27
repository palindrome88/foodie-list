"use strict";
//Import the script functions --
let fetchesFood = require("./food-promises");

let loadCards = document.getElementById("list-of-restaurants");
let container = [{}];
// Define what to do with the restaurants on the return of the promise.
function getRestaurants(){
let count = 0;
let sortable = [];


    fetchesFood.fetchRestaurants().then(

        (resolve) => {
            // TEST CONSOLE LOG
            //console.log(resolve);
            container = resolve;
            let keys = Object.keys(container);
            //console.log(keys);
            // TEST CONSOLE LOG
            //console.log(container.restaurants);
            keys.forEach(function (item){

                
            });

            // container[i][0].id; <-- expose ID for item 0 "{id: 1, restaurant: "Schaefer, DuBuque and Satterfield", city_id: 4, date_visited: "6/25/2017", my_rating: 4.52}"
            let insideContainer;
            for (let i in container){

                                //  container[i] <===== Whole Array
                insideContainer = container[i];
                count++;
                for (let cnt in insideContainer){

                    // Exposes every object inside container OR container[#][#]
                    // loadCards.innerHTML += insideContainer[cnt].id + " " + insideContainer[cnt].restaurant + " " + insideContainer[cnt].city_id;
                    
                    //console.log(insideContainer[cnt]); 
                    sortable.push([insideContainer[cnt], insideContainer[cnt].my_rating]);
                    sortable.sort(function (a, b){
                        return a[1] - b[1];
                    });

                    
                    
                }
            }
            console.log(sortable);

            for (var i in sortable){
                loadCards.innerHTML += `<div class = "card"> 
                Id: ${sortable[i][0].id}</br>
                Restarant: ${sortable[i][0].restaurant} </br>
                Rating: ${sortable[i][0].my_rating} </br> 
                
                </br>

                </div>`;
            }
        /*
         loadCards.innerHTML += `<div class = "card"> 
                                Id: ${sortable[cnt].id}</br>
                                Restarant: ${sortable[cnt].restaurant} </br>
                                Rating: ${sortable[cnt].my_rating} </br> 
                                
                                ${sortable[0].id}</br>

                                </div>`;
        */
    },

        (reject)=>{

        }

    );



}


module.exports = {getRestaurants};
"use strict";

function fetchRestaurants(){ // This returns all the areas by id for the side pane

    return new Promise((resolve, reject) =>{
        
        let foodieLoader = new XMLHttpRequest(); 
        
        foodieLoader.open("GET", `js/restaurants.json`);
        foodieLoader.send(); 
        
        foodieLoader.addEventListener("load", function() {
            
            var data = JSON.parse(this.responseText);
            resolve(data);
            
        });
});
}

function fetchCities(){ // This returns all the areas by id for the side pane

    return new Promise((resolve, reject) =>{
        
        let foodieLoader = new XMLHttpRequest(); 
        
        foodieLoader.open("GET", `js/cities.json`);
        foodieLoader.send(); 
        
        foodieLoader.addEventListener("load", function() {
            
            var data = JSON.parse(this.responseText);
            resolve(data);
            
        });
});
}

module.exports = {fetchRestaurants, fetchCities};
























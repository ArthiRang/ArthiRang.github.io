// NY coordinates 40.7128 N, 74.0060 W 40.7128° N, 74.0060° W
// make a variable to hold the map


var myMap = L.map("map", {
    center:[40.7128 , -74.0060 ],
    zoom: 11

});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// get geoJSON data
/*d3.json("nyc.geojson").then(
    function(data)
    {
        //it plots the outline of neighnourhood
        L.geoJson(data).addTo(myMap);
    }
);
*/
/*
d3.json("nyc.geojson").then(
    function(data)
    {
        //it plots the outline of neighnourhood
        L.geoJson(data,
            {
                style:{
                    color:"white",
                    fillColor: "pink",
                    fillOpacity: 0.75,
                    weight: 1.5

                }

            }).addTo(myMap);

    }

);
*/
// function that colors based on thr value
function boroughColor(borough)
{
    if(borough == "Brooklyn")
        return "yellow";
    else if(borough == "Bronx")
        return "red";
    else 
        return "blue"
}
d3.json("nyc.geojson").then(
    function(data)
    {
        //it plots the outline of neighnourhood


        L.geoJson(data,{
            style: function (feature){
                return{
                color: "white",
                fillOpacity: 0.75,
                weight: 1.5,
                fillColor: boroughColor(feature.properties.borough)

            }

            }
        }).addTo(myMap);
    }
);
            
    

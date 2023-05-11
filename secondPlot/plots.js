let gooseBumpsBooks = ["Monster Blood", "It Came From Beneath The Sink","Why I am Afraid of Bees"];

let timesRead = [3,6,4];

// Create Trace

let trace1 = {
    x: gooseBumpsBooks,
    y: timesRead,
    type: "bar",
    name: "Dr A's Reads"
};
// make array to hod traces
var data = [trace1];

// set layout layoutInformation
var layout = {
    title: "Dr. A's Gooosebumps Series Reads"
};

// plot the chart
Plotly.newPlot('plot1',data,layout);

//other reader information
let timesRead2 = [6,3,1];

// make second trace for other reader
let trace2 = {
    x: gooseBumpsBooks,
    y: timesRead2,
    type: 'bar',
    name: "Other user's Reads"
};


// to make grouped chart add the second trace to array

let data2 = [trace1,trace2];
var layout2={
    title: "Dr. A and other user's Goosebumps reads"
}

// call plotly to plot the second grouped bar chart
Plotly.newPlot('plot2',data2,layout2);
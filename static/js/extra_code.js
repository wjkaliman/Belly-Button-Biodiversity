




// const url = "http://robdunnlab.com/projects/belly-button-biodiversity/";

// function getresponse(data) {
//   consolelog(data);
// }
// d3.json(url).then(getresponse);

// // promise pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// code is taliking. getting a cors error. need to investigate later!!!

//------------------------------------------------//




// d3.json("data/samples.json").then((data) => {
//   var samplename = object.values(data.names);
//   var samplemd = object.value(data.metadata);
//   var sampleinfo = object.value(data.samples)

// })


// //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// // Use `sample_values` as the values for the bar chart.
// // Use `otu_ids` as the labels for the bar chart.
// // Use `otu_labels` as the hovertext for the chart.
// function init{
//   var data = [(
//     values:[]
//     labels:[]
//     type: "bar"
//   )];

//   var layout = {
//     height: 600,
//     width: 800
//   };
  
//   Plotly.plot("bar", data, layout);

// }
// // bubble chart code  //////////////////////////
// var trace1 = {
//   x: [1, 2, 3, 4],
//   y: [10, 11, 12, 13],
//   mode: 'markers',
//   marker: {
//     size: [40, 60, 80, 100]
//   }
// };

// var data = [trace1];

// var layout = {
//   title: 'Marker Size',
//   showlegend: false,
//   height: 600,
//   width: 600
// };

// Plotly.newPlot('myDiv', data, layout);

// // Basic Gauge chart///////////////////////////
// var data = [
// 	{
// 		domain: { x: [0, 1], y: [0, 1] },
// 		value: 270,
// 		title: { text: "Speed" },
// 		type: "indicator",
// 		mode: "gauge+number"
// 	}
// ];

// var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
// Plotly.newPlot('myDiv', data, layout);


// // Dislay the sample "METADATA", i.e., an individual's demographic information.



// // Display each key value pair from the "METADATA" (JSON object) somewhere on the page.




// // update all the plots any time that a new sample is selected.
// // html line 37 id "bar"- need to write for bubble and gauge
// function updatePloty(newdata){
// var bc = document.getElementById("bar");
// Ploty.restyle(Bar, "values", [newdata]);

// }


// // repeat after break as needed. stay inside bracket
// function getData(dataset){
//   var data = [];
//   switch (dataset) {
//     case "dataset1":
//       data = ???;
//       break;
//   }
//   updatePlotly(data);

// }

init();
   
 









//   // Use `.html("") to clear any existing metadata
    //   var table = d3.select("#sample-metadata").html("")

    //   // Use `Object.entries` to add each key and value pair to the panel
    //   var cell = table.append("td");
    //   Object.entries(response).forEach(([key, value]) => {
    //     var row = cell.append("tr");
    //     row.text(`${key}: ${value}`);
    //   });
    
    // });
    // console.log("??");

// html code need to put back at bottom after app.js

// function showdata(tableData) {
//     var tbody = d3.select("tbody");

//     tableData.forEach(sample => {
//         console.log(sample);
//         var row = tbody.append("tr");

//         Object.entries(sample).forEach(([key, value]) => {
//             console.log(key, value);
//             var column = Data.append("td");
//             column.text(value);
//         });
//     });
// }


// ul.append("li").text(tableData.metadata[0].id)
// ul.append("li").text(tableData.metadata[0].ethincity)
// ul.append("li").text(tableData.metadata[0].gender)
// ul.append("li").text(tableData.metadata[0].age)
// ul.append("li").text(tableData.metadata[0].location)
// ul.append("li").text(tableData.metadata[0].bbtype)
// ul.append("li").text(tableData.metadata[0].wfreq)
// 

function optionChanged(selectednumber) {
    d3.json("samples.json").then(function (data) {
    var filtereddata = data.samples.filter(row => row.id == selectednumber)
    console.log(filtereddata)
    Bardata(filtereddata[0])
    Bubbledata(filtereddata[0])
    Gaugedata(filtereddata[0])
    var barfilteredmeta = data.metadata.filter(row => row.id == selectednumber)
    
    showmetadata(barfilteredmeta[0])
    })
}
function init() {
var dropdown = d3.select("#selDataset") //referencing back to html  and appending dropdown
    d3.json("samples.json").then(function (data) {
        data.names.forEach((people) => {
            dropdown.append("option")
                .text(people)
                .property("value", people)
        })
        //line 17 starts looking at names list with ids. then looping through the people on list
        var initialdata = data.samples[0]
        console.log(data);
        Bardata(initialdata)
        Bubbledata(initialdata)
        Gaugedata(initialdata)
        var metadata = data.metadata[0]
        showmetadata(metadata)
    });
}
init()
// code above will populate below after code is run

//                question 2 

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function Bardata(tableData) {
    console.log(tableData); 
    //console.log(tableData.samples[0].otu_labels)
    console.log(tableData.otu_ids.map(function (otu) {
        return "OTU " + otu
    }))
    var slice = tableData.otu_ids.map(function (otu) {
        return "OTU " + otu
    }).slice(0, 10)
    console.log(slice)
    var otu_label = tableData.otu_labels
    //var otu_id = tableData.otu_ids
    var trace1 = [{
        type: 'bar',
        x: otu_label,           
        y: slice,
        orientation: 'h'
    }];

    var layout = {
        title: 'Top 10 OTUs',
        barmode: 'stack',
        xaxis: { title: ""},
        yaxis: { title: "" }
    }
//
    Plotly.newPlot("bar", trace1, layout);
}
//               Question 3
//  Create a bubble chart that displays each sample.

function Bubbledata(tableData) {
    var otu_label = tableData.otu_labels
    var otu_id = tableData.otu_ids
    var sample_values = tableData.sample_values
    var trace1 = {
        x: otu_label,
        y: sample_values,
        text: otu_label,
        mode: 'markers',
        marker: {
            color: otu_id,
            size: sample_values
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Bacteria',
        xaxis: { title: "" },
        yaxis: sample_values,
        showlegend: false,
        height: 600,
        width: 1000
    };

    Plotly.newPlot('bubble', data, layout);
}
// // Basic Gauge chart///////////////////////////

function Gaugedata(tableData) {
    var data = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: 270,// needs a result number??
            title: { text: "Belly Button" },
            type: "indicator",
            mode: "gauge+number"
        }
    ];

    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data, layout);
}

// Display each key-value pair from the metadata JSON object somewhere on the page.  
function showmetadata(tableData) {
    console.log(tableData)
    var ul = d3.select("#sample-metadata");
    ul.html("") //clears out metadata panel data
    Object.entries(tableData).forEach(([keys, value]) => {
        ul.append("h5").text(`${keys} : ${value}`)
        console.log(keys, value)
    });
}
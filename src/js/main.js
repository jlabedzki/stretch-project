let options = {

  title: {
    //Replace the bracketed string value after .html with the title of your choosing.
    text: $('#chartTitle').html('First Bar Chart')
  },
  //Width & height of the chart's container, not of individual bars.
  width: $('#dataTable').style.width = "75%",
  height: $('#dataTable').style.height = "400px"
};

let data = [1, 2, 3, 4, 5];

const drawBarChart = function (data, options, element) {
  //Data parameter is an array of numbers.
  //Options parameter is an object which gives the user customizable options for the bar chart container. Eg. width, height, etc.
  //Element parameter is the "dataTable" ID in the HTML body.

  return options;
};

drawBarChart(options);


//TODO create a function that can create a new bar based on the length of the data array

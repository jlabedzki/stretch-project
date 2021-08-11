const drawBarChart = function (data, options, element) {

  // If the user doesn't input a width value in the options object, this function will set a default width.
  const defaultWidth = function (_data) {
    let keyCount = Object.keys(_data).length;
    x = keyCount - 3;
    let minWidth = x * 50 + 600;
    return minWidth;
  };

  // If the user's width input is insufficient to hold the number of bars, this will override their width input.
  const userWidth = function (_data, _options) {
    let keyCount = Object.keys(_data).length;
    let minWidth;
    let width = _options.width;
    if (keyCount <= 3) {
      minWidth = 200;
    } else {
      x = keyCount - 3;
      minWidth = x * 50 + 200;
    }
    if (width < minWidth) {
      return minWidth;
    } else {
      return width;
    }
  };

  let chartContainer = $('#chartContainer')[0];

  /* Initialize the dimensions and chart options depending on presence of user parameters */
  let containerWidth = options.width ? userWidth(data, options) : defaultWidth(data);
  let containerHeight = options.height ? options.height : 350;
  let dimensions = [containerHeight, containerWidth];

  var addColumns = function (_data, _dimensions) {
    var values = Object.values(_data);

    /* Find the highest value for use in scaling the height */
    var maxHeight = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] > maxHeight) {
        maxHeight = values[i];
      }
    }

    let columnContainer = document.createElement('thead');

    /* Iterate over user's data values to get heights. Scale is dependent on dimensions of container. */
    for (i = 0; i < values.length; i++) {
      let column = document.createElement('tr');
      column.className = 'column';
      let columnLabel = document.createElement('th');
      columnLabel.className = 'columnLabel';
      columnLabel.innerHTML = Object.keys(_data)[i];
      $(columnLabel).css({
        "font-size": "15px",
        "font-weight": "400"
      });
      $(chartContainer).append(columnContainer);
      $(columnContainer).append(column);
      $(column).append(columnLabel);

    }
  };


  return addColumns(data, dimensions) + handleUserFonts(options);

  //Populate x-axis labels and columns
  /*
  var addColumns = function (_data, _dimensions, _barColor) {
    var values = Object.values(_data);
    var height = _dimensions[0];
    var width = _dimensions[1];

    var maxHeight = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] > maxHeight) {
        maxHeight = values[i];
      }
    }

    for (i = 0; i < values.length; i++) {
      var columnLabel = document.createElement("th");
      columnLabel.innerHTML = Object.keys(_data)[i];
      columnLabel.className = "columnLabel";
      $(chartContainer).append(columnContainer);
      $(columnContainer).append(column);
      $(chartContainer).append(columnLabel);
    }

  };
  */
};

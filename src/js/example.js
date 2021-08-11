let exampleData = {
  'Prodigies': 5,
  'Top performers': 10,
  'Great students': 20,
  'Average students': 30,
  'Me': 50
};

let exampleOptions = {
  //* Make sure the ID tag correlates with the HTML doc.
  height: $('#mainContainer')[0].style.height = '500px',
  //* Make sure the ID tag correlates with the HTML doc.
  width: $('#mainContainer')[0].style.width = '75%',
  title: $('#chartTitle')[0].innerHTML = 'Average # of Hours to Complete Bar Chart Project'
};

drawBarChart(exampleData, exampleOptions, $('#chartContainer')[0]);

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
	label: 'Patrimoine',
	data: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
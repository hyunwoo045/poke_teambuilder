var getChartConfig = function() {
    return {
        type: 'bar',
        data: {
            labels: ['HP', 'Atk', 'Def', 'Sp.Atk', 'Sp.Def', 'Speed'],
            datasets: [{
                label: '',
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderWidth: 1
            }],
        },
        options:{
            responsive: false,
            scales: {
                x: {
                    suggestedMin: 0,
                    suggestedMax: 300,
                    ticks: {
                        font: {
                            size: 0
                        }
                    },
                    grid: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 9
                        }
                    },
                    grid: {
                        color: 'white'
                    }
                }
            },
            indexAxis: 'y',
        }
    }
}
export default getChartConfig;
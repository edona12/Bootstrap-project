
const transactionsData = [12, 19, 3, 5, 2, 3, 7, 10];
const playersData = [20, 30, 45, 60, 70, 55, 40, 35];


const ctx1 = document.getElementById('transactionsChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        datasets: [{
            label: 'Transactions per Minute',
            data: transactionsData,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});


const ctx2 = document.getElementById('playersChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        datasets: [{
            label: 'Active Player Sessions',
            data: playersData,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

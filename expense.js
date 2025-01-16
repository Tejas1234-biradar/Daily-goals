document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value;
  
    if (amount && category) {
      const expenseLog = document.getElementById('expenseLog');
      const totalExpense = document.getElementById('totalExpense');
  
      // Add to the expense log
      const newItem = document.createElement('li');
      newItem.textContent = `₹${amount.toFixed(2)} - ${category}`;
      expenseLog.appendChild(newItem);
  
      // Update total expense
      let currentTotal = parseFloat(totalExpense.textContent);
      currentTotal += amount;
      totalExpense.textContent = currentTotal.toFixed(2);
  
      // Update expense data for chart
      updateChartData(category, amount);
  
      // Reset the form
      document.getElementById('expenseForm').reset();
    }
  });
  
  const expenseData = {
    Food: 0,
    Rent: 0,
    Entertainment: 0,
    Utilities: 0,
    Others: 0
  };
  
  function updateChartData(category, amount) {
    expenseData[category] += amount;
    renderChart();
  }
  
  let chartInstance = null; // To store the chart instance
  
  function renderChart() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
  
    // If a chart already exists, destroy it before creating a new one
    if (chartInstance) {
      chartInstance.destroy();
    }
  
    chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(expenseData),
        datasets: [{
          data: Object.values(expenseData),
          backgroundColor: ['#957DAD', '#B3DEE2', '#EFF0D1', '#C0ECCC', '#F6A8A6']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 18 // Increase label font size
              },
              color: '#262730' // Ensure labels are easily readable
            }
          }
        }
      }
    });
  }
  
  // Initial render of the chart
  renderChart();
  
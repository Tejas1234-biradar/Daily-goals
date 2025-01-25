document.getElementById('fitnessForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;

    const table = document.getElementById('activityTable').getElementsByTagName('tbody');

    const row = table.insertRow();
    row.insertCell(0).textContent = date;
    row.insertCell(1).textContent = exercise;
    row.insertCell(2).textContent = duration;
    row.insertCell(3).textContent = calories;

    document.getElementById('fitnessForm').reset();
});
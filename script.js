let income = document.getElementById('income');
income.addEventListener('input', () => {
    var incomeValue = income.value;
    document.getElementById('income-display').innerHTML = incomeValue + 'k';
})
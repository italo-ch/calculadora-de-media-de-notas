const inputGrade = document.querySelector('.input-grade');
const addNewGradeButton = document.querySelector('.add-new-grade');
const calculateAverageButton = document.querySelector('.calculate-average');
const showGradesContainer = document.querySelector('.show-grades-container');
const average = document.querySelector('.average-result');

let grades = []

function handleAddNewGrade() {
    const grade = inputGrade.value;
    if (checkInputIsValid(grade)) {
        grades.push(parseFloat(grade));
        const div = document.createElement('div');
        div.textContent = `A nota ${grades.length} foi de ${grade}`;
        showGradesContainer.append(div);
        inputGrade.value = '';
    }
}

function checkInputIsValid(input) {
    if (input.length === 0) {
        alert("Por favor, insira uma nota!");
        return false;
    }

    if (isNaN(input)) {
        alert("Por favor, insira um valor numérico!");
        return false;
    }
    
    if (!(parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
        alert("Por favor, insira um valor numérico entre 0 e 10");
        return false;
    }

    return true
}

function handleCalculateAverage() {
    let total = 0;
    for (let grade of grades) {
        total += grade;
    }
    average.textContent = (total / grades.length).toFixed(2);
    showGradesContainer.textContent = '';
    grades = [];
}

addNewGradeButton.addEventListener('click', handleAddNewGrade);
calculateAverageButton.addEventListener('click', handleCalculateAverage);
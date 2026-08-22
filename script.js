document.getElementById('add-course-btn').addEventListener('click', function() {
    const coursesSection = document.getElementById('courses-section');
    const newRow = document.createElement('div');
    newRow.className = 'course-row';
    newRow.innerHTML = `
        <input type="text" placeholder="Course Name" class="course-name">
        <select class="course-grade">
            <option value="4.0">A (4.0)</option>
            <option value="3.7">A- (3.7)</option>
            <option value="3.3">B+ (3.3)</option>
            <option value="3.0">B (3.0)</option>
            <option value="2.7">B- (2.7)</option>
            <option value="2.3">C+ (2.3)</option>
            <option value="2.0">C (2.0)</option>
            <option value="1.0">D (1.0)</option>
            <option value="0.0">F (0.0)</option>
        </select>
        <input type="number" placeholder="Credits" class="course-credits" value="3" min="1" max="6">
    `;
    coursesSection.appendChild(newRow);
});

document.getElementById('calculate-btn').addEventListener('click', function() {
    const gradeSelects = document.querySelectorAll('.course-grade');
    const creditInputs = document.querySelectorAll('.course-credits');
    
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < gradeSelects.length; i++) {
        const grade = parseFloat(gradeSelects[i].value);
        const credits = parseFloat(creditInputs[i].value);

        if (!isNaN(grade) && !isNaN(credits) && credits > 0) {
            totalPoints += grade * credits;
            totalCredits += credits;
        }
    }

    const resultBox = document.getElementById('result');
    if (totalCredits === 0) {
        resultBox.innerHTML = `<p style="color: #ff6b6b;">Please enter valid credit hours.</p>`;
        return;
    }

    const gpa = (totalPoints / totalCredits).toFixed(2);
    resultBox.innerHTML = `<p>Your GPA is: <strong style="color: #4CAF50; font-size: 18px;">${gpa}</strong> (Total Credits: ${totalCredits})</p>`;
});
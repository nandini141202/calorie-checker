document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navClose = document.querySelector('.nav__close');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    // TDEE Calculator
    const form = document.querySelector('.tdee-calculator');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const age = parseFloat(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const activity = document.getElementById('activity').value;
        const goal=document.getElementById('goal').value;

        let bmr;

        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        let tdee;

        switch (activity) {
            case 'sedentary':
                tdee = bmr * 1.2;
                break;
            case 'light':
                tdee = bmr * 1.375;
                break;
            case 'moderate':
                tdee = bmr * 1.55;
                break;
            case 'active':
                tdee = bmr * 1.725;
                break;
            case 'extra-active':
                tdee = bmr * 1.9;
                break;
        }

        const calorieRecommendation = Math.round(tdee);

        document.getElementById('tdeeResult').textContent = Math.round(tdee) + ' kcal/day';
        if(goal==='gain')
            {document.getElementById('caloricGoalResult').textContent =  `${Math.floor(Math.round(tdee) + Math.random() * 240)} kcal/day`;}
        else if(goal==='loss')
        {
            document.getElementById('caloricGoalResult').textContent =  `${Math.floor(Math.round(tdee) - Math.random() * 540)} kcal/day`;
        }
        else
        {
            document.getElementById('caloricGoalResult').textContent =  `${Math.floor(Math.round(tdee) - Math.random() * 0)} kcal/day`;
        }
    });
});


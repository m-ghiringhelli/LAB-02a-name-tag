const updateButtonName = document.getElementById('update-button-name');
const updateButtonPronouns = document.getElementById('update-button-pronouns');
const nameInput = document.getElementById('name-input');
const pronounInput = document.getElementById('pronoun-input');
const nameDisplay = document.getElementById('name-display');
const pronounDisplay = document.getElementById('pronoun-display');
const pinkButton = document.getElementById('bg-pink');
const lightGreenButton = document.getElementById('bg-lightgreen');
const lightBlueButton = document.getElementById('bg-lightblue');

//nameDisplay.textContent = 'Felix the Cat';

updateButtonName.addEventListener('click', () => {
    const name = nameInput.value;
    nameDisplay.textContent = name;
});

updateButtonPronouns.addEventListener('click', () => {
    const pronouns = pronounInput.value;
    pronounDisplay.textContent = pronouns;
});

pinkButton.addEventListener('click', () => {
    document.getElementById('grey-background').style.background='pink';
});

lightGreenButton.addEventListener('click', () => {
    document.getElementById('grey-background').style.background='lightgreen';
});

lightBlueButton.addEventListener('click', () => {
    document.getElementById('grey-background').style.background='lightblue';
});

console.log(nameInput);
console.log(nameDisplay);
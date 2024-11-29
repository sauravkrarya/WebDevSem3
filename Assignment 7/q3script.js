
const heading = document.getElementById('main-heading');
const button = document.getElementById('change-heading-button');


button.addEventListener('click', () => {

    heading.textContent = 'Heading Changed Dynamically!';
});

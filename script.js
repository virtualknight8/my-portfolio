const contentContainer = document.querySelector('.contentcontainer');
const aboutMeContent = document.getElementById('content1');
const eduContent = document.getElementById('content2');
const projectContent = document.querySelector('#content3');
const contactMeContent = document.getElementById('content4');
const buttons = document.querySelectorAll('.sidebar button');

const sudokuTryButton = document.querySelector('#sudotry');
const portfolioViewSource = document.querySelector('#portview');
const sudokuViewSource = document.querySelector('#sudoview');
const resumebtn = document.getElementById('resumebutton');
const sourceButton = document.getElementById('sourcebutton');

sudokuTryButton.addEventListener('click', ()=>{
    window.location.href='https://virtualknight8.github.io/sudoku-helper/';
});

portfolioViewSource.addEventListener('click', ()=>{
    window.location.href='https://github.com/virtualknight8/my-portfolio';
});

sudokuViewSource.addEventListener('click', ()=>{
    window.location.href='https://github.com/virtualknight8/sudoku-solver'
});

resumebtn.addEventListener('click', ()=>{
    window.location.href='src/final resume.pdf';
}
);

sourceButton.addEventListener('click', ()=>{
    window.location.href='https://github.com/virtualknight8/inventory-management';
})
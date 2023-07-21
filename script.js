const sudokuTryButton = document.querySelector('#sudotry');
const portfolioViewSource = document.querySelector('#portview');
const sudokuViewSource = document.querySelector('#sudoview');
const resumebtn = document.getElementById('resumebutton');
const sourceButton = document.getElementById('sourcebutton');
const landingPageTryButton = document.getElementById('landingpagetry');
const landingPageSourceButton = document.getElementById('landingpagesource');

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
    window.location.href='src/Updated Resume.pdf';
}
);

landingPageTryButton.addEventListener('click', ()=>{
    window.location.href='https://new-landing-page-flax.vercel.app/';
});

landingPageSourceButton.addEventListener('click', ()=>{
    window.location.href='https://github.com/virtualknight8/new-landing-page.git';
});

sourceButton.addEventListener('click', ()=>{
    window.location.href='https://github.com/virtualknight8/inventory-management';
})
const contentContainer = document.querySelector('.contentcontainer');

const aboutMeContent = document.getElementById('content1');
const eduContent = document.getElementById('content2');
const projectContent = document.querySelector('#content3');
const contactMeContent = document.getElementById('content4');



const buttons = document.querySelectorAll('.sidebar button');


buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        if(button.id=='button2'){
            const childDiv = document.querySelector('.contentcontainer>div');
            childDiv.style.display='none';
            contentContainer.removeChild(childDiv);
            eduContent.style.display='flex';
            contentContainer.appendChild(eduContent);
            
        }
        if(button.innerHTML=='Projects'){
            const childDiv = document.querySelector('.contentcontainer>div');
            childDiv.style.display='none';
            contentContainer.removeChild(childDiv);
            projectContent.style.display='flex';
            contentContainer.appendChild(projectContent);
            
        }
        if(button.innerHTML=='About Me'){
            const childDiv = document.querySelector('.contentcontainer>div');
            childDiv.style.display='none';
            contentContainer.removeChild(childDiv);
            aboutMeContent.style.display='flex';
            contentContainer.appendChild(aboutMeContent);
        }
        if(button.innerHTML=='Contact Me'){
            const childDiv = document.querySelector('.contentcontainer>div');
            childDiv.style.display='none';
            contentContainer.removeChild(childDiv);
            contactMeContent.style.display='flex';
            contentContainer.appendChild(contactMeContent);
        }
    })
})


const sudokuTryButton = document.querySelector('#sudotry');
const portfolioViewSource = document.querySelector('#portview');
const sudokuViewSource = document.querySelector('#sudoview');
const resumebtn = document.getElementById('resumebutton');

sudokuTryButton.addEventListener('click', ()=>{
    window.location.href='https://virtualknight8.github.io/sudoku-solver/';
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
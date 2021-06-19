// If the dark mode checkbox is ticked/unticked, change between dark mode and light mode
// by changing the colours of the elements on the page.
function toggleMode() {

    const toggleCheckbox = document.getElementById('toggle-checkbox');
    let body = document.getElementsByTagName('body')[0];
    let header = document.getElementsByTagName('h1')[0];
    let text = document.getElementsByTagName('p')[0];
    let footer = document.getElementsByTagName('footer')[0];

    if (toggleCheckbox.checked) {
        body.style.backgroundColor = '#000000';
        header.style.color = '#AAAAAA';
        text.style.color = '#AAAAAA';
        footer.style.backgroundColor = '#808080';
    }
    else {
        body.style.backgroundColor = '#CCCCCC';
        header.style.color = '#000000';
        text.style.color = '#000000';
        footer.style.backgroundColor = '#AAAAAA';
    }

}

// The content of the page is changed based on the button clicked on the navbar.
function changeContent(toShow) {

    let content = document.getElementById('content');

    if (toShow == 'about') {
        content.innerHTML = `I am a focused Computer Science graduate with strong problem-solving skills, a willingness to learn new
        techniques and a keen interest in software engineering. I am experienced with a range of different programming languages and
        tools, and have work experience in the IT sector. In my spare time I like to work on personal programming projects,
        some of which are on my GitHub.`;
    } 
    
    else if (toShow == 'education') {
        content.innerHTML = `I completed my GCSEs and A-Levels at Mascalls Academy. 
        I achieved the grades A, B, B in Computer Science, Physics, and Mathematics, and also achieved an A in AS-Level Business Studies.
        I attended the University of Reading from 2017 to 2020, during which I completed my BSc Computer Science course, attaining a high 2:1.`;
    } 
    
    else if (toShow == 'experience') {
        content.innerHTML = `I currently work as a software developer at HNF Consultancy. My work there involves maintaining and updating vehicle
        delivery/storage software for various customers. Each customer has a customised version of the system, which is a web app. These systems are
        written mainly using HTML/XHTML, CSS, JavaScript, and Classic ASP (VBScript). My work involves fixing bugs in the code or adding new features,
        as well as maintaining the SQL Server databases.
        <br><br>
        As well as the above technologies, I have experience with Python, C++, C, and Java.`
    } 
    
    else if (toShow == 'hobbies') {
        content.innerHTML = `In my spare time I enjoy playing video games, chatting with my friends and watching TV. I also enjoy doing programming
        in my spare time. I'm working on a range of different projects, one of which is this website! You can see some of my other work on my GitHub,
        which is linked in the footer of the page.`;
    }

    else {
        content.innerHTML = "Get out of dev tools nerd";
    }
    
}
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
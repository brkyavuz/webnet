// Theme Toggle Script

var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
var currentTheme = localStorage.getItem('theme');
var mainHeader = document.querySelector('.main-header');

if (currentTheme) {
    if (currentTheme === 'dark') {
        if (!document.body.classList.contains('dark-mode')) {
            document.body.classList.add("dark-mode");
        }
        // Commented if needed in the future
        //if (mainHeader.classList.contains('navbar-light')) {
        //	mainHeader.classList.add('navbar-dark');
        //	mainHeader.classList.remove('navbar-light');
        //}
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        if (!document.body.classList.contains('dark-mode')) {
            document.body.classList.add("dark-mode");
        }
        // Commented if needed in the future
        //if (mainHeader.classList.contains('navbar-light')) {
        //	mainHeader.classList.add('navbar-dark');
        //	mainHeader.classList.remove('navbar-light');
        // }
        localStorage.setItem('theme', 'dark');
    } else {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove("dark-mode");
        }
        // Commented if needed in the future
        // if (mainHeader.classList.contains('navbar-dark')) {
        //	mainHeader.classList.add('navbar-light');
        //	mainHeader.classList.remove('navbar-dark');
        //}
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Theme Toggle Script

function runCodeMirror() {
    CodeMirror.fromTextArea(document.getElementById("template-content"), {
        mode: "jinja2",
        theme: "monokai",
        readOnly: false,
        autoRefresh: true,
        indentWithTabs: true,
        tabSize: 2,
        lint: true,
        lineNumbers: true,
        scrollbarStyle: "simple",
    });
}
const btn_about = document.querySelector('#more_about');
const btn_projects = document.querySelector('#PROJECT');
const btn_contact = document.querySelector('#CONTACT');

        btn_about.addEventListener('click', () => {
            window.scroll({top: document.getElementById('skills').offsetTop, behavior: "smooth"});
        });

        btn_projects.addEventListener('click', () => {
            window.scroll({top: document.getElementById('projects').offsetTop, behavior: "smooth"});
        });

        btn_contact.addEventListener('click', () => {
            window.scroll({top: document.getElementById('contact').offsetTop, behavior: "smooth"});
        });
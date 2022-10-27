//imidiately invoked function expression --

//const { event } = require("jquery");

/*
    file name: app.css
    Name: Minyoung Seol
    Student ID: 301203510
    Date: Oct 8, 2022
*/

(function(){
    function Start(){
        console.log("App started!");

        var deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")){
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();
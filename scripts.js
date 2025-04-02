// Custom JavaScript for additional functionality
document.addEventListener('DOMContentLoaded', function () {
    // Your custom JavaScript code here if needed
});

    // Load the navigation bar
    $(function(){
        $("#navbar-container").load("navbar.html"); 
    });

    // Bootstrap form validation
    (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()
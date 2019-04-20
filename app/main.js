// CONTACT CONTROLLER
console.log('It works')

$(document).ready(function() {
    $('.submit'). click(function(event) {
        event.preventDefault()
        console.log('clicked button')

        var email, message, firstName, statusElm;

        email = $('.form__email').val(),
        message = $('.form__message').val(),
        firstName = $('.form__firstName').val(),
        statusElm = $('.status') //Validation process
        statusElm.empty();
        

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            
        } else {
            statusElm.append('<div>*Email is not valid</div>')
        }

        if(message.length >= 10) {
        
        } else {
            statusElm.append('<div>*Message is not valid</div>')
        }

        if(firstName.length >= 2) {
            } else {
                statusElm.append('<div>*First name is not valid</div>')
            }
    });
});
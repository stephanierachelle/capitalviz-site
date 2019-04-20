// CONTACT CONTROLLER

$(document).ready(function() {
    $('.submit'). click(function(event) {
        event.preventDefault()
        console.log('clicked button')

        var email, message, firstName, lastName;

        email = $('.form__email').val(),
        message = $('.form__message').val(),
        firstName = $('.form__firstName').val(),
        lastName = $('form__lastName').val()
        

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            console.log('Email is valid')
        } else {
            console.log('Email is not valid')
        }

        if(message.length >= 10) {
        console.log('Message is valid')
        } else {
            console.log('Message not is valid')
        }

        if(firstName.length >= 2) {
            console.log('First name is valid')
            } else {
                console.log('First name not is valid')
            }
    });
});
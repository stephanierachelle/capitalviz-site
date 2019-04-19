/////////////////////////////////////////////
/////////////   CONTACT PAGE   ////////////

console.log('hello world');

$(document).ready(function() {
    $('.submit').click(function(event) {
    event.preventDefault()     
    console.log('clicked button'); //don't send form until validated

    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
        statusElm.empty();


    if (email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append('<div>this is vaild</div>')
    } else {
        statusElm.append('<div>this is not vaild</div>');
    }

    if (message.length >= 10) {
        console.log('is vaild')
    } else {
        console.log('is not vaild')
    }

    });
});

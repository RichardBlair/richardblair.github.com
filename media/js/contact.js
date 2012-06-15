$(document).ready(function(){
    $('#email_me').click(function(e){
        if( $(e.target).attr('href') == '#' )
        {
            e.preventDefault();
            var contact = ['contact']; 
            contact[1] = ['@']; 
            contact[2] = ['richardlblair']; 
            contact[3] = ['.']; 
            contact[4] = ['com']; 

            $('#email-instruction').text('(Click once more)');

            $(e.target).attr('href', 'mailto:' + contact[0] + contact[1] + contact[2] + contact[3] + contact[4]);

            return false;
        }
    });

});
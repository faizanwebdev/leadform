function sendmail(){
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var contact = $("#contact").val().trim();
    var website = $("#website").val().trim();
    var message = $("#message").val().trim();
    var registerform = $('#register-form');
    var signup = $('#signup');
    var sentmessage = $('.sentmessage');
    var errormessage = $('.errormessage');
    
    if(name !== ""){
//        $("#errorname").css({"display":"none"});
        if(email !== ""){
            $("#erroremail").css({"display":"none"});
            if(email.includes("gmail") || email.includes("yahoo") || email.includes("rediff") || email.includes("outlook") || email.includes("hotmail")){
                $('#email').focus();
                alert("Please Enter Your Business Email");
//                $('#email-error').css({"display":"inline"});
                return false;
            }
            else{
//                $('#email-error').css({"display":"none"});
                if(contact !== "" && contact.length == 10){
//                    $('#contact-error').css({"display":"none"});
                    if(website !== ""){
//                        $('#website-error').css({"display":"none"});
                        $.ajax({
                            url: 'mail.php',
                            type: 'POST',
                            data: {name:name,email:email,contact:contact,website:website,message:message,signup:"signup"},
                            beforeSend: function(){
                                $('#signup').css({"display":"none"});
                                $('.onsub').css({"display":"inline"});
                            },
                            success: function(data){
                                if(data == "validemail"){
                                    alert("Please Enter Valid Business Email");
                                    $("#email").focus();
                                    $('#signup').css({"display":"inline-block"});
                                    $('.onsub').css({"display":"none"});
                                }
                                if(data == "validnumber"){
                                    alert("Please Enter Valid 10 Digit Contact Number");
                                    $("#contact").focus();
                                    $('#signup').css({"display":"inline-block"});
                                    $('.onsub').css({"display":"none"});
                                }
                                if(data == "mandatory"){
                                    alert("Please Enter All fields properly");
                                    $('#name').focus();
                                    $('#signup').css({"display":"inline-block"});
                                    $('.onsub').css({"display":"none"});
                                }
                                if(data == "success"){
                                    alert("Thank You for Submitting the form, Our Influencer Expert Will Contact You Shortly");
                                    $('#signup').css({"display":"inline-block"});
                                    $('.onsub').css({"display":"none"});
                                    $('#register-form').trigger("reset");
                                    $('#register-form').css({"display":"none"});
                                    $('.successhide').css({"display":"block"});
                                }
                                else{
                                    alert("There was some error while submitting, pleas try again later");
                                    $('.onsub').css({"display":"none"});
                                    $('#register-form').trigger("reset");
                                }
                            }
                        });
                    }
                    else{
                        $('#website').focus();
                        alert("Please Enter Your Website URL");
                    }
//                    if(message !== ""){
//                        $('#message-error').css({"display":"none"});
                        
//                    }
//                    else{
//                        $('#message').focus();
//                        alert("Please Enter Your Message");
//                        $('#message-error').css({"display":"inline"});
//                    }
                }
                else{
                    $('#contact').focus();
                    alert("Please Enter Valid 10 Digit Mobile Number");
//                    $('#contact-error').css({"display":"inline"});
                }
            }
        }
        else{
            $("#email").focus();
            alert("Please Enter Your Business Email");
//            $("#erroremail").css({"display":"inline"});
        }
    }
    else{
        $("#name").focus();
        alert("Please Enter Your Name");
//        $("#errorname").css({"display":"inline"});
    }
    
    return false;
}  
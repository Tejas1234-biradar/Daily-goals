$(document).ready(function (){
  let isValid = false;

$('#email').on('blur', function () {
let text;
var x=signup.email.value;
var y=x.indexOf("@");
var last=x.lastIndexOf("@");
var dot=x.lastIndexOf(".");
if (x == "") {
    $('#mail').show();
    $(this).focus().css('border-color', '#d33f49');
    text="Email cannot be empty.";
    isValid = false;
 }
  else if(y<1||dot<y+2||dot+2>=x.length||y<last)
        {
          $('#mail').show();
          $(this).focus().css('border-color', '#d33f49');
            text="Please enter a valid email."
            isValid = false;
  }else
 {
    text="";
    $('#mail').hide();
    $(this).css('border-color', '');
    isValid = true;
}
$('#mail').text(text);
$(this).css('border-color', '');
//return false;
return isValid;
});


/*password visibility
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }*/
   $('#psw').on('blur', function(){
      let text;
      var password=signup.psw.value;
      let passwordStrengthPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      $('#paswrd').hide();
      $('#error').hide();
      if (password === "") {
        $('#paswrd').show();
        $(this).focus().css('border-color', '#d33f49');
        text="Password cannot be empty.";
        isValid = false;
    } else if (!passwordStrengthPattern.test(password)) {
        $('#error').show();
        $(this).focus().css('border-color', '#d33f49');
        text="Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one special character, and one number.";
        isValid = false;
        } else{
          text="";
          $('#paswrd').hide();
          $('#error').hide();
          $(this).css('border-color', '');
          isValid = true;
     }
     $('#paswrd').text(text);
     $('#error').text(text);
     $(this).css('border-color', '');
    return isValid;
    });


    $('#pswrepeat').on('blur', function () {
      let text;
      let repeatedPassword = signup.pswrepeat.value; // The repeated password field
      let originalPassword = signup.psw.value;      // The original password field
  
      // Reset error messages
      $('#paswrdrept').hide();
      $('#paswrdrep').hide();
      //document.getElementById('paswrdrept').style.display = "none";
      //document.getElementById('paswrdrep').style.display = "none";
  
      // Check if the repeated password is empty
      if (repeatedPassword === "") {
          $('#paswrdrept').show();
          $(this).focus().css('border-color', '#d33f49');
          text = "Field cannot be empty.";
          isValid = false;
      }
      // Check if the passwords match
      else if (originalPassword !== repeatedPassword) {
          $('#paswrdrep').show();
          $(this).focus().css('border-color', '#d33f49');
          text = "Passwords do not match.";
          isValid = false;
      }
     $('#paswrdrep').text(text);
     $('#paswrdrept').text(text);
     $(this).css('border-color', '');
      return isValid;
  });
/*$('#modal-content').on('submit', function(){
        if(isValid == true)
          document.getElementById('nxtpg').click();
       else
            alert("Please enter valid details.");
      });
    });*/

   // $('#modal-content').on('submit', function (event) {
     $('#nxtpg').on('click', function (event) {
   // First, we reset isValid to true before validation
      isValid = false;

       //Validate the email field
      if (!$('#email').trigger('blur')) {
          isValid = false;
      }

      // Validate the password field
      if (!$('#psw').trigger('blur')) {
          isValid = false;
      }

      // Validate the repeat password field
      if (!$('#pswrepeat').trigger('blur')) {
          isValid = false;
      }

      // If all fields are valid, allow submission, otherwise prevent form submission
      if (isValid) {
        alert("Form submitted successfully.");
        window.location.replace("C:/Users/smita/OneDrive/Documents/Sem1 assignment/WD Lab/MSA/WD PROJECT TRACKER/FINAL/index.html");
        event.preventDefault();
         // document.getElementById('nxtpg').click();  // Proceed with form submission
      } else {
          alert("Please enter valid details."); // Alert message for invalid form
          event.preventDefault();  // Prevent form submission
      }
  });
});
/*validate email

function chk()
{
var x=signup.email.value;
var y=x.indexOf("@");
var last=x.lastIndexOf("@");
var dot=x.lastIndexOf(".");
if (x == "") {
    document.getElementById("mail").style.display = "block";
    document.forms["signup"]["email"].focus;
    document.getElementById("email").style.borderColor = "#d33f49";
    text="Email cannot be empty.";
 }
  else if(y<1||dot<y+2||dot+2>=x.length||y<last)
        {
            document.getElementById("mail").style.display = "block";
            document.forms["signup"]["email"].focus;
            document.getElementById("email").style.borderColor = "#d33f49";
            text="Please enter a valid email."
  }else
 {
    text="";
    document.getElementById("mail").style.display = "none";
    document.getElementById("email").style.borderColor = "";
    return true;
}
document.getElementById("mail").innerHTML = text;
document.getElementById("email").style.borderColor = "none";
return false;
}


/*password visibility
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }*/
   /* function pass(){
      var password=signup.psw.value;
      let isValid=true;
      let passwordStrengthPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (password === "") {
        document.getElementById('paswrd').innerText = "Password cannot be empty.";
        document.getElementById('paswrd').style.display = 'block';
        isValid = false;
    } else if (!passwordStrengthPattern.test(password)) {
            document.getElementById('paswrd').style.display = 'none';
            document.getElementById('error').innerText = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one special character, and one number.";
            document.getElementById('error').style.display = 'block';
            isValid = false;
        } else{
      document.getElementById('paswrd').style.display = "none";
      document.getElementById('error').style.display = "none";
      isValid= true;
     }
    return isValid;
    }


    function passrep() {
      let repeatedPassword = signup.pswrepeat.value; // The repeated password field
      let originalPassword = signup.psw.value;      // The original password field
      let isValid = true;
  
      // Reset error messages
      document.getElementById('paswrdrept').innerText = "";
      document.getElementById('paswrdrep').innerText = "";
      document.getElementById('paswrdrept').style.display = "none";
      document.getElementById('paswrdrep').style.display = "none";
  
      // Check if the repeated password is empty
      if (repeatedPassword === "") {
          document.getElementById('paswrdrept').innerText = "Field cannot be empty.";
          document.getElementById('paswrdrept').style.display = "block";
          isValid = false;
      }
      // Check if the passwords match
      else if (originalPassword !== repeatedPassword) {
          document.getElementById('paswrdrep').innerText = "Passwords do not match.";
          document.getElementById('paswrdrep').style.display = "block";
          isValid = false;
      }
  
      return isValid;
  }
function ok()
      {
        if(chk()&&pass()&&passrep())
          document.getElementById('nxtpg').click();
       else
            alert("Please enter valid details.");
      }*/
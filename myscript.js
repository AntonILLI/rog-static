function validate() {

  var x = document.getElementsByClassName("form-control");
  var a = [];

  for (var i = 0; i < x.length; i++) {

    var regex = new RegExp(x[i].name);
    var val = x[i].value;
    var res = regex.test(val);
    var ok;

    if (!res || !val) {
      x[i].style.borderColor = "red";
      ok = false;
    } else {
      x[i].style.borderColor = "lightgreen";
      a.push(x[i].id + " is validated")
      ok = true;
    }

  }

  var y = document.getElementById("tnc").checked;

  if (!y) {
    alert("You have to accept terms and conditions");
    ok = false;
  }
  /*
  *“Hi <user name> thanks for purchasing our product using 
  your  <type  of  credit  card>  credit  card  no. 
  <print only last 4 digits of the credit card and display all the preceding digits as xxxx >”.
  We will email you r receipt on <user’s email id> and send the product to <user’s address>. 
  */
  if (ok && a.length == 12) {
    var first_name = document.getElementById("firstName").value;
    var last_name = document.getElementById("lastName").value;

    var card_type = "";
    var ct = document.getElementById("amexpress").checked;

    if (ct == true) {
      card_type = "American Express";
    } else {
      ct = document.getElementById("mastcard").checked;
      if (ct == true) {
        card_type = "Master"
      } else
        card_type = "Visa";
    }

    var ccn = document.getElementById("cc-number").value;
    var cc_number = ccn % 10000;

    var em = document.getElementById("email").value;
    var email = em.toString();

    var num = document.getElementById("addressNumber").value;
    var street = document.getElementById("addressStreet").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zipCode").value;

    alert("Hi , " + first_name + " " + last_name + " ! You have just purchased our product using your " + card_type + " Card no. " +
      "xxxx-xxxx-xxxx-" + cc_number + ". We will email your reciept on " + email + " and send the product to: "
      + num + " , " + street + " , " + city + " , " + zip + ", New Zealand. Thank you!");

    window.open("file:///D:/ASPIRE2/TERM%202/STD621%20Internet%20Programming/Assessment/Assessment/index.html");

    this.close();

  } else {
    alert("Ooops! Incorrect or empty input");
  }

}
/*
* Validate contact form
*/
function validateForm() {

  var x = document.getElementsByClassName("form-control");
  var a = [];
  for (var i = 0; i < x.length; i++) {

    var regex = new RegExp(x[i].name);
    var val = x[i].value;
    var res = regex.test(val);
    var ok;

    if (!res || !val) {
      x[i].style.borderColor = "red";
      ok = false;
    } else {
      x[i].style.borderColor = "lightgreen";
      a.push(x[i].id + " is validated")
      ok = true;
    }
  }

  if (!ok || a.length < 5) {
    alert("Ooops! Incorrect or empty input");
  } else {
    alert("Your message has been sent. Thank you!");
    location.reload(true);
  }

}
/*
* Reset form
*/
function resetForm() {
  var x = document.getElementsByClassName("form-control");
  for (var i = 0; i < x.length; i++) {
    x[i].value = "";
    x[i].style.borderColor = "";
  }
}
/*
* Learn more button function
*/
var pics =
  [
    1001, 1002, 1003, 1004
  ];

function learn(num) {
  for (i = 0; i < pics.length; i++) {
    if (pics[i] == num) {
      var x = num.toString();
      window.open("pics/pur" + x + ".html");
      this.close;
    }
  }
}
/*
* Limit the choice of expiration month depending on current date
*/
function limit() {

  var d = new Date();
  var m = d.getMonth() + 1;
  var y = d.getFullYear();

  var ms = m.toString();
  var ys = y.toString();

  var x = document.getElementById("cc-expiration")

  if (m < 10) {
    x.min = ys + "-0" + ms;
  } else {
    x.min = ys + "-" + ms;
  }

}
/*
* Go to top button function
*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*
* jQuery for the icon
*/
$(document).ready(function () {
  $(".icon").hover(
    function () {
      $(this).attr("src", "logo active.png");
    },
    function () {
      $(this).attr("src", "logo.png")
    }
  )
});
/*
* jQuery based menu
*/
$(document).ready(function() {

  $('.bar').hover(function() {
    $(this).css('box-shadow', '0px 0px 30px 10px #FF0000')
  }, function(){
    $(this).css('box-shadow', 'none');
  });

  $('.bar').click(function() {
    location.replace(this.href);
    return false;
  });

})
/*
*	Animates navbar links to change color of background
*/
$('.nav-link').hover(
  function () {
    $(this).animate({
      backgroundColor: '#010101',
      color: '#FE0101'
    }, 'fast')
  },
  function () {
    $(this).animate({
      backgroundColor: '#343a40',
      color: '#ff6347'
    }, 'fast')
  });
/*
* Social media links
*/
$(document).ready(function () {
  $('.fa').click(function() {
    window.open(this.href, '_blank');
    return false;
  });
});


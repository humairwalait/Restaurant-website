
function validate() {
    var email = document.getElementById("text").value;
    var mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (mail.test(email)) {
      
      return true;
    } else {
      alert("Enter valid E-mail address");
      return false;
    }
  }

//   bt.addEventListener('dblclick', function() {
//     alert('Button double-clicked!');
// });

  // <---jquery focus n blur---------------------------------------------------------------------------------------->
$(document).ready(function(){
  $("input").focus(function(){
$(this).css({"color":"blue","background-color":"red"});
  });
  $("input").blur(function(){
$(this).css({"color":"black","background-color":"yellow"});
  });
});
// sp.addeventlistener('click' ,function(e){
// alert('hi')
// })
// let a =confirm("Do u want to exit")
// if (a) {
//   alert("Yes")
  
// }
// else{
//   alert("no")
// }
l



  // function changeColor(input) {
  //   input.style.backgroundColor = "lightgrey";
  // }
  
  // function resetColor(input) {
  //   if (input.value === "") {
  //     input.style.backgroundColor = "white";
  //   } else {
  //     input.style.backgroundColor = "lightgrey";
  //   }
  // }
  
  // document.addEventListener("click", function(event) {
  //   if (event.target.tagName === "INPUT") {
  //     changeColor(event.target);
  //   }
  // });
  
  // document.addEventListener("blur", function(event) {
  //   if (event.target.tagName === "INPUT") {
  //     resetColor(event.target);
  //   }
  // });
  
  // document.getElementById("submit").addEventListener("click", function() {
  //   resetColor(document.getElementById("text"));
  // });
  




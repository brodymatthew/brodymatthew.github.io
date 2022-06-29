var now = new Date();
var hh = now.getHours();
var mn = now.getMinutes();
var welcome;

if (hh >= 0) welcome="Good Morning lovely user";
if (hh > 11) welcome="Good Afternoon";
if (hh > 17) welcome="Good Evening";
alert(welcome);

if (hh <= 9) hh = "0" + hh;
if (mn <= 9) mn = "0" + mn;
document.forms.f.value = hh + ":" + mn;
window.setTimeout("tick()", 1000);

function getTodaysDate() {
 
 var now = new Date();
 var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
 var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
 var date = ((now.getDate() < 10) ? "0" : "") + now.getDate();

 var today = days[now.getDay()] + ", " +
  months[now.getMonth()] + " " +
  date + ", " +
  now.getFullYear();

 return (today);
}


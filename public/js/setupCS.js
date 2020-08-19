// walk the form
function formWalk() {
  var inputs = document.getElementsByTagName('input')
  var forms = document.getElementsByClassName('setupForm')
  var popup = document.getElementsByClassName('popups')
  var dbhost, dbname, dbuser, dbuserpass, admin, adminpass, type, ynitvpn, logopath;
  var step = 0
  if (step == 0) {forms[0].classList.add("activeFrom")};
  document.addEventListener('click', function (event) {
    if (!event.target.matches('#next')) return;
    if (step == 0 && inputs[0].value.length >= 9 && inputs[1].value.length > 0 && inputs[2].value.length > 0 && inputs[3].value.length > 0) {
      step++
      console.log(step);
      dbhost = inputs[0].value
      dbname = inputs[1].value
      dbuser = inputs[2].value
      dbuserpass = inputs[3].value
      forms[0].classList.remove("activeFrom")
      forms[1].classList.add("activeFrom")
      popup[0].classList.remove("active")
      popup[1].classList.add("active")
    }
    if (step == 1 && inputs[4].value.length > 5 && inputs[5].value.length) {
      step++
      console.log(step);
      chooseType()
      admin = inputs[4]
      adminpass = inputs[5]
      forms[1].classList.remove("activeFrom")
      forms[2].classList.add("activeFrom")
      popup[1].classList.remove("active")
      popup[2].classList.add("active")
    }
    if (step == 2 && inputs[6].checked == true || inputs[7].checked == true) {
      step++
      console.log(step);
      if (inputs[6].checked == true){type = 2}; //site2site
      if (inputs[7].checked == true){type = 1}; //sale
      nameChoice()
      forms[2].classList.remove("activeFrom")
      forms[3].classList.add("activeFrom")
      popup[2].classList.remove("active")
      popup[3].classList.add("active")
    }
    if (step == 3) {
      //pass data to server
    }
  }, false);
  // document.addEventListener('click', function (event) {
  //   if (!event.target.matches('input')) return;
  //
  // }, false);

}
formWalk();
//Choose the type of vpn
function chooseType() {
  var s2s = document.getElementById('site2site')
  var sales = document.getElementById('sales')
  var sslabel = document.getElementsByClassName('sslabel')
  document.addEventListener('click', function (event) {
    if (!event.target.matches('#sales')) return;
    s2s.checked = false;
    if (sales.checked == true) {
      sslabel[1].classList.add("selected");
      sslabel[0].classList.remove("selected");
    }else {
      sslabel[1].classList.remove("selected");
    }
  }, false);
  document.addEventListener('click', function (event) {
    if (!event.target.matches('#site2site')) return;
    sales.checked = false;
    if (s2s.checked == true) {
      sslabel[0].classList.add("selected");
      sslabel[1].classList.remove("selected");
    }
    else {
      sslabel[0].classList.remove("selected");
    }
  }, false);
}
// choose the name
function nameChoice() {
  const nameInput = document.getElementById('name');
  const nameOutput = document.getElementById('VPNName');
  const titleOutput = document.getElementById('tName')
  nameInput.addEventListener('input', updateValue);
  function updateValue(e) {
    if (nameInput.value.length < 1) {
      nameOutput.textContent = "YouNameItVPN"
      titleOutput.textContent = "YouNameItVPN | Setup";
    }else {
      nameOutput.textContent = e.target.value;
      titleOutput.textContent = e.target.value + " | Setup";
    }
  }
}

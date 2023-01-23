let buttn = document.getElementById("btn");
buttn.addEventListener("click", function (e) {
  let name1 = document.getElementById("name");
  let number1 = document.getElementById("number");
  let mm = document.getElementById("mm");
  let yy = document.getElementById("yy");
  let cvc = document.getElementById("cvc");

  // storing in local storage
  localStorage.setItem("cardNum", number1.value);
  localStorage.setItem("cardName", name1.value);
  localStorage.setItem("cardmm", mm.value);
  localStorage.setItem("cardyy", yy.value);
  localStorage.setItem("cardcvc", cvc.value);

  // first page card
  document.getElementById("card-number").innerHTML = number1.value;
  document.getElementById("card-name").innerHTML =name1.value;
  document.getElementById("mm/yy").innerHTML =mm.value+"/"+yy.value;
  document.getElementById("card-cvc").innerHTML =cvc.value;
        
  let corr_name=/^[A-Za-z]+$/;
  let name2=name1.value.replace(/\s/g,"");

  if(name1.value.length===0) {
    e.preventDefault();
    document.getElementById("name-error").innerHTML = "can't be empty";
    name1.classList.remove("border-purple-400")
    name1.classList.add("border-red-400");
  }
  else{
    if(!name2.match(corr_name))
    {
      e.preventDefault();
      document.getElementById("name-error").innerHTML = "Wrong format, alphabets only";
      name1.classList.remove("border-purple-400")
      name1.classList.add("border-red-400");
    }
    else{
      name1.classList.remove("border-red-400");
      name1.classList.add("border-purple-400");
      document.getElementById("name-error").innerHTML = "";
    }
  }

  let number2=number1.value.replace(/\s/g,"");
  if(number2 == "") {
    e.preventDefault();
    document.getElementById("num-error").innerHTML = "can't be empty";
    number1.classList.remove("border-purple-400");
    number1.classList.add("border-red-400");
  }
  else{
    if(isNaN(number2)) {
      e.preventDefault();
      document.getElementById("num-error").innerHTML = "Wrong format, numbers only";
      number1.classList.remove("border-purple-400");
      number1.classList.add("border-red-400");
    }else{
      number1.classList.remove("border-red-400");
      number1.classList.add("border-purple-400");
      document.getElementById("num-error").innerHTML = "";
    }
  }
  
  if(mm.value == "") {
    e.preventDefault();
    document.getElementById("mm-error").innerHTML = "can't be empty";
    mm.classList.remove("border-purple-400");
    mm.classList.add("border-red-400");
  }else{
    if(isNaN(mm.value)) {
      e.preventDefault();
      document.getElementById("mm-error").innerHTML = "Wrong format, numbers only";
      mm.classList.remove("border-purple-400");
      mm.classList.add("border-red-400");
    }else{
      mm.classList.remove("border-red-400");
      mm.classList.add("border-purple-400");
      document.getElementById("mm-error").innerHTML = "";
    }
  }

  if(yy.value == "") {
    e.preventDefault();
    document.getElementById("mm-error").innerHTML = "can't be empty";
    yy.classList.remove("border-purple-400");
    yy.classList.add("border-red-400");
  }else{
    if(isNaN(yy.value)) {
      e.preventDefault();
      document.getElementById("mm-error").innerHTML = "Wrong format, numbers only";
      yy.classList.remove("border-purple-400");
      yy.classList.add("border-red-400");
    }else{
      yy.classList.remove("border-red-400");
      yy.classList.add("border-purple-400");
      document.getElementById("mm-error").innerHTML = "";
    }
  }

  if(cvc.value == ""){
    e.preventDefault();
    document.getElementById("cvc-error").innerHTML = "can't be empty";
    cvc.classList.remove("border-purple-400");
    cvc.classList.add("border-red-400");
  }else{
    if(isNaN(cvc.value)) {
      e.preventDefault();
      document.getElementById("cvc-error").innerHTML = "Wrong format, numbers only";
      cvc.classList.remove("border-purple-400");
      cvc.classList.add("border-red-400");
    }else{
      cvc.classList.remove("border-red-400");
      cvc.classList.add("border-purple-400");
      document.getElementById("cvc-error").innerHTML = "";
    }
  }
 
});


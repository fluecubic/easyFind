//wechseln 
let eye = document.getElementById("eye")
let mode = "view"
let Crush = document.getElementById("Crush")


function changeMode() {
 if (mode == "view") {
  mode = "hide";
  Crush.type = "password";
  eye.src = "./Bilder/view.png";
} else{
  mode = "view";
  Crush.type = "text";
  eye.src = "./Bilder/hide.png";  
}  
}

eye.onclick = changeMode;

//registrieren
function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let Name = uppercaseFirst(document.getElementById("Name").value);
let Senden = document.getElementById("Senden");
let Ergebnis = document.getElementById("Ergebnis");
let Abgestimmt = document.getElementById("Abgestimmt");
let Abgestimmte = document.getElementById("Abgestimmte");
let numberofAbgestimmte = 0;

class person {
  name;
  crush;
}



function collectData() {
    numberofAbgestimmte++;
    eval(Name + " = new person();");
    eval(Name).name = Name;
    eval(Name).crush = uppercaseFirst(Crush.value);
    Abgestimmt.innerHTML = "Es haben abgestimmt(" + numberofAbgestimmte + "/25):"
    Abgestimmte.innerHTML += Name + ", "
}

function clear() {
  document.getElementById("Name").value = "";
  Crush.value = "";
}

function find() {
  try {
    if (eval(eval(Name).crush) && eval(eval(Name).crush).crush == Name )  {
      Ergebnis.innerHTML += Name + " + " +  eval(Name).crush + "<br>";
   }
  } catch (error) {
    console.log("Die andere Person hat noch nicht abgestimmt.")
  }
  
}

function submit() {
  Name = uppercaseFirst(document.getElementById("Name").value);
  Crush = document.getElementById("Crush");

  if (!Abgestimmte.innerHTML.includes(Name)) {
    collectData();
    find()
  }else{window.alert("Error: Name ist leer oder du hast schon abgestimmt.")}
  clear();
}

function submitbyenter(event) {
  alert("keypress")
  if (event.key == "Enter") {
    if (document.getElementById("Name").hasFocus()) {
      Crush.focus()
    } else {
      submit()
    }
    
  }
}

Senden.onclick = submit;
addEventListener("keydown", submitbyenter )
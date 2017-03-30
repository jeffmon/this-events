//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var targetName = document.getElementsByClassName("name");

for(var i = 0; targetName.length; i++){
  targetName[i].addEventListener("click", showMenu);
}

function showMenu(){
  var getMenu = this.querySelectorAll(".menu")[0];
  if(getMenu.style.display === "none"){
    getMenu.style.display = "block";
  }else{
    getMenu.style.display = "none";
  }
}
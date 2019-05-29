var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var darkenbtn = document.querySelector('#darken');
var hidebtn = document.querySelector('#hide')
var overlay = document.querySelector('.overlay');


/* Looping through images */

for(i=1;i<6;i++){
//   var xxx = "\images\pic"+i+".jpg";
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic"+i+".jpg");
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    var newPic = e.target.getAttribute('src');
    picClick(newPic);
  }
}


function picClick(newPic) {
  displayedImage.setAttribute('src', newPic);
}  

  /* Wiring up the Darken/Lighten button */

darkenbtn.onclick = function () {
//  console.log('darken button clicked');
  let btnClass = darkenbtn.getAttribute('class');
  if(btnClass === "dark"){
    darkenbtn.setAttribute('class', "light");
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";   
    darkenbtn.textContent = "Lighten";
  } else if (btnClass = "light"){
    darkenbtn.setAttribute('class', "dark");
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    darkenbtn.textContent = "Darken";    
  }
}

/* Hide everything */
hidebtn.onclick = function () {
//  console.log('hide button clicked');
  let btnClass = hidebtn.getAttribute('class');
  if(btnClass === 'hide'){
    hidebtn.setAttribute('class', 'unhide');
    hidebtn.textContent = "Unhide";
    displayedImage.setAttribute('class','toggle-hide');
    thumbBar.setAttribute('class','toggle-hide');
  } else if (btnClass = 'unhide'){
    hidebtn.setAttribute('class', 'hide');
    hidebtn.textContent = "Hide";
    displayedImage.setAttribute('class','full-img');
    thumbBar.setAttribute('class','thumb-bar');
    }
}

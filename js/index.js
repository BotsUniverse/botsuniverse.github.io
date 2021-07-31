const createPopup = (text="", color="green") => {

  var popup_message = String(text);
  var popup_color   = color || "green";

  // create popup close button element
  var closeBtn = document.createElement("button");
  closeBtn.innerHTML = "❌";
  closeBtn.onclick = (event) => { 
    event.target.parentNode.remove();
  }

  // create popup message element
  var popupText = document.createElement("div");
  popupText.innerHTML = popup_message;
  popupText.className = "popup-text";

  // create popup container element
  var popupContainer = document.createElement("div");
  popupContainer.className = "popup-container";
  popupContainer.style.backgroundColor = popup_color;

  // put the popup message, button in the popup container
  popupContainer.append(popupText);
  popupContainer.append(closeBtn);

  // put the popUp container in the body
  document.body.append(popupContainer);
}

setTimeout(
  ()=>{
    createPopup("Welcome to our beta site! This site is under constuctions 🚧 and might have some bugs 🐞 or errors 👾. Please feel free to check all of them.");
  },
  500
)
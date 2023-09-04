let medicationsLink = document.getElementById("medications-link");
let medicalEquipmentLink = document.getElementById("medical-equipment-link");
let headerElement = document.querySelector(".main-content-header");



medicationsLink.addEventListener("click", hideTitle)
medicalEquipmentLink.addEventListener("click", hideTitle)

function hideTitle(e){
    debugger
    if (e){
        headerElement.style.display = "none";
    }
}



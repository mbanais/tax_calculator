/**
 * @author Anaïs MB 
 * @file Tax calculator
 * @version 0.0.2
 */

const refAmount = document.getElementById("amount");
const refGetTotal = document.querySelector(".getTotal");
const refReinit = document.querySelector(".reinitialize");
const refProvincesList = document.getElementById("provinces");
const refResult = document.querySelector(".results__amount");
const refDisplay = document.querySelector(".resultDisplay");
let previousAmount = "";
let intTxFederal = 0.05;

/**
 * Calculating the taxes and the total amount
 */
function calculateTaxes(){
    let strId = refProvincesList.value.toLowerCase();
    let intAmount = parseFloat(refAmount.value);
    let intFedTax = intAmount * intTxFederal;
    let intProvTax = intAmount * objJSONProvinces[strId].rate;
    let intResultWithTaxes = intAmount + intFedTax + intProvTax;

    if(refAmount.value!="" || Number.isNaN(intResultWithTaxes)==false){
        document.querySelector(".results__province").innerText=objJSONProvinces[strId].fullname;
        document.querySelector(".results__amount").innerText = refAmount.value;
        document.querySelector(".provincial__percentage").innerText=objJSONProvinces[strId].provincial;
        document.querySelector(".federal__amount").innerText=":"+intFedTax.toFixed(2)+"$";
        document.querySelector(".provincial__amount").innerText=":"+intProvTax.toFixed(2) +"$";
        document.querySelector(".results__finalAmount").innerText = intResultWithTaxes.toFixed(2);
        showTaxes();
    }
}

/**
 * Reveal the result section 
 */
function showTaxes(){
    refDisplay.removeAttribute("hidden");
}

/**
 * Reinitialize all the fields
 */
function reinitialize(){
    refProvincesList.value="";
    refAmount.value="";
    refResult.innerText ="";
    document.querySelector(".results__province").innerText="";
    document.querySelector(".provincial__percentage").innerText ="";
    document.querySelector(".federal__amount").innerText="";
    document.querySelector(".provincial__amount").innerText="";
    refDisplay.setAttribute("hidden", "hidden")
}

refGetTotal.addEventListener("click", calculateTaxes)
refProvincesList.addEventListener("change", calculateTaxes)
refReinit.addEventListener("click", reinitialize)
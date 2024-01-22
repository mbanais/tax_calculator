/**
 * @author Anaïs Mannée-Batschy 
 * @file Tax calculator
 * @version 0.0.1
 */

const refAmount = document.querySelector(".amount");
const refTxProv = document.querySelector(".provincial");
const refTxFed = document.querySelector(".federal");
const refResult = document.querySelector(".result"); 
let intTxFederal = 0.05

/**
 * Calculate total with taxes
 */
function calculateTaxes(){
    const refSelectedInput = document.querySelector("[name=provinces]:checked");
    let strId = refSelectedInput.id;
    let intAmount = parseFloat(refAmount.value);
    let intFedTax = intAmount * intTxFederal;
    let intProvTax = intAmount * objJSONProvinces[strId].rate;
    let intResultWithTaxes = intAmount + intFedTax + intProvTax
    if(refAmount.value!="" || Number.isNaN(intResultWithTaxes)==false){
        document.querySelector(".federal__amount").innerText=":"+intFedTax.toFixed(2)+"$";
        document.querySelector(".provincial__amount").innerText=":"+intProvTax.toFixed(2) +"$";
        refResult.innerText = intResultWithTaxes.toFixed(2) +"$";
    }
    /*
    console.log("résultat non arrondi: "+ intResultWithTaxes)
    console.log(Number.isNaN(intResultWithTaxes))
    console.log("taxes fed  non arondies: "+ intFedTax)
    console.log("taxes prov non arrondies: "+ intProvTax)
    */
}

/**
 * Display total with taxes
 */
function showTaxes(){
    showSection()
    const refSelectedInput = document.querySelector("[name=provinces]:checked"); 
    let strId = refSelectedInput.id;
    objJSONProvinces[strId];
    refTxProv.innerText = objJSONProvinces[strId].provincial;    
}

/**
 * Show taxes section
 */
function showSection(){
    document.querySelector(".tax").classList.remove("cacher")
    //console.log(document.querySelector(".tax"))
}

/*document.querySelector(".radio").addEventListener("check", function(){
    showTaxes();
    calculateTaxes()
})*/

document.querySelector(".ctn_provinces").addEventListener("click", function(){
    showTaxes();
})
document.querySelector(".addTaxes").addEventListener("click", function(){
    calculateTaxes();
})
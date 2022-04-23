let no = document.getElementById('no')

let length = document.getElementById('result1')

let volume = document.getElementById('result2')

let mass = document.getElementById('result3')

//Function for converting the numbers
function converter(notoconvert){
    //alert(notoconvert)
    let feet =  (Math.round(notoconvert * 3.28084 *100)/100).toFixed(4)
    let meter = (Math.round(notoconvert * 0.3048)/100).toFixed(4)
    length.textContent = notoconvert + " meters = " + feet + " feets | " + notoconvert + " feets = " + meter + " meters"  
    
    let gallon = (Math.round(notoconvert * 0.2641722 *100)/100).toFixed(4)
    let liter = (Math.round(notoconvert * 3.785 *100)/100).toFixed(4)
    volume.textContent = notoconvert + " liters = " + gallon + " gallons | " + notoconvert + " gallons = " + liter + " liters"  
    
    let pound = (Math.round(notoconvert * 2.20462 *100)/100).toFixed(4)
    let kilo = (Math.round(notoconvert * 0.453592 *100)/100).toFixed(4)
    mass.textContent = notoconvert + " kilos = " + pound + " pounds | " + notoconvert + " pounds = " + kilo + " kilos"  
}

//Evenlistener Caller function
function convert(){
    let notoconvert = no.value

    if(notoconvert == "" || notoconvert == 0){
        converter(0)
    }else{
        converter(notoconvert)
        }
    }

converter(0)

no.addEventListener('input', convert)

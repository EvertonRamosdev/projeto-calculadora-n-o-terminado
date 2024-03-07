
const agir = document.querySelector("button")


function calculoImc() {

  const altura = document.querySelector(".caixa-altura").value
  const peso = document.querySelector(".caixa-peso").value
  const resultado = document.querySelector(".caixa")
  const numero = document.querySelector(".caixa1")
  let corpo=""

  const imc = ( peso / (altura* altura)).toFixed(2)
 

 if ( altura !== "" && peso !== "")
  {  if ( imc < 18.5 ) {
    corpo = "cuidado!. Você está abaixo do peso!"
  }
  
    else if ( imc >= 18.5 && imc <= 25){ 
      corpo=" Você está no peso ideal!"
   }
  
   else if ( imc >25 && imc <= 30){ 
    corpo="Cuidado. Você está com sobre peso!";
  }
  else if ( imc > 30 && imc <= 35){ 
    corpo=" cuidado!. Você está com obesidade moderada!";
  } 
  else if ( imc > 35 && imc >= 45){ 
    corpo=" cuidado!. Você está com obesidade severa!";
  }  
  numero.innerHTML= imc.replace(".", ",")
  resultado.innerHTML= corpo
   } 
   else {
    resultado.innerHTML = "Prencha todos os campos porfavor";
   }



    /*let corpo=" "

 const imc = ( peso / (altura* altura)).toFixed(2)

 else if( imc < 18.5 ) {
  corpo = "cuidado!. Você está abaixo do peso!"
}

  else if ( imc >= 18.5 && imc <= 25){ 
    corpo=" Você está no peso ideal!"
 }

 else if ( imc >25 && imc <= 30){ 
  corpo="Cuidado. Você está com sobre peso!";
}
else if ( imc > 30 && imc <= 35){ 
  corpo=" cuidado!. Você está com obesidade moderada!";
} 
else if ( imc > 35 && imc <= 45){ 
  corpo=" cuidado!. Você está com obesidade severa!";
}  
numero.innerHTML= imc.replace(".", ",")
resultado.innerHTML= corpo*/ 


}


agir.addEventListener("click" , calculoImc );



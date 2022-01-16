//capturo los datos que ingresamos 
document.getElementById("calcularimc").addEventListener("click", function calculo() {

    let sex = document.getElementById("selectSexo").value;
    let edad = document.getElementById("age").value;
    let peso = document.getElementById("weight").value;
    let estatura = document.getElementById("height").value;

//formula para cakcular el imc 
    let imc = (peso / (estatura ** 2));

    console.log(sex + ", edad " + edad + ", peso " + peso + ", estatura " + estatura + ", imc " + imc );
   

    if ((peso == "") || (estatura == "")) {
        alert("ingrese un peso y una estatura")
    }
    else if (imc < 18.5) {
        alert(`Tu Indice de masa es:  ${imc} Estás en Bajo peso`)
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        alert(`Tu Indice de masa es:   ${imc} Estás en Peso saludable`)
    }
    else if (imc >= 25 && imc <= 29.9) {
        alert(`Tu Indice de masa es: ${imc} Estás en: Sobrepeso`)
    }
    else if (imc >= 30 && imc <= 39.9) {
        alert(`Tu Indice de masa es: ${imc} Estás en: Obesidad`)}
   else if (imc > 40) {
      alert( `Tu Indice de masa es: ${imc} Estás en Obesidad extrema o de alto riesgo`)}

})
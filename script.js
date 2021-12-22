// Récupérer valeur de la div
let saisie = ""
let calc = []
const authorize = ["1", "2", "3", "4", "5"]
let calcul = ""
document.addEventListener("click", (d) => {
  // Récupérer et formater la saisie

  saisie = d.target.textContent;
  saisie = saisie.trim();
  console.log(saisie);
  // On evite d'ajouter le égale.. et on affiche le calcul
  if (saisie !== "=" && saisie !== "C"){
    calc.push(saisie);
    console.log(calc);
    calcul = calc.join('');
    console.log(calcul);
    document.querySelector(".calc_content").innerHTML = calcul;
    
  }
  
  // Vider la liste
  else if (saisie === "C"){
    calc = [];
    console.log(calc);
    document.querySelector(".calc_content").innerHTML = "";
  }
  // Effectuer le calcul
  else if (saisie === "="){
    console.log(calcul);
    console.log(eval(calcul));
    document.querySelector(".calc_content").innerHTML = "=" + eval(calcul);
    calc = [];
    calcul = "";
  }
  
  else{
    console.log("pass")
  }
  
})
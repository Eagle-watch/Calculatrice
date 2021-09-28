//function appuitouche(button) {
//   document.getElementById("ecran").innerHTML+=button
// }
//function resultats(button) {
//       ifdocument.getElementById("ecran").innerHTML 
//       else 
//   

let resultat = document.getElementById('resultat')
// On attrape la balise HTML qui à pour id resultat
function appuisTouche(num) 
//On ajoute le numéro num dans la balise HTML qui a pour id résultat
{
    resultat.innerHTML += num
}
function appuisSymbole(sym) 
//On récupère la position des symboles +-*/ dans la balise HTML résultat, 
//si la fonction répond -1 la balise résultat ne contient pas le symbole
{
    let pExiste = resultat.innerHTML.indexOf('+')
    let mExiste = resultat.innerHTML.indexOf('-')
    let fExiste = resultat.innerHTML.indexOf('X')
    let dExiste = resultat.innerHTML.indexOf('/')
 //on test si aucun des 4 symboles n'existe dans le résultat
    if (pExiste == -1 && mExiste == -1 && fExiste == -1 && dExiste == -1) {
        resultat.innerHTML += sym
    }
}
//On vide la balise résultat
function appuisClear() {
    resultat.innerHTML = ""
} 
let egal = document.getElementById('resultat').innerHTML

function egal(egal) {

    let pExiste = resultat.innerHTML.indexOf('+')
    let mExiste = resultat.innerHTML.indexOf('-')
    let fExiste = resultat.innerHTML.indexOf('X')
    let dExiste = resultat.innerHTML.indexOf('/')
}
if (pExiste == +1 && mExiste == -1 && fExiste == +1 && dExiste == +1)
{
    let pExiste = resultat.split('+')
    let mExiste = resultat.split('-')
    let fExiste = resultat.split('*')
    let dExiste = resultat.split('/')
}






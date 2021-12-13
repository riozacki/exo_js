/*---------------------------------------------------------
                        Variables
-----------------------------------------------------------*/
let newCard = 0;
let tourJ = 0;
let tourB = 0;
let valueC = 0;
let nomC = 0;
let scoreJ = 0;
let scoreB = 0;

//variables -> composants html
const h2 = getElementsById("scoreJoueur");
const h3 = getElementsById("scoreBanque");
const boutonJ = getElementsById("btJ");  
const boutonB = getElementsById("btB");
const boutonR = getElementsById("btR")



/*---------------------------------------------------------
                    jeux de cartes
-----------------------------------------------------------*/
//cartes de coeur
let asCoeur = [11, 'as de coeur'];
let deuxCoeur = [2, '2 de coeur'];
let troisCoeur = [3, '3 de coeur'];
let quatreCoeur = [4, '4 de coeur'];
let cinqCoeur = [5, '5 de coeur'];
let sixCoeur = [6, '6 de coeur'];
let septCoeur = [7, '7 de coeur'];
let huitCoeur = [8, '8 de coeur'];
let neufCoeur = [9, '9 de coeur'];
let dixCoeur = [10, '10 de coeur'];
let valetCoeur = [10, 'valet de coeur'];
let dameCoeur = [10, 'dame de coeur'];
let roiCoeur = [10, 'roi de coeur'];

//cartes de trèfle
let asTrefle = [11, 'as de trèfle'];
let deuxTrefle = [2, '2 de trèfle'];
let troisTrefle = [3, '3 de trèfle'];
let quatreTrefle = [4, '4 de trèfle'];
let cinqTrefle = [5, '5 de trèfle'];
let sixTrefle = [6, '6 de trèfle'];
let septTrefle = [7, '7 de trèfle'];
let huitTrefle = [8, '8 de trèfle'];
let neufTrefle = [9, '9 de trèfle'];
let dixTrefle = [10, '10 de trèfle'];
let valetTrefle = [10, 'valet de trèfle'];
let dameTrefle = [10, 'dame de trèfle'];
let roiTrefle = [10, 'roi de trèfle'];

//cartes de carreau
let asCarreau = [11, 'as de carreau']; 
let deuxCarreau = [2, '2 de carreau'];
let troisCarreau = [3, '3 de carreau'];
let quatreCarreau = [4, '4 de carreau'];
let cinqCarreau = [5, '5 de carreau'];
let sixCarreau = [6, '6 de carreau'];
let septCarreau = [7, '7 de carreau'];
let huitCarreau = [8, '8 de carreau'];
let neufCarreau = [9, '9 de carreau'];
let dixCarreau = [10, '10 de carreau'];
let valetCarreau = [10, 'valet de carreau'];
let dameCarreau = [10, 'dame de carreau'];
let roiCarreau = [10, 'roi de carreau'];

//cartes de pique
let asPique = [11, 'as de pique'];
let deuxPique = [2, '2 de pique'];
let troisPique = [3, '3 de pique'];
let quatrePique = [4, '4 de pique'];
let cinqPique = [5, '5 de pique'];
let sixPique = [6, '6 de pique'];
let septPique = [7, '7 de pique'];
let huitPique = [8, '8 de pique'];
let neufPique = [9, '9 de pique'];
let dixPique = [10, '10 de pique'];
let valetPique = [10, 'valet de pique'];
let damePique = [10, 'dame de pique'];
let roiPique = [10, 'roi de pique'];

//jeux de cartes complet
let jeux = [asCoeur, deuxCoeur, troisCoeur, quatreCoeur, cinqCoeur, sixCoeur, 
septCoeur, huitCoeur, neufCoeur, dixCoeur, valetCoeur, dameCoeur, roiCoeur, 
asTrefle, deuxTrefle, troisTrefle, quatreTrefle, cinqTrefle, sixTrefle, 
septTrefle, huitTrefle, neufTrefle, dixTrefle, valetTrefle, dameTrefle, roiTrefle,  
asCarreau, deuxCarreau, troisCarreau, quatreCarreau, cinqCarreau, sixCarreau, 
septCarreau, huitCarreau, neufCarreau, dixCarreau, valetCarreau, dameCarreau, roiCarreau, 
asPique, deuxPique, troisPique, quatrePique, cinqPique, sixPique, septPique,
huitPique, neufPique, dixPique, valetPique, damePique, roiPique];

/*---------------------------------------------------------
                        Fonctions
-----------------------------------------------------------*/

//fontion qui retourne un nombre entre 0 et 51
function melange() {
    let mel = Math.floor(Math.random() * jeux.length-1);
    return mel;
}
console.log(mel);

//fonction lancer carte joueur
function lancerCarteJ () {
    const c = melange(); 
    //Vérifier doublon
    for(let i=0; i<newCard.length; i++ ) {
        if(c == newCard[i]) {
            c = melange();
            i=0;
        }
    }
    newCard.push(c);
    let carte = jeux[c];
    scoreJ += carte[0];
    return carte;
}

//fonction lancer carte banque
function lancerCarteB () {
    const c = melange(); 
    //Vérifier doublon
    for(let i=0; i<newCard.length; i++ ) {
        if(c == newCard[i]) {
            c = melange();
            i=0;
        }
    }
    newCard.push(c);
    scoreB += jeux[c][0];
}

//fonction reset de l'interface


/*---------------------------------------------------------
                    Ecouteurs d'évènements
-----------------------------------------------------------*/

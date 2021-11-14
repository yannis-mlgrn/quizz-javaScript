// initialisation des variables necessaire au fonctionnement du script 
var nombreQuestion = 1 ;
var bonneReponse = 0 ;
var mauvaiseReponse = 0
var score = 0 ;


// questions regroupés dans un tableau 
listeQuestions = [
    {
        question : "0001 en binaire représente en base de 10 :",
        rep1 : '8' ,
        rep2 : '4',
        rep3 : '2',
        rep4 : '1',
        reponse : 'rep4'
    },
    {
        question : " Quel est le type de l'expression : <code> 10 + 3 * 5 </code> ?",
        rep1 : 'int' ,
        rep2 : 'bool',
        rep3 : 'str',
        rep4 : 'float',
        reponse : 'rep1'
    },
    {
        question : " Combien de bits sont nécessaires pour représenter 15 en binaire ?",
        rep1 : '2' ,
        rep2 : '3',
        rep3 : '4',
        rep4 : '5',
        reponse : 'rep4'
    },
    {
        question : "Quel est la plage des valeurs entières ( positifs ou négatifs ) que l'on peut coder sur un octet en complément a 2 ?",
        rep1 : '-127 à 128' ,
        rep2 : '-128 à 127',
        rep3 : '-255 à 128',
        rep4 : '-256 à 127',
        reponse : 'rep2'
    },
    {
        question : "le code suivant <code> a = '5' + '4' </code> assigne à la variable a :  ",
        rep1 : '9' ,
        rep2 : '10',
        rep3 : '54',
        rep4 : '45',
        reponse : 'rep3'
    },
    {
        question : "hexadécimal correspond à la ",
        rep1 : 'base 2 ' ,
        rep2 : 'base 4',
        rep3 : 'base 8',
        rep4 : 'base 16',
        reponse : 'rep4'
    },
    {
        question : "Quel language de programation est un language de balisage",
        rep1 : 'css' ,
        rep2 : 'javaScript',
        rep3 : 'html',
        rep4 : 'python',
        reponse : 'rep3'
    },
    {
        question : "En html, l'attribut 'alt' d'une image est ",
        rep1 : 'facultatif' ,
        rep2 : 'obligatoire',
        rep3 : '',
        rep4 : '',
        reponse : 'rep1'
    },
    {
        question : "Que signifie WWW ?",
        rep1 : 'Web Web Woman' ,
        rep2 : 'Word Wide Web',
        rep3 : 'Web Wanadoo Web',
        rep4 : 'world wide web',
        reponse : 'rep4'
    },
    {
        question : "Que signifie HTML ?",
        rep1 : ' Hypertext Mega Lang' ,
        rep2 : 'Hypertext Markup Language',
        rep3 : 'Hypertext Make Language',
        rep4 : 'Hyper Mark Language',
        reponse : 'rep2'
    },
    {
        question : "Quel est l'extension d'un fichier javaScript",
        rep1 : '.js' ,
        rep2 : '.html',
        rep3 : '.css',
        rep4 : '.txt',
        reponse : 'rep1'
    },
    {
        question : "Quel nombre décimal correspond à 00001111 en base2",
        rep1 : '14' ,
        rep2 : '15',
        rep3 : '16',
        rep4 : '128',
        reponse : 'rep2'
    },
    {
        question : "L'entier positif 255 se représente en héxadécimal (base 16) par :",
        rep1 : '99' ,
        rep2 : 'AA',
        rep3 : 'CC',
        rep4 : 'FF',
        reponse : 'rep4'
    },
    {
        question : "Quelle est la séquence de bit qui représente -25 en complément à 2 sur 8 bits ?",
        rep1 : '0001 1001' ,
        rep2 : '0001 1010',
        rep3 : '1110 0110',
        rep4 : '1110 0111',
        reponse : 'rep4'
    },
    {
        question : "Combien de valeurs entières positives ou nulles un octet peut représenter ? ",
        rep1 : '8' ,
        rep2 : '2',
        rep3 : '256',
        rep4 : '128',
        reponse : 'rep3'
    },


    
        
];

 // chargement des balises des options a manipuler en javaScript
let nbrQuestion = document.querySelector('#nbrQuestion');
let scoreHtml = document.querySelector('#scoreText');

let questionText = document.querySelector('#questionText');
let rep1 = document.querySelector('#rep1-label');
let rep2 = document.querySelector('#rep2-label');
let rep3 = document.querySelector('#rep3-label');
let rep4 = document.querySelector('#rep4-label');

function displayNextQuestion() {  // fonction permettant de sélectionner les questions 
   
    // tant que le joueur n'est pas arrivé à lne finit pas le quiz ( les 10 questions )
    if (nombreQuestion <= 10){
        const random = listeQuestions[Math.floor(Math.random() * listeQuestions.length)] // choisir une question entre toute ceux entrées
        question = random
        // supprimer la question selectionnée pour ne plus pouvoir l'avoir durant le jeux
        var index = listeQuestions.indexOf(question);
        if (index > -1) {
        listeQuestions.splice(index, 1);
        }
        // affichage du contenu de la question et de ses options 
        nbrQuestion.innerHTML = nombreQuestion ;
        questionText.innerHTML = question.question ;
        scoreHtml.innerHTML = score ;
        rep1.innerHTML = question.rep1 ; 
        rep2.innerHTML = question.rep2 ; 
        rep3.innerHTML = question.rep3 ; 
        rep4.innerHTML = question.rep4; 
    }else{
        // apres 0.5s afficher la popup avec les résultats
        setTimeout(function () {
            const pourcentage = (score / 10) * 100 // calcul du pourcentage de réussite
            document.getElementById('pourcentageReussiteHTML').innerHTML = pourcentage
            document.getElementById('MauvaiseRepPopup').innerHTML = mauvaiseReponse
            document.getElementById('bonneRepPopup').innerHTML = bonneReponse
            document.getElementById('popupFinId').style.display = "flex"
        }, 500); // temps en ms 
    }
}

// fonction pour vérifier si l'option sélectionnée est la bonne ou pas 
function verification(question){ 
    // on récupère les options dans le html
    const options = document.getElementsByName("option");
    const bonneReponseActuelle = question.reponse; // la bonne réponse est celle de la question sélectionnée dans la liste
    let bonneOption = null // on initialise la bonne réponse 
    
    options.forEach((option) => { // parcours de toute les options qui ont l'id "option"
        if (option.value === bonneReponseActuelle) { // si une des options dans le html a la même valeur que la bonne réponse de la question sélectionnée
            bonneOption = option.labels[0].id ; // on récupère l'id de la bonne option 
            // cette boucle va servir a déterminer quelle option est la bonne dans le html et donc pouvoir la manipuler ( mettre le background en vert )
        }
    })

    options.forEach((option) => { // on parcours encore une fois toutes les options

        // si l'option est sélectionnnée par le joueur et que elle correspond à la bonne réponse de la question 
        if (option.checked === true && option.value === bonneReponseActuelle) {
            reponseSelectionner = option.labels[0].id ; // récupère l'id de la question selectionnée
            document.getElementById(bonneOption).style.backgroundColor = "green" ; // on met le background de l'option en vert 
            // on ajoute 1 au score , au nombre de questions et aux bonnes réponses
            score++
            nombreQuestion++
            bonneReponse++
            displayNextQuestion();// passage à la question suivante 
        
        // sinon en cas de mauvaise réponse ( si la veleur de l'option sélectionnée n'est pas la même que la réponse à la question )
        }if(option.checked === true && option.value != bonneReponseActuelle){
            reponseSelectionner = option.labels[0].id ;  // récupère l'id de la question selectionnée
            // mettre le background de la bonnne option en vert et celle sélectionnée en rouge 
            document.getElementById(bonneOption).style.backgroundColor = "green" ;
            document.getElementById(reponseSelectionner).style.backgroundColor = "red" ;
            // on ajoute 1 au nombre de questions et aux bonnes réponses
            nombreQuestion++
            mauvaiseReponse++
            displayNextQuestion(); // passage à la question suivante 
       }
    })
    
    // reset du background des options AVANT de passer à la suivante 
    setTimeout(function () {
        document.getElementById(bonneOption).style.backgroundColor = "" ; 
        document.getElementById(reponseSelectionner).style.backgroundColor = "" ;
    }, 2000);
}

// lancement du jeux 
displayNextQuestion();


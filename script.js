var nombreQuestion = 1 ;
var bonneReponse = 0 ;
var mauvaiseReponse = 0
var score = 0 ;
var questionsChoisis = [] ;

// format = [ "bonne réponse" , "question" , "rep1" , "rep2" , "rep3" , "rep4"]
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

    
        
];
 // chargement des balises a manipuler en javaScript
let nbrQuestion = document.querySelector('#nbrQuestion');
let scoreHtml = document.querySelector('#scoreText');

let questionText = document.querySelector('#questionText');
let rep1 = document.querySelector('#rep1-label');
let rep2 = document.querySelector('#rep2-label');
let rep3 = document.querySelector('#rep3-label');
let rep4 = document.querySelector('#rep4-label');

function quiz() {  // fonction permettant de sélectionner les questions 
    const random = listeQuestions[Math.floor(Math.random() * listeQuestions.length)] // choisir une question entre toute ceux entrées
    question = random
    var index = listeQuestions.indexOf(question);
    if (index > -1) {
      listeQuestions.splice(index, 1);
    }
    nbrQuestion.innerHTML = nombreQuestion ;
    questionText.innerHTML = question.question ;
    scoreHtml.innerHTML = score ;
    rep1.innerHTML = question.rep1 ; 
    rep2.innerHTML = question.rep2 ; 
    rep3.innerHTML = question.rep3 ; 
    rep4.innerHTML = question.rep4; 

}

function verification(question){
    const options = document.getElementsByName("option");
    const bonneReponseActuelle = question.reponse;
    let correctOption = null
    options.forEach((option) => {
        if (option.value === bonneReponseActuelle) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id ;
        }
    })
    options.forEach((option) => {

        if (option.checked === true && option.value === bonneReponseActuelle) {
            document.getElementById(correctOption).style.backgroundColor = "green" ;
            score++
            nombreQuestion++
        }if(option.checked === true && option.value != bonneReponseActuelle){
            reponseSelectionner = option.labels[0].id ;
            document.getElementById(correctOption).style.backgroundColor = "green" ;
            document.getElementById(reponseSelectionner).style.backgroundColor = "red" ;
            nombreQuestion++
       }
    })

    setTimeout(function () {
        document.getElementById(correctOption).style.backgroundColor = "" ;
        document.getElementById(reponseSelectionner).style.backgroundColor = "" ;
    }, 2000);
}

while(nombreQuestion <= 10){
    quiz();
}

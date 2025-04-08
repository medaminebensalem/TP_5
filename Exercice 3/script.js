const question = [
    ["Quelle est la capitale du maroc ?", "rabat"],
    ["Quelle est la langue officielle du Maroc ? ", "Arabe"],
    ["Quelle monnaie est utilisée au Maroc ? ?", "Dirham"],
    ["Quel est le nom du roi actuel du Maroc ?", "Mohammed VI"],
    ["Quel est le plus haut sommet du Maroc ?", "Toubkal"],
];
function lancerQuiz() {
    let score = 0;

    for (let i = 0; i < question.length; i++) {
        let reponseUtilisateur = prompt(question[i][0]);
        
        if (reponseUtilisateur=== question[i][1]) {
            alert("Réponse juste !");
            score++;
        } else {
            alert("Réponse fausse.");
        }
    }
    
    alert(`Vous avez répondu correctement à ${score} question sur ${question.length}.`);
}

lancerQuiz();

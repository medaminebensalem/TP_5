
    let num_const = Math.floor(Math.random() * 10) + 1;
    let score = 0;
    let num_entrer = 0;

    while (num_entrer !== num_const) {
        num_entrer = parseInt(prompt("Devinez un nombre entre 1 et 10 :"), 10);
        score++;

        if (num_entrer < num_const) {
            alert("Le nombre est plus grand.");
        } else if (num_entrer > num_const) {
            alert("Le nombre est plus petit.");
        } else {
            alert("Bravo ! Vous avez trouvé le nombre en ${score} tentatives.");
        }
    }




$(document).ready(function () {
    let grilleSalaire = {};

    // Fonction pour traiter les données CSV
    function traiterDonneesCSV(donnees) {
        const lignes = donnees.split("\n");
        const premiereLigne = lignes[0].split(";");
        const nombreColonnes = premiereLigne.length;
        const selectBC = document.getElementById("bc");

        for (let i = 0; i < nombreColonnes; i++) {
            const colonneNom = premiereLigne[i].replace(/"/g, "");
            grilleSalaire[colonneNom] = {};

            if (i !== 0) {
                const option = document.createElement("option");
                option.text = colonneNom;
                selectBC.add(option);
            }
        }

        const selectEchelon = document.getElementById("echelon");

        for (let i = 1; i < lignes.length; i++) {
            const colonnes = lignes[i].split(";");
            const colonneNom = colonnes[0].replace(/"/g, "");

            for (let j = 1; j < colonnes.length; j++) {
                const ligneNom = premiereLigne[j].replace(/"/g, "");
                const valeur = colonnes[j].replace(/"/g, "");
                grilleSalaire[ligneNom][colonneNom] = valeur;
            }

            const option = document.createElement("option");
            option.text = colonneNom;
            selectEchelon.add(option);
        }

        console.log(grilleSalaire);
    }

    // Lire le fichier CSV
    function lireFichierCSV() {
        const fichier = "grille_salaire.csv";

        fetch(fichier)
            .then(response => response.text())
            .then(traiterDonneesCSV)
            .catch(error => {
                console.error("Erreur lors de la lecture du fichier :", error);
            });
    }

    // Recherche du prix par minute
    function searchPrixMinute(bc, echelon) {
        return parseFloat(grilleSalaire[bc][echelon].split(",").join("."));
    }

    lireFichierCSV();

    $("#button_ts").click(function () {
        const minutes = parseInt($("#minute").val());
        const bc = $("#bc").val();
        const echelon = $("#echelon").val();
        const prix_minute = searchPrixMinute(bc, echelon);

        if (isNaN(minutes) || !prix_minute) {
            $("#error").removeClass('hidden')
            $("#resultat").addClass('hidden')

            if (isNaN(minutes)) {
                $("#error").html(
                    "Veuillez entrer un nombre valide sans virgule ni point"
                );
            } else {
                $("#error").html(
                    `Désolé, BC ${bc} avec échelon ${echelon} n'existe pas`
                );
            }
        } else {
            $("#error").addClass('hidden')
            $("#resultat").removeClass('hidden')
            $("#resultat").html(
                `Pour <span>${minutes}</span> minutes, vous percevrez <span>${calcul_ts(minutes, prix_minute)}</span> euros`
            );
        }
    });

    function calcul_ts(minutes, prix_minute) {
        console.log("Prix par minute: ", prix_minute)
        return Math.round((minutes * prix_minute) * 100) / 100;
    }
});

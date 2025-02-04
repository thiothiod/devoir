let clients = [
    { nom: "Dieng", prenom: "Awa", telephone: "778990099", email: "awadieng@gmail.com", adresse: "Parcelle", categorie: "Solvable" },
    { nom: "Fall", prenom: "Modou", telephone: "776664455", email: "Fall@gmail.com", adresse: "Mamelle", categorie: "Nouveau" },
    { nom: "Diop", prenom: "Sophie", telephone: "772238899", email: "diop@example.com", adresse: "Mariste", categorie: "Fidèle" },
];

// Affichage initial des clients
function afficherClients(clientsAffiches) {
    let tbody = document.getElementById("listeClients");
    tbody.innerHTML = "";

    clientsAffiches.forEach((client, index) => {
        let row = `<tr>
            <td>${client.nom}</td>
            <td>${client.prenom}</td>
            <td>${client.telephone}</td>
            <td>${client.email}</td>
            <td>${client.adresse}</td>
            <td><span class="badge bg-${getBadgeColor(client.categorie)}">${client.categorie}</span></td>
            <td><button class="btn btn-danger btn-sm" onclick="supprimerClient(${index})">Supprimer</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Fonction pour déterminer la couleur du badge
function getBadgeColor(categorie) {
    switch (categorie) {
        case "Nouveau": return "primary";
        case "Solvable": return "success";
        case "Non Solvable": return "danger";
        case "Fidèle": return "warning";
        default: return "secondary";
    }
}

// Ajouter un client
function ajouterClient() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let telephone = document.getElementById("telephone").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    let categorie = document.getElementById("categorie").value;

    if (nom && prenom && telephone && email && adresse) {
        clients.push({ nom, prenom, telephone, email, adresse, categorie });
        afficherClients(clients);
        document.getElementById("nom").value = "";
        document.getElementById("prenom").value = "";
        document.getElementById("telephone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("adresse").value = "";
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}

// Supprimer un client
function supprimerClient(index) {
    clients.splice(index, 1);
    afficherClients(clients);
}

// Filtrer les clients par catégorie et recherche
function filtrerClients() {
    let categorieChoisie = document.getElementById("filtreCategorie").value;
    let rechercheTexte = document.getElementById("recherche").value.toLowerCase();

    let clientsFiltres = clients.filter(client => 
        (categorieChoisie === "Tous" || client.categorie === categorieChoisie) &&
        (client.nom.toLowerCase().includes(rechercheTexte) || client.prenom.toLowerCase().includes(rechercheTexte))
    );

    afficherClients(clientsFiltres);
}

// Afficher tous les clients au chargement
afficherClients(clients);

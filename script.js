function remplir() {
    temp = `
            <tr>
            <td class="numC  bg-primary text-white text-center align-middle">${num.value}</td>
            <td class="nomC  bg-warning text-dark text-center align-middle">${nom.value}</td>
            <td class="prenomC  bg-secondary text-white text-center align-middle">${prenom.value}</td>
            <td class="salaireC  bg-info text-white text-center align-middle">${salaire.value}</td>
            <td class="text-center"><input class="btn btn-outline-danger" onclick='sup(this)' type="button" value="supprimer"></td>
            <td class="text-center"><input class="btn btn-outline-success" type="button" onclick='modif(this)' value="modifier"></td>
            </tr>
        `
    tb2.innerHTML+=temp;
}

function sup(btn) {
    btn.parentNode.parentNode.remove();
}

function modif(btn) {
    let row = btn.parentNode.parentNode;
    
    let numC = row.querySelector(".numC");
    let nomC = row.querySelector(".nomC");
    let prenomC = row.querySelector(".prenomC");
    let salaireC = row.querySelector(".salaireC");

    numC.textContent = prompt('Entre le num');
    nomC.textContent = prompt('Entre le nom');
    prenomC.textContent = prompt('Entre le prénom');
    salaireC.textContent = prompt('Entre le salaire');
}

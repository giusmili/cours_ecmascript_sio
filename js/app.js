document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let date = document.querySelector("time");
    date.innerText += new Date().getFullYear();
    date.setAttribute("datatime", new Date().getFullYear());
   

    console.log(date);
    console.log("Hello world");
    let x = Number(0);
    let y = 1;
    let vide;
    let message = String("Hello World");

    console.log(message.length);
    const bool = true;
    const faux = false;
    console.log(typeof x);
    let nom, prenom, ville;
    ville = "Paris";
    nom == undefined ? console.log("Error") : false;

    console.log(nom);
    const table = [nom, "css", "js", true];
    table.push(ville); //ajouter un élément dans un tableau
    console.log(table.length);
    console.table(table);
    console.dir(table);
    let i;
    for (i = 0; i < table.length; i++) {
        console.log(i + " " + table[i] + "\n");
    }
});
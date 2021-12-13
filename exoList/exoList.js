const userlist = [
    {id: 1, prenom: "Aurélien", age: 35, role: "Admin"},
    {id: 1, prenom: "Simon", age: 34, role: "User"},
    {id: 1, prenom: "Nico", age: 36, role: "User"},
    {id: 1, prenom: "Snake", age: 40, role: "User"},
];

// création d'un variable pour récupérer la div html
let list = document.getElementById("userlist");
// je parcours le tableau userlist avec une boucle
for (let i = 0; i<userlist.length; i++){
    // je crée une variable à chaque tour de boucle 
    // qui sera un nouvel element html ol (liste ordonnée)
    let newOl = document.createElement("ol");
    if (userlist[i].role == "Admin")
        {newOl.style.color = "red"} 
    else 
        {newOl.style.color = "blue"};

    // j'ajoute le text à l'élément crée avec un template string
    newOl.textContent = 
        `ID: ${userlist[i].id};
        Prénom: ${userlist[i].prenom};
        Age: ${userlist[i].age};
        Role: ${userlist[i].role}`;

    const btn = document.createElement("BUTTON")
    const txt = document.createTextNode("Supprimez")
    btn.appendChild(txt);
    document.body.appendChild(btn); 
    btn.addEventListener('click', (e) => {newOl.style.display = "none"; btn.style.display = "none"});
    list.appendChild(newOl); 
    newOl.appendChild(btn);     
    }    
    
    //const form = document.getElementById("form1")
    function getForm(){
        const bt01 = document.getElementById("bt1").value;
        const bt02 = document.getElementById("bt2").value;
        const bt03 = document.getElementById("bt3").value;
        const getT = bt01 + bt02 + bt03;
        userlist.push = {"prenom":bt01,"age": bt02,"role": bt03};  

        console.log(userlist);
    }
    getForm();
    
    console.log(userlist);





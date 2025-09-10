// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let names = [];

/*Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".*/
/*Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.*/

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addFriend();
    }
});

function addFriend() {
    let friendName = document.getElementById("amigo").value;

    if (friendName === "") {
        alert("Por favor ingresa un nombre válido");
    }   else {
        names.push(friendName);
        document.getElementById("amigo").value = "";
        console.log(names);
        
        displayNames()
    }
}

/*Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.*/

function displayNames() {
    const listElement = document.getElementById("listaAmigos");
    listElement.innerHTML = "";
    names.forEach(function(name) {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        listElement.appendChild(listItem);
    });
    console.log("foreach",names);
}

/*Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/


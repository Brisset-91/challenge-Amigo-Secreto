/*Lista de nombres: Crear una lista vacía para almacenar los nombres de los amigos.*/
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
}

/*Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

function pickFriend() {
    if (names.length < 2) {
        alert("Por favor ingresa al menos dos nombres para realizar el sorteo");
        return;
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedFriend = names[randomIndex];
    document.getElementById("resultado").innerHTML = `<li>Tu amigo secreto es:${selectedFriend}</li>`;

    /*Reiniciar lista: Después de realizar el sorteo, la lista de nombres se vaciará automáticamente para permitir un nuevo sorteo.*/
    
    names = [];
    displayNames()
}


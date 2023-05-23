// Define una variable para almacenar el historial de operaciones
let history = [];

// Obtén una referencia al elemento <ul> en el HTML
const historyList = document.getElementById('history-list');

// Agrega un evento de clic al botón "=" para almacenar la operación y mostrar el historial
document.querySelector('.equals').addEventListener('click', () => {
    
   
const resultElement = document.querySelector('.result span');
    
   
const operation = resultElement.textContent;
    
   
const result = eval(operation); // Evalúa la operación para obtener el resultado

    

   


// Almacena la operación en el historial
    history.
   
push(`${firstValue} = ${result}`);

    

   


// Limpia el historial anterior
    historyList.
   
innerHTML = '';

    

   


// Agrega cada operación al historial como un elemento de lista
    history.
   
forEach((item) => {
        
       
const listItem = document.createElement('li');
        listItem.textContent = item;
        historyList.
       
appendChild(listItem);
    });

    
    });


   
// Limpia la pantalla de resultado
    resultElement.
   
textContent = '0';
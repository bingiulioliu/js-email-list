'use strict';

const API_URL_RANDOM_MAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';

const mailListHtmlEl = document.querySelector('#list-container');
const fetchBtnHtmlEl = document.querySelector('#fetch-btn');

// Codice ridondanta, posso toglierlo ed eseguire direttamente la funzione
// reFetch(); Si esegue all'avvio
/*
for (let i=0; i<10; i++){
    fetch(API_URL_RANDOM_MAIL)
        .then((risposta)=>{
            return risposta.json()
        })
        .then ((jsonData)=>{
            //console.log(jsonData);
            // Variabile di supporto
            const mail = jsonData.response;
            // Ad ogni ciclo mi aggiunge una mail 
            mailListHtmlEl.innerHTML += `<li> ${mail} </li>`;
        })
    }
console.log(mailListHtmlEl);
*/

// Funzione dove libero la lista e ripeto il fetch
function reFetch () {
    mailListHtmlEl.innerHTML = '';
    for (let i=0; i<10; i++){
        fetch(API_URL_RANDOM_MAIL)
            .then((risposta)=>{
                return risposta.json()
            })
            .then ((jsonData)=>{
                //console.log(jsonData);
                // Variabile di supporto
                const mail = jsonData.response;
                // Ad ogni ciclo mi aggiunge una mail 
                mailListHtmlEl.innerHTML += `<li> ${mail} </li>`;
            })
    }
}

reFetch(); // Si esegue all'avvio così la prima parte di codice non serve che si ripeta
fetchBtnHtmlEl.addEventListener('click', reFetch);
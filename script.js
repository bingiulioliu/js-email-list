'use strict';

const API_URL_RANDOM_MAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';

const mailListHtmlEl = document.querySelector('#list-container');

for (let i=0; i<10; i++){
    fetch(API_URL_RANDOM_MAIL)
        .then((risposta)=>{
            return risposta.json()
        })
        .then ((jsonData)=>{
            console.log(jsonData);
            // Variabile di supporto
            const mail = jsonData.response;
            // Ad ogni ciclo mi aggiunge una mail 
            mailListHtmlEl.innerHTML += `<li> ${mail} </li>`;
            console.log(mailListHtmlEl);
            
        })
    }
'use strict';

const API_URL_RANDOM_MAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';

const mailListHtmlEl = document.querySelector('#list-container');

fetch(API_URL_RANDOM_MAIL)
    .then((risposta)=>{
        return risposta.json()
    })
    .then ((jsonData)=>{
        console.log(jsonData);
        
    })
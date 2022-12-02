
//LISTA EMAIL PRESENTI IN ARCHIVIO//

const mail = ['almannofrancesco@gmail.com', 'francescoalmanno@gmail.com', 'almannofrancesco@hotmail.it', 'fabriziosgargiulo@live.it', 'snackaperitivo@libero.it'];

//INPUT RICHIESTA PER INSERIMENTO EMAIL UTENTE//

let user_mail = prompt('Per favore inserisci la tua email');
console.log(user_mail);

let control_mail = false;

for(let i = 0; i < mail.length; i++){
    if(user_mail == mail[i]){
        control_mail = true;
    }
    else{
        control_mail = false;
    }
}

if(mail){
    console.log('Email trovata in archivio');
}
else{
    console.log('Email non trovata in archivio');
}
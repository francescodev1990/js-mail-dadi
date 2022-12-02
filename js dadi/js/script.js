alert('Premi per lanciare i dadi!');


let dadi;

for(i = 0; i < 1000; i++) {
    dadi = Math.floor(Math.random()* 6 + 1);
}
console.log(dadi)

let human_player = Math.floor(Math.random()* 6 + 1);
console.log(human_player);
let pc_player = Math.floor(Math.random()* 6 + 1);
console.log(pc_player);

if (human_player > pc_player){
    console.log('Human_player ha vinto');
}
else{
    console.log('Human_player Ha perso');
}



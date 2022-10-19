/*Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while*/
const Alimenti = ["banane", "zucchine", "melanzane"];
const list = document.querySelector('h1');
 
for(let i = 0; i < Alimenti.length; i++) {
  //console.log(Alimenti[i]);
  console.log(Alimenti.at(i));

  list.innerHTML +=`<li> ${Alimenti[i]} </li>` ;
}

let i = 0;
while(i < Alimenti.length){
  list.innerHTML += `<li> ${Alimenti[i]} </li>`;
  
  i++;
}

let pollice = true;
let j = 0;

while(pollice){
  list.innerHTML += `<li> ${Alimenti[j]} </li>`;
  console.log(j);
  if(j === Alimenti.length - 1){
    pollice = false;
  }
  j++;

} 




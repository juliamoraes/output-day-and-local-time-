const dia = today.getDay();
const listadedias = ["Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-feira", "Sexta-Feira", "Sabado"]
document.write("Hoje é"+ listadedias[dia]+ ".");
let hora = getHour();
let minutos = getMinutes();
let segundos = getSecond();
let prepand = (hora >= 12)? " PM ":" AM ";
hora = (hora >=12)? hora - 12: hora; 
if (hora===0 && prepand===' PM ') 
  { 
  if (minutos===0 && segundos===0)
  { 
  hora=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hora=12;
  prepand=' Midnight';
  } 
  else
  { 
  hora=12;
  prepand=' AM';
  } 
  } 
console.log(`Horario Local: ${hora}${prepand} : ${minutos} : ${segundos}`);
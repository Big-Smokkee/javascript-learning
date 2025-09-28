const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566
  
};
let txt = "";
for (let i in person) {
  txt += person[i] + " ";
}
// document.getElementById("demo").innerHTML = txt;

/* Object.values(onjName) ---> eii jinish ta ekta array return kore


document.getElementById("demo").innerHTML = Object.values(person);
*/

/*JSON.stringify --->array object shb string banaya dey...kintu function re pare na...tohh eta re age toString koira nite hoy


const arr = ['heda', 'shona'];
let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;
*/
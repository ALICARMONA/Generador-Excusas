


window.onload = () =>{
    document.querySelector('#btn').addEventListener("click",() => {
        document.querySelector('#excusa').innerHTML = generateExcuse();
    });
    console.log('holaaaaaaaaaaaaaaaaaaaaaaaaa');
};

let generateExcuse = () => {

    let pronoun =['El','Mi','Nuestro','Su','Tu condenado'];
    let subject =['perro','loro','primito','gato'];
    let action =['tomo tu','agarro mi','volvio mierda mi','descoñeto mi'];
    let possetion =['tarea','guitarra','laptop','interior','zapato'];
    let where =['en la calle','en la esquina','en mi casa','en el supermercado'];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actIndx = Math.floor(Math.random() * action.length);
    let possIndx = Math.floor(Math.random() * possetion.length);
    let whIndx = Math.floor(Math.random() * where.length);

    
    
    return pronoun[proIndx] + ' ' + subject[subjIndx]+ ' ' + action[actIndx]+ ' ' + possetion[possIndx]+ ' ' + where[whIndx];
};
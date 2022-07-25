formsList = document.querySelectorAll("form");

let evenFormsNames = '';
let formName = '';

for (let i = 0; i < formsList.length; i++) {
    if (i % 2 === 1 && i !== formsList.length - 1) {
        formName = formsList.item(i).name;
        evenFormsNames += `${formName}, `
    } else if (i % 2 === 1) {
        formName = formsList.item(i).name;
        evenFormsNames += `${formName}`;
    }
}

document.getElementById("evenList").textContent = evenFormsNames;

function formNameButton(id) {
    alert(document.getElementById(id).innerHTML);
}

function btnRelation(name) {
    alert(document.getElementsByName(name).textContent = name.toString());
}

let formsName = '';
counter = 0;

function fieldsNum(name) {
    formsName = name.toString();
    let form = document.forms[formsName];
    console.log(form[3].type);
    for(let i = 0; i < form.length; i++) {
        if(form[i].type !== 'submit' && form[i].type !== 'reset') {
            counter++;
        }
    }
    alert(`Количество полей: ${counter}`);
}

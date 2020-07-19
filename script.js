const add_area = document.querySelector('.input');
const submit_button = document.querySelector('.submit');
const display_notes = document.getElementsByClassName('notes_show');

function main() {
    console.log(localStorage.getItem("note"));
    submit_button.addEventListener('click', print);

}

function print() {
    console.log('dupa');
    let value = add_area.value;
    /*console.log(value);*/
    localStorage.setItem("note", value);
    /*localStorage.getItem("note");*/


}

/*
function add_value_textarea(){
    var moja_wartosc = 'to jest moja wartosc tekstowa';
    const add_area = document.querySelector('.input');
    return add_area.value = moja_wartosc;
}*/
window.onload=function(){  add_value_textarea();}
print();
main();
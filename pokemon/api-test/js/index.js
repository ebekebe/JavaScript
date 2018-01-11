let x = $('form');
console.log(x);

let y = $('#form-test')
console.log(y);

x.on('submit', e => formAction(e));
y.on('submit', e => formAction(e));

function formAction(event) {
    event.preventDefault();
    
    let types = ('input[type=text]')
        .val()
        .replace(' ', '')
        .split(',');

    console.log(types);

    let trainerTypes = types.map(type => {
        console.log(type);
    });
}
$('form').on('submit', e => {
    e.preventDefault();

    let types = ('input[type=text]')
        .val()
        .replace(' ', '')
        .split(',');

    console.log(types);

    let trainerTypes = types.map(type => {
        console.log(type);
    });
});
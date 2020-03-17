const PERSONAL_DATA = {
    title: 'dr',
    name: 'Mateusz',
    surname: 'Kubicki',
    street: 'Długa 15',
    city: 'Kraków',
    zip: '30-781',
    country: 'Poland'
};

function displayAddressWithoutStringFormatting({ title, name, surname, street, city, zip, country }) {
    return title + ' ' + name + ' ' + surname + '\n' +
        'ul. ' + street + '\n' +
        zip + ' ' + city + '\n' +
        country.toUpperCase();
}

function displayAddressWithStringFormatting({ title, name, surname, street, city, zip, country }) {
    return `${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country.toUpperCase()}`;
}

console.log(displayAddressWithoutStringFormatting(PERSONAL_DATA));
console.log(displayAddressWithStringFormatting(PERSONAL_DATA));

/*
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

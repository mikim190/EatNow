const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter({sendHeaders: false});
var faker = require('faker');


const dataGen = () => {
    writer.pipe(fs.createWriteStream('data.csv', {flags: 'a'}));
    for (var i = 0; i < 1000000; i++) {
        writer.write({
            name: faker.company.companyName(),
            websites: faker.internet.url(),
            coords: `${faker.address.latitude()}° N, ${faker.address.longitude()}° W`,
            addresses: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
            phone: faker.phone.phoneNumberFormat(),
            mon_open: Math.floor(Math.random() * (8 - 5)) + 5,
            mon_close: Math.floor(Math.random() * (10 - 7)) + 7,
            tue_open: Math.floor(Math.random() * (8 - 5)) + 5,
            tue_close: Math.floor(Math.random() * (10 - 7)) + 7,
            wed_open: Math.floor(Math.random() * (8 - 5)) + 5,
            wed_close: Math.floor(Math.random() * (10 - 7)) + 7,
            thu_open: Math.floor(Math.random() * (8 - 5)) + 5,
            thu_close: Math.floor(Math.random() * (10 - 7)) + 7,
            fri_open: Math.floor(Math.random() * (8 - 5)) + 5,
            fri_close: Math.floor(Math.random() * (10 - 7)) + 7,
            sat_open: Math.floor(Math.random() * (8 - 5)) + 5,
            sat_close: Math.floor(Math.random() * (10 - 7)) + 7,
            sun_open: Math.floor(Math.random() * (8 - 5)) + 5, //faker.random.number({max: 8, min: 5})
            sun_close: Math.floor(Math.random() * (10 - 7)) + 7  
        }) 
    }

    writer.end();

    console.log('Done generating10')   
}

dataGen();




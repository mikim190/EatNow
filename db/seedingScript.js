//With this script, I only need to run the script once to generate 10M data, finishes less than 10 mins

const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');


class Writer {

    constructor(file) {
        this.writer = csvWriter({sendHeaders: false}); //create new writer, do not send header to csv file
        this.writer.pipe(fs.createWriteStream(file, { flags: 'a' }));
    }

    write(obj) {
        // if .write returns false we have to wait until `drain` is emitted
        if(!this.writer.write(obj))
            return new Promise(resolve => this.writer.once('drain', resolve))

        return true;
    }

    end() {
        // Wrap it in a promise if you wish to wait for the callback.
        this.writer.end(); 
    }

}

(async() => {
    const writer = new Writer('newData.csv');
   
    for(let i = 0; i < 10000000; i++) {
        const res = writer.write({ 
            name: faker.company.companyName() + i,
            websites: faker.internet.url(),
            coords: `${faker.address.latitude()}° N, ${faker.address.longitude()}° W`,
            addresses: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
            phone: faker.phone.phoneNumberFormat(),
            mon_open: faker.random.number({max: 8, min: 5}),
            mon_close: faker.random.number({max: 10, min: 7}),
            tue_open: faker.random.number({max: 8, min: 5}),
            tue_close: faker.random.number({max: 10, min: 7}),
            wed_open: faker.random.number({max: 8, min: 5}),
            wed_close: faker.random.number({max: 10, min: 7}),
            thu_open: faker.random.number({max: 8, min: 5}),
            thu_close: faker.random.number({max: 10, min: 7}),
            fri_open: faker.random.number({max: 8, min: 5}),
            fri_close: faker.random.number({max: 10, min: 7}),
            sat_open: faker.random.number({max: 8, min: 5}),
            sat_close: faker.random.number({max: 10, min: 7}),
            sun_open: faker.random.number({max: 8, min: 5}), 
            sun_close: faker.random.number({max: 10, min: 7})  
         });
        if(res instanceof Promise) {
            // You can remove this if, and leave just: await writer.write...
            // but the code will be slower
            await res; // This will wait for the stream to emit the drain event
        }
    }

    writer.end();

})();
use bookings;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "Ron Perlman",
        email: "ron.perlman@gmail.com",
        status: true
    },
    {
        name: "Angelina Jolie",
        email: "angjolie@hotmail.co.uk",
        status: false
    },
    {
        name: "Elton John",
        email: "ejohn@yahoo.com",
        status: true
    }
]);
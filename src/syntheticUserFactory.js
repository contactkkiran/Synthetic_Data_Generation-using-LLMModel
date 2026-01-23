"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUser = makeUser;
exports.makeUsers = makeUsers;
// syntheticUserFactory.ts
const faker_1 = require("@faker-js/faker");
// 1) Create one fake user JSON
function makeUser() {
    return {
        firstName: faker_1.faker.person.firstName(),
        lastName: faker_1.faker.person.lastName(),
        fullName: faker_1.faker.person.fullName(),
        email: faker_1.faker.internet.email(),
        phone: faker_1.faker.phone.number(),
        username: faker_1.faker.internet.userName(),
        password: faker_1.faker.internet.password(),
        dateOfBirth: faker_1.faker.date.birthdate({ min: 18, max: 60, mode: "age" }),
        address: {
            street: faker_1.faker.location.streetAddress(),
            city: faker_1.faker.location.city(),
            state: faker_1.faker.location.state(),
            zip: faker_1.faker.location.zipCode(),
            country: faker_1.faker.location.country(),
        },
    };
}
// (Optional helper) generate multiple fake users
function makeUsers(count) {
    return Array.from({ length: count }, () => makeUser());
}

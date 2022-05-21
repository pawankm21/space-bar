import faker from "@faker-js/faker";

export const generate = (count = 10) => {
    return faker.random.words(count).split(" ")
};

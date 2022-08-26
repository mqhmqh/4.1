import faker from 'faker';
const ArticleList = [
  {
    image: 'https://picsum.photos/300/',
    name: faker.name.lastName(),
    description: faker.lorem.sentence(),
    star: faker.random.number(),
    author: faker.name.firstName(),
  },
  {
    image: 'https://picsum.photos/300/',
    name: faker.name.lastName(),
    description: faker.lorem.sentence(),
    star: faker.random.number(),
    author: faker.name.firstName(),
  },
  {
    image: 'https://picsum.photos/300/',
    name: faker.name.lastName(),
    description: faker.lorem.sentence(),
    star: faker.random.number(),
    author: faker.name.firstName(),
  },
  {
    image: 'https://picsum.photos/300/',
    name: faker.name.lastName(),
    description: faker.lorem.sentence(),
    star: faker.random.number(),
    author: faker.name.firstName(),
  },
  {
    image: 'https://picsum.photos/300/',
    name: faker.name.lastName(),
    description: faker.lorem.sentence(),
    star: faker.random.number(),
    author: faker.name.firstName(),
  },
  {
    image: 'https://picsum.photos/300/',
    name: faker.name.lastName(),
    description: faker.lorem.sentence(),
    star: faker.random.number(),
    author: faker.name.firstName(),
  },
];
export default ArticleList;

var faker = require('faker');

module.exports = function() {
    const data = { api: { messages: []} };

    for (var i = 0; i < 20; i++) {
      data.api.messages.push({
        id: faker.random.number(),
        handle: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        timestamp: faker.date.past(),
        source: 'Twitter',
        content: faker.lorem.sentences(),
        score: Math.floor((Math.random() * 100) + 1),
        flags: {
          isBookmarked: faker.random.boolean(),
          isStarred: faker.random.boolean()
        }
      });
    }

    return data;
}

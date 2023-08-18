import {faker} from "@faker-js/faker";
import {insertRecords} from "../util/exec_query";

const tags = [
  "driver",
  "protocol",
  "bandwidth",
  "panel",
  "microchip",
  "programming",
  "port",
  "card",
  "array",
  "interface",
  "system",
  "sensor",
  "firewall",
  "hard drive",
  "pixel",
  "alarm",
  "feed",
  "monitor",
  "application",
  "transmitter",
  "bus",
  "circuit",
  "capacitor",
  "matrix",
  "internet",
].map((tagName, index) => [index + 1, tagName]);

const NUMBER_OF_USERS = 10;
const NUMBER_OF_POSTS = 100;
const NUMBER_OF_LIKES = 500;
const NUMBER_OF_TAGS = tags.length;
const NUMBER_OF_POST_TAGS = 250;

const main = async (): Promise<void> => {
  // insert users
  const users = [];
  for (let i = 1; i <= NUMBER_OF_USERS; i++) {
    const username = faker.internet.userName();
    users.push([
      i,
      username.toLowerCase() + "@example.com",
      faker.internet.password(20),
      username,
      faker.date.between(
        "2023-01-01T00:00:00.000Z",
        "2023-02-01T00:00:00.000Z"
      ),
    ]);
  }
  await insertRecords({
    sql: "insert into users(id, email, password, username, registered_at) values ?",
    values: users,
  });
  console.log("insert users done");

  // insert posts
  const posts = [];
  for (let i = 1; i <= NUMBER_OF_POSTS; i++) {
    posts.push([
      i,
      faker.datatype.number({min: 1, max: NUMBER_OF_USERS}),
      faker.lorem.sentence(4),
      faker.date.between(
        "2023-02-01T00:00:00.000Z",
        "2023-03-01T00:00:00.000Z"
      ),
    ]);
  }

  await insertRecords({
    sql: "insert into posts(id, user_id, content, posted_at) values ?",
    values: posts,
  });
  console.log("insert posts done");

  // insert tags
  await insertRecords({
    sql: "insert into tags(id, name) values ?",
    values: tags,
  });
  console.log("insert tags done");

  // insert likes
  const likes = [];
  for (let i = 0; i < NUMBER_OF_LIKES; i++) {
    likes.push([
      faker.datatype.number({min: 1, max: NUMBER_OF_USERS}),
      faker.datatype.number({min: 1, max: NUMBER_OF_POSTS}),
    ]);
  }

  const uniqueLikes = Array.from(
    new Set(likes.map(like => JSON.stringify(like)))
  ).map(like => JSON.parse(like));

  await insertRecords({
    sql: "insert into likes(user_id, post_id) values ?",
    values: uniqueLikes,
  });
  console.log("insert likes done");

  // insert post_tags
  const postTags = [];
  for (let i = 0; i < NUMBER_OF_POST_TAGS; i++) {
    postTags.push([
      faker.datatype.number({min: 1, max: NUMBER_OF_POSTS}),
      faker.datatype.number({min: 1, max: NUMBER_OF_TAGS}),
    ]);
  }

  const uniquePostTags = Array.from(
    new Set(postTags.map(postTag => JSON.stringify(postTag)))
  ).map(postTag => JSON.parse(postTag));

  await insertRecords({
    sql: "insert into post_tags(post_id, tag_id) values ?",
    values: uniquePostTags,
  });
  console.log("insert post_tags done");
};

main();

import {execQuery} from "../util/exec_query";
import fs from "node:fs";

describe("writeQuery", () => {
  describe("question1", () => {
    test("query result should match csv", async () => {
      const query = fs.readFileSync("./sql/write_query/question1.sql", "utf8");
      const [queryRows] = await execQuery(query, []);

      const csv = fs
        .readFileSync(
          "./__tests__/answers/answer_data_for_question1.csv",
          "utf8"
        )
        .trim();

      const csvRows = csv.split("\n").slice(1);
      const csvData = csvRows.map(row => {
        const [id, username] = row.split(",");
        return [Number(id), username];
      });
      const queryResult = queryRows.map(
        (row: {id: number; username: string}) => [row.id, row.username]
      );
      expect(queryResult).toEqual(csvData);
    });
  });

  describe("question2", () => {
    test("query result should match csv", async () => {
      const query = fs.readFileSync("./sql/write_query/question2.sql", "utf8");
      const [queryRows] = await execQuery(query, []);

      const csv = fs
        .readFileSync(
          "./__tests__/answers/answer_data_for_question2.csv",
          "utf8"
        )
        .trim();
      const csvRows = csv.split("\n").slice(1);

      const csvData = csvRows.map(row => {
        const [id, content, postedAt] = row.split(",");
        return [Number(id), content, new Date(postedAt)];
      });

      const queryResult = queryRows.map(
        (row: {id: number; content: string; posted_at: string}) => [
          row.id,
          row.content,
          row.posted_at,
        ]
      );

      expect(queryResult).toEqual(csvData);
    });
  });

  describe("question3", () => {
    test("query result should match csv", async () => {
      const query = fs.readFileSync("./sql/write_query/question3.sql", "utf8");
      const [queryRows] = await execQuery(query, []);

      const csv = fs
        .readFileSync(
          "./__tests__/answers/answer_data_for_question3.csv",
          "utf8"
        )
        .trim();
      const csvRows = csv.split("\n").slice(1);

      const csvData = csvRows.map(row => {
        const [username, content, postedAt] = row.split(",");
        return [username, content, new Date(postedAt)];
      });
      const queryResult = queryRows.map(
        (row: {username: string; content: string; posted_at: string}) => [
          row.username,
          row.content,
          row.posted_at,
        ]
      );
      expect(queryResult).toEqual(csvData);
    });
  });

  describe("question4", () => {
    test("query result should match csv", async () => {
      const query = fs.readFileSync("./sql/write_query/question4.sql", "utf8");
      const [queryRows] = await execQuery(query, []);

      const csv = fs
        .readFileSync(
          "./__tests__/answers/answer_data_for_question4.csv",
          "utf8"
        )
        .trim();
      const csvRows = csv.split("\n").slice(1);

      const csvData = csvRows.map(row => {
        const [postId, content] = row.split(",");
        return [Number(postId), content];
      });
      const queryResult = queryRows.map(
        (row: {post_id: number; content: string}) => [row.post_id, row.content]
      );
      expect(queryResult).toEqual(csvData);
    });
  });

  describe("question5", () => {
    test("query result should match csv", async () => {
      const query = fs.readFileSync("./sql/write_query/question5.sql", "utf8");
      const [queryRows] = await execQuery(query, []);

      const csv = fs
        .readFileSync(
          "./__tests__/answers/answer_data_for_question5.csv",
          "utf8"
        )
        .trim();
      const csvRows = csv.split("\n").slice(1);

      const csvData = csvRows.map(row => {
        const [postId, content, likesCount] = row.split(",");
        return [Number(postId), content, Number(likesCount)];
      });
      const queryResult = queryRows.map(
        (row: {post_id: number; content: number; likes_count: number}) => [
          row.post_id,
          row.content,
          row.likes_count,
        ]
      );
      expect(queryResult).toEqual(csvData);
    });
  });

  describe("question6", () => {
    test("query result should match csv", async () => {
      const query = fs.readFileSync("./sql/write_query/question6.sql", "utf8");
      const [queryRows] = await execQuery(query, []);

      const csv = fs
        .readFileSync(
          "./__tests__/answers/answer_data_for_question6.csv",
          "utf8"
        )
        .trim();

      const csvRows = csv.split("\n").slice(1);

      const csvData = csvRows.map(row => {
        const [name, postsCount] = row.split(",");
        return [name, Number(postsCount)];
      });
      const queryResult = queryRows.map(
        (row: {name: string; posts_count: number}) => [
          row.name,
          row.posts_count,
        ]
      );

      expect(queryResult).toEqual(csvData);
    });
  });

  describe("question7", () => {
    test("query result should match csv", async () => {
      const query = fs.readFileSync("./sql/write_query/question7.sql", "utf8");
      const [queryRows] = await execQuery(query, []);

      const csv = fs
        .readFileSync(
          "./__tests__/answers/answer_data_for_question7.csv",
          "utf8"
        )
        .trim();
      const csvRows = csv.split("\n").slice(1);

      const csvData = csvRows.map(row => row.split(","));
      const queryResult = queryRows.map(
        (row: {username: string; latest_post_content: string}) => [
          row.username,
          row.latest_post_content,
        ]
      );

      expect(queryResult).toEqual(csvData);
    });
  });
});

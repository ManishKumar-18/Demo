import { test, expect } from "@playwright/test";
import { request } from "http";

test("Testing Rest api with get method", async ({ request }) => {
  const url = `https://jsonplaceholder.typicode.com/posts/1`;
  const res = await request.get(url);
  expect(res.status()).toBe(200);

  const responseBody = await res.json();
  console.log(responseBody);
  expect(responseBody.userId).toBe(1);
});

test("Testing Rest api with post method", async ({ request }) => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const res = await request.post(url, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: {
      title: "New Post",
      body: "post4567",
      userId: 5,
    },
  });
  expect(res.status()).toBe(201);

  const responseBody = await res.json();
  console.log(responseBody);
  expect(responseBody.title).toBe("New Post");
});

// test('Api Chaining', async({request}) => {

//     //get all posts
//     const postResponse = await request.get('https://jsonplaceholder.typicode.com/posts');
//     expect(postResponse.status()).toBe(200);

//     //parse response body to json

//     const posts = await postResponse.json();

//     const firstPost = posts[0];

//     //get comments from the select post

//     const commentsResponse = await request.get(`https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`);
//     expect(commentsResponse.status()).toBe(200);


//     const comments = await commentsResponse.json();
//     expect(comments.length).toBeGreaterThan(0);
//     expect(comments[0].postid).toBe(firstPost.id);
// });

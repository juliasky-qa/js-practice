const axios = require('axios');

describe('Posts workflow', () => {
  test('Post should return post with required keys', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('userId');
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  });

   test('Create a new post and return new id', async () => {
    let newPost = {
      title: 'Test title',
      body: 'Test body'
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    console.log(response);
  });
  
   test('Update post and return updated data', async () => {
    const updatedPost = {
      title: 'Updated title',
      body: 'Updated body'
    };

    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
    expect(response.status).toBe(200);
    expect(response.data.title).toBe(updatedPost.title);
    expect(response.data.body).toBe(updatedPost.body);
  });

   test('should delete post and return status 200', async () => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status).toBe(200);
  });
});

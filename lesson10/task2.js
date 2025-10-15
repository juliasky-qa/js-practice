function fetchPost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

fetchPost(1)
  .then((response) => response.json())
  .then((post) => console.log(post));

  
function fetchComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
}

fetchComments()
  .then((response) => response.json())
  .then((comments) => console.log(comments))

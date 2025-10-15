async function fetchPost(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  return post;
}

async function fetchComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
  const comments = await response.json();
  return comments;
}

async function getPostAndComments() {
  try {
    const post = await fetchPost(1);
    const comments = await fetchComments();

    console.log("Post:", post);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error while fetching data:", error);
  }
}

getPostAndComments();

async function fetchData() {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await userResponse.json();
        
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = await postsResponse.json();
        return { user, posts };
        
    } catch (error) {
        return { error: error.message };
    }
}
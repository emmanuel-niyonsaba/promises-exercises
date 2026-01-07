
async function fetchWithLimit(urls, limit = 3) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < urls.length) {
      const currentIndex = index;
      const url = urls[index];
      index++;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed: ${url}`);
        }
        results[currentIndex] = await response.json();
      } catch (error) {
        results[currentIndex] = error;
      }
    }
  }

  // Create `limit` number of workers
  const workers = Array.from({ length: limit }, () => worker());

  await Promise.all(workers);
  return results;
}



const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
];


fetchWithLimit(urls, 3)
  .then(results => console.log(results))
  .catch(err => console.error(err));

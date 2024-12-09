// script.js
const blogs = [
  {
    title: "Understanding JavaScript",
    snippet: "Learn the basics of JavaScript.",
    isRecent: true,
  },
  {
    title: "CSS Tips and Tricks",
    snippet: "Enhance your CSS skills.",
    isRecent: false,
  },
  { title: "HTML for Beginners", snippet: "Start with HTML.", isRecent: true },
  {
    title: "React in Depth",
    snippet: "Explore advanced React concepts.",
    isRecent: false,
  },
];

function filterResults() {
  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const recentOnly = document.getElementById("recentOnly").checked;
  const resultsContainer = document.getElementById("results");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesQuery =
      blog.title.toLowerCase().includes(searchQuery) ||
      blog.snippet.toLowerCase().includes(searchQuery);
    const matchesFilter = recentOnly ? blog.isRecent : true;
    return matchesQuery && matchesFilter;
  });

  resultsContainer.innerHTML = filteredBlogs
    .map(
      (blog) => `
    <div class="result-item">
      <h3>${blog.title}</h3>
      <p>${blog.snippet}</p>
    </div>
  `
    )
    .join("");

  if (filteredBlogs.length === 0) {
    resultsContainer.innerHTML = `<p>No results found.</p>`;
  }
}

// Initialize results on page load
filterResults();

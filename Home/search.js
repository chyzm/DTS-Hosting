async function searchPages() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (query.trim() === "") {
        alert("Please enter a search term!");
        return;
    }

    // Fetch search index
    let response = await fetch("search-index.json");
    let pages = await response.json();

    // Search logic
    let results = pages.filter(page => 
        page.title.toLowerCase().includes(query) || 
        page.keywords.toLowerCase().includes(query)
    );

    // Display results
    if (results.length > 0) {
        results.forEach(page => {
            let resultItem = document.createElement("div");
            resultItem.innerHTML = `<a href="${page.url}" target="_blank">${page.title}</a>`;
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = "<p>No results found</p>";
    }
}

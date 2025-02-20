async function searchPages() {
    console.log("searchPages function called");
    let query = document.getElementById("searchInput").value.toLowerCase().trim();
    console.log("Search term:", query);

    let resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (query === "") {
        alert("Please enter a search term!");
        return;
    }

    try {
        resultsDiv.innerHTML = "<p>Loading...</p>"; // Show loading message

        let response = await fetch("search-index.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let pages = await response.json();

        let results = pages.filter(item => {
            console.log("Checking page:", item.title, item.keywords);
            return item.title.toLowerCase().includes(query) || item.keywords.toLowerCase().includes(query);
        });

        console.log("Search results:", results);

        resultsDiv.innerHTML = ""; // Clear loading message

        if (results.length > 0) {
            results.forEach(result => {
                let resultItem = document.createElement("div");
                resultItem.innerHTML = `<a href="${result.url}" target="_blank">${result.title}</a>`;
                resultsDiv.appendChild(resultItem);
            });
        } else {
            resultsDiv.innerHTML = "<p>No results found</p>";
        }
    } catch (error) {
        console.error("Search error:", error);
        resultsDiv.innerHTML = "<p>An error occurred during the search.</p>"; // Display error message to the user
    } finally {
        document.getElementById("searchInput").value = ""; // Clear search input
    }
}
function searchPages() {
    let searchInput = document.getElementById('searchInput');
    let query = searchInput.value.toLowerCase().trim();
    
    if (query === "") {
        alert("Please enter a search term.");
        searchInput.focus();
        return;
    }
    
    let pages = [
        { url: 'page1.html', keywords: 'hosting, free hosting, website' },
        { url: 'page2.html', keywords: 'business, landing page, startup' },
        { url: 'page3.html', keywords: 'domain, web services, seo' }
    ];
    
    let result = pages.find(page => page.keywords.includes(query));
    if (result) {
        window.location.href = result.url;
    } else {
        alert('No results found');
    }

    

 

}

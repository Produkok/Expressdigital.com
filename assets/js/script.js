document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchinput");
    const searchResults = document.getElementById("searchResults");
    const gameDetails = document.getElementById("gameDetails");
  
    const games = [
      { name: "Mobile Legends", image: "github/images/mobile-legends.webp", details: "Mobile Legends" },
      { name: "PUBG Mobile", image: "github/images/pubg-mobile.jpg", details: "PUBG Mobile" },
      { name: "free fire", image: "github/images/freefire.png", details: "free fire" },
      { name: "8 ball poll", image: "github/images/8-ball-pool.jpg", details: "8 ball poll" },
      { name: "life after", image: "github/images/life.after.png", details: "life after" },
      { name: "clash of clans", image: "github/images/clash-of-clans.png", details: "clash of clans"},
      { name: "higgs_dominos", image: "github/images/higgs_domino.jpg", details: "higgs_domino" },
      { name: "Minecraft", image: "github/images/Minecraft.jpg", details: "Minecraft" },
      // Tambahkan informasi detail untuk game lainnya
    ];
  
    // Function to perform live search
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchTerm));
  
      // Display the search results
      displayResults(filteredGames);
    }
  
    // Function to display search results
    function displayResults(results) {
      searchResults.innerHTML = "";
      if (results.length === 0) {
        searchResults.innerHTML = "<li>No results found</li>";
      } else {
        results.forEach(result => {
          const listItem = document.createElement("li");
          const image = document.createElement("img");
  
          listItem.textContent = result.name;
          image.src = result.image;
          image.alt = result.name;
  
          // Menambahkan event listener untuk menanggapi klik pada hasil pencarian
          listItem.addEventListener("click", function () {
            displayGameDetails(result);
          });
  
          listItem.appendChild(image);
          searchResults.appendChild(listItem);
        });
      }
    }
  
    // Function to display game details
    function displayGameDetails(game) {
      gameDetails.innerHTML = `<h2>${game.name}</h2><img src="${game.image}" alt="${game.name}"><p>${game.details}</p>`;
    }
  
    // Event listener for input changes
    searchInput.addEventListener("input", performSearch);
  });
  
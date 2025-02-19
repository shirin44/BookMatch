const API_KEY = "AIzaSyDqcz__fj3di0OgqZ8lF4xqcVHaM3VWKk0"; // 🔹 Hardcoded (Not Secure)
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";



export const fetchBooks = async (query, category = "", language = "", minRating = 0) => {
  try {
    // 🔥 Correct the query formatting and limit to 20 results
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    if (category) apiUrl += `+subject:${encodeURIComponent(category)}`;
    if (language) apiUrl += `&langRestrict=${language}`;
    
    apiUrl += `&maxResults=20`; // ✅ Limit to 20 books
    apiUrl += `&key=${API_KEY}`; // ✅ API key at the end

    console.log("Fetching from API:", apiUrl); // Debugging

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }

    const data = await response.json();

    return data.items
      ? data.items
          .map((item) => ({
            id: item.id,
            title: item.volumeInfo.title || "No Title",
            authors: item.volumeInfo.authors || ["Unknown Author"],
            publishedDate: item.volumeInfo.publishedDate || "Unknown Date",
            description: item.volumeInfo.description || "No description available.",
            categories: item.volumeInfo.categories || ["Uncategorized"],
            thumbnail:
              item.volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/128x198.png?text=No+Image",
            rating: item.volumeInfo.averageRating || 0,
            ratingsCount: item.volumeInfo.ratingsCount || 0,
            language: item.volumeInfo.language || "Unknown",
            pageCount: item.volumeInfo.pageCount || "N/A",
            maturityRating: item.volumeInfo.maturityRating || "N/A",
            printType: item.volumeInfo.printType || "Unknown",
            previewLink: item.volumeInfo.previewLink || "#",
          }))
          .filter((book) => book.rating >= minRating) // ✅ Apply rating filter
      : [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

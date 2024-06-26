// In-memory list of items (variable)
const items = [
    { title: 'AIBots', description: "Build your Chatbot in 15 minutes", link: "./aibotsproductpage", about: "RAG, retrieval augmented generation, chatbots, design chatbot, knowledge management, info overload" },
    { title: 'Pair Chat', description: 'Fast and Secure version of ChatGPT.', link: "./pairchatproductpage", about: "chatgpt-equivalent, ideation, brainstorming, language translation, coding, rewriting or editing text, review text, spelling, grammar" },
    { title: 'Transcribe', description: 'Record and Summarise your Meeting Minutes.', link: "./transcribeproductpage", about: "speech to text, diarisation, transcription, interviews, speech to text, summarise minutes, audio transcription, summarise meeting minutes, summarise interview minutes" },
    { title: 'LaunchPad', description: 'Share your Ideas.' , link: "./launchpadproductpage", about: "innovate, ideathon, hackathon" },
    { title: 'ReadLiao', description: 'Simplify and Translate Complicated Letters.', link: "./readliaoproductpage", about: "translate, OCR, speech to text, scan, scan letters, scan documents, translate english to mandarin, scan, elderly" },
    { title: 'SmartCompose', description: 'Draft Customer Service Replies in 5 minutes.', link: "./smartcomposeproductpage", about: "reply emails, reply customer emails, data redaction, draft reply, service reply, compose reply" },
    { title: 'AISAY', description: 'An AI Document Reader.', link: "./aisayproductpage", about: "scan, OCR, scan documents, scan letters, passports, scan invoice" },
    { title: 'Appraiser', description: 'A Testimonial Generator', link: "./appraiserproductpage", about: "draft, draft testimonial, students, student reports, recommend" },
    { title: 'SearchSG', description: 'A WOG Search Engine.', link: "./searchsgproductpage", about: "search engine, search analytics, improve discoverability, discoverability" }
    // Add more items as needed
];

// higher threshold = return more results but may not be well-matched. lower threshold = more specific results/stricter matches. 
const options = {
    keys: ['title', 'description', 'about'],
    threshold: 0.4,
    findAllMatches: true
};

// Initialize Fuse.js (create new object, Fuse as a Search Library)
const fuse = new Fuse(items, options);

// Reference to the cards container (where the product cards will be displayed)
const cardsContainer = document.getElementById('cardsContainer');

// Function to render cards based on items. Defining function. 
function renderCards(filteredItems) {
    cardsContainer.innerHTML = ''; // Clear previous cards
    filteredItems.forEach(item => {
        const cardClone = cardTemplate.content.cloneNode(true);
        cardClone.querySelector('.card-title').textContent = item.title;
        cardClone.querySelector('.card-text').textContent = item.description;
        cardClone.querySelector('.btn').href = item.link;
        cardsContainer.appendChild(cardClone);
    });
}

// Search input event listener (product title and description details are returned here) 
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value;
    const result = fuse.search(query);
    const filteredItems = result.map(res => res.item);
    renderCards(filteredItems);
});

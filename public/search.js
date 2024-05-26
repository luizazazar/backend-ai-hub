// In-memory list of items (variable)
const items = [
    { title: 'AIBots', description: "Build your chatbot in 15 minutes", link: "./aibotsproductpage", about: "RAG, retrieval augmented generation, chatbots, design chatbot, knowledge management" },
    { title: 'Pair Chat', description: 'Fast and secure version of ChatGPT.', link: "./pairchatproductpage", about: "chatgpt-equivalent, ideation, brainstorming, language translation, coding, rewriting or editing text, review text, spelling, grammar" },
    { title: 'Transcribe', description: 'Record and summarise your meeting minutes.', link: "./transcribeproductpage", about: "diarisation, transcription, interviews, speech to text, summarise minutes, summarise meeting minutes, summarise interview minutes" },
    { title: 'LaunchPad', description: 'Share your ideas.' , link: "./launchpadproductpage", about: "innovate, ideathon, hackathon" },
    { title: 'ReadLiao', description: 'Simplify complicated letters for seniors.', link: "./readliaoproductpage", about: "translate, OCR, speech to text, scan letters" },
    { title: 'SmartCompose', description: 'Draft customer service replies in 5 minutes.', link: "./smartcomposeproductpage", about: "reply customer emails, data redaction, draft reply" }
    // Add more items as needed
];

// higher threshold = return more results but may not be well-matched. lower threshold = more specific results. 
const options = {
    keys: ['title', 'description', 'about'],
    threshold: 0.3,
    findAllMatches: true
};

// Initialize Fuse.js (creating new object)
const fuse = new Fuse(items, options);

// Reference to the cards container
const cardsContainer = document.getElementById('cardsContainer');

// Function to render cards based on items
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

// Search input event listener
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value;
    const result = fuse.search(query);
    const filteredItems = result.map(res => res.item);
    renderCards(filteredItems);
});

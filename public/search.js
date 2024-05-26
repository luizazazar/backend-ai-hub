// In-memory list of items (variable)
const items = [
    { title: 'AIBots', description: "Create your chatbot in 15 minutes", link: "./aibotsproductpage", about: "ChatGPT is useful but it only contains internet data. When you can include a knowledge base (until Restricted\Sensitive-Normal), there are many more possibilities where you can leverage large language models to help improve your agency's work and productivity. AIBots is a platform allowing agencies to create AI Chatbots with pre-configured system prompts and an added knowledge base (.pdf, .docx, .txt files)." },
    { title: 'Pair Chat', description: 'Fast and secure version of ChatGPT.', link: "./pairchatproductpage" },
    { title: 'Transcribe', description: 'Record and summarise your meeting minutes.', link: "./transcribeproductpage" },
    { title: 'LaunchPad', description: 'Share your ideas.' , link: "./launchpadproductpage" },
    { title: 'ReadLiao', description: 'Simplify complicated letters for seniors.', link: "./readliaoproductpage" },
    { title: 'SmartCompose', description: 'Draft customer service replies in 5 minutes.', link: "./smartcomposeproductpage" }
    // Add more items as needed
];

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

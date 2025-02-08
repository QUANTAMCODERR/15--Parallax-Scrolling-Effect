// Get references to DOM elements
const modal = document.getElementById("modal");
const viewMoreButtons = document.querySelectorAll(".view-more");
const closeButton = document.querySelector(".close");
const additionalInfoDiv = document.getElementById("additional-info");
const plantImage = document.getElementById("plant-image");
let carouselInterval; // To store the interval ID

// Additional information and image arrays for each plant
const plantDetails = {
  Neem: {
    info: `
            <div class="plant-info">
                <h3>🌿 Plant Name: Neem</h3>
                <p>
                <h4>📝 Description:</h4>
                        Neem (Azadirachta indica) is a fast-growing tree known for its medicinal, agricultural, and cosmetic uses. It can grow up to 20-30 meters in height and has a dense crown of leaves.
                    </p>
                </section>
                
                <section class="botanical-details">
                    <h4>🌱 Botanical Details:</h4>
                    <ul>
                        <li><strong>Scientific Name:</strong> Azadirachta indica</li>
                        <li><strong>Family:</strong> Meliaceae</li>
                        <li><strong>Origin:</strong> Indian subcontinent</li>
                        <li><strong>Height:</strong> 20-30 meters</li>
                    </ul>
                </section>
    
                <section class="uses">
                    <h4>🌿 Uses:</h4>
                    <ul>
                        <li><strong>Medicinal:</strong> Treats skin conditions, ulcers, and infections.</li>
                        <li><strong>Agricultural:</strong> Natural pesticide and soil conditioner.</li>
                        <li><strong>Cosmetic:</strong> Used in soaps, creams, and hair oils.</li>
                    </ul>
                </section>
    
                <section class="benefits">
                    <h4>🌟 Benefits:</h4>
                    <p>
                        Neem has antibacterial, antifungal, and antiviral properties, making it valuable in natural remedies and agriculture.
                    </p>
                </section>
    
                <section class="habitat-growth">
                    <h4>🌏 Habitat and Growth Requirements:</h4>
                    <p>
                        Neem thrives in tropical and semi-tropical climates, preferring well-drained soil and full sunlight. It is highly drought-tolerant and grows well in various soils.
                    </p>
                </section>
    
                <section class="historical-significance">
                    <h4>📜 Historical Significance:</h4>
                    <p>
                        Neem has been a cornerstone of Ayurvedic medicine for over 2,000 years and is sacred in Indian culture.
                    </p>
                </section>
    
                <section class="conservation-status">
                    <h4>⚠️ Conservation Status:</h4>
                    <p>
                        Neem is not endangered and is widely cultivated due to its versatility and resilience.
                    </p>
                </section>
            </div>
        `,
    images: [
      "plants-images/neem4.jpg",
      "plants-images/neem1.JPG",
      "plants-images/neem2.jpg",
      "plants-images/neem3.JPG",
    ],
  },
  Teak: {
    info: `
            <h3>🌿 Plant Name: Teak</h3>
            <h4>📝 Description:</h4>
            <p>Teak is a large deciduous tree known for its durable wood and resistance to termites and pests. It is highly valued for making furniture, boats, and construction materials.</p>
            
            <h4>🌱 Botanical Details:</h4>
            <ul>
                <li><strong>Scientific Name:</strong> Tectona grandis</li>
                <li><strong>Family:</strong> Lamiaceae</li>
                <li><strong>Origin:</strong> South and Southeast Asia</li>
                <li><strong>Height:</strong> 20-40 meters</li>
            </ul>
    
            <h4>🌿 Uses:</h4>
            <ul>
                <li>Timber: Widely used in making furniture, doors, windows, and decks.</li>
                <li>Shipbuilding: Due to its water resistance.</li>
                <li>Medicinal: Bark extracts are used in traditional medicine to treat skin conditions and fevers.</li>
            </ul>
    
            <h4>🌟 Benefits:</h4>
            <p>Teak is resistant to decay, pests, and harsh weather conditions, making it ideal for long-term usage. It also contributes to carbon sequestration and provides shade in hot climates.</p>
    
            <h4>🌏 Habitat and Growth Requirements:</h4>
            <p>Teak thrives in tropical climates with moderate to high rainfall. It prefers well-drained alluvial soils and grows best in regions with distinct wet and dry seasons.</p>
    
            <h4>📜 Historical Significance:</h4>
            <p>Teak has been used since ancient times in Asia for shipbuilding and construction. It is often referred to as the "king of woods" due to its quality and durability.</p>
    
            <h4>⚠️ Conservation Status:</h4>
            <p>Teak is cultivated extensively in plantations, but natural forests are under pressure due to logging. Sustainable management practices are essential for its conservation.</p>
        `,
    images: [
      "path_to_teak_image1.jpg", // Replace with actual paths
      "path_to_teak_image2.jpg",
      "path_to_teak_image3.jpg",
    ],
  },
  Tulsi: {
    info: `
            <div class="plant-info">
                <h3>🌿 Plant Name: Tulsi (Holy Basil)</h3>
                <section class="description">
                    <h4>📝 Description:</h4>
                    <p>
                        Tulsi (Ocimum tenuiflorum) is revered in Indian culture and Ayurveda as the "Queen of Herbs." Known for its medicinal, spiritual, and culinary uses, it is a common household plant in India.
                    </p>
                </section>
                
                <section class="botanical-details">
                    <h4>🌱 Botanical Details:</h4>
                    <ul>
                        <li><strong>Scientific Name:</strong> Ocimum tenuiflorum</li>
                        <li><strong>Family:</strong> Lamiaceae</li>
                        <li><strong>Origin:</strong> Indian subcontinent</li>
                        <li><strong>Height:</strong> 30-60 cm</li>
                    </ul>
                </section>
    
                <section class="uses">
                    <h4>🌿 Uses:</h4>
                    <ul>
                        <li><strong>Medicinal:</strong> Treats colds, respiratory issues, and digestion problems.</li>
                        <li><strong>Spiritual:</strong> Used in rituals and offerings in Hindu traditions.</li>
                        <li><strong>Herbal Teas:</strong> Tulsi tea is consumed for its calming effects.</li>
                    </ul>
                </section>
    
                <section class="benefits">
                    <h4>🌟 Benefits:</h4>
                    <p>
                        Tulsi has adaptogenic properties, which help the body manage stress. It also boosts immunity, supports respiratory health, and improves digestion.
                    </p>
                </section>
    
                <section class="habitat-growth">
                    <h4>🌏 Habitat and Growth Requirements:</h4>
                    <p>
                        Tulsi grows in warm, tropical climates and thrives in well-drained soil. It requires regular watering and full sunlight for optimal growth.
                    </p>
                </section>
    
                <section class="historical-significance">
                    <h4>📜 Historical Significance:</h4>
                    <p>
                        Tulsi has been mentioned in ancient Indian texts like the Charaka Samhita and is considered an elixir of life in Ayurveda. It holds a sacred status in Hindu culture.
                    </p>
                </section>
    
                <section class="conservation-status">
                    <h4>⚠️ Conservation Status:</h4>
                    <p>
                        Tulsi is not endangered and is widely cultivated due to its medicinal and spiritual significance.
                    </p>
                </section>
            </div>
        `,
    images: [
      "plants-images/tulsi1.JPG",
      "plants-images/tulsi2.jpg",
      "plants-images/tulsi3.JPG",
      "plants-images/tulsi4.JPG",
    ],
  },
  Teak: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Teak (Sagwan)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            Teak, known as <strong>Sagwan (सागवान)</strong> in India, is a tropical hardwood tree renowned for its high-quality timber. It is widely used in furniture, shipbuilding, and construction due to its durability and resistance to termites.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Tectona grandis</li>
            <li><strong>Family:</strong> Lamiaceae</li>
            <li><strong>Origin:</strong> South and Southeast Asia</li>
            <li><strong>Height:</strong> 30-40 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Furniture:</strong> Popular for outdoor and indoor furniture due to its water-resistant properties.</li>
            <li><strong>Shipbuilding:</strong> Used for decks and other wooden parts of boats.</li>
            <li><strong>Construction:</strong> Preferred material for flooring, doors, and windows.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Teak is valued for its high natural oil content, which makes it resistant to decay, pests, and weather changes. It is also easy to work with and has a beautiful grain pattern.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            Teak thrives in tropical climates with a well-defined dry season. It prefers deep, well-drained alluvial soil and requires ample sunlight for optimal growth.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            Teak, or <strong>Sagwan</strong>, has been used for centuries in India and South Asia for shipbuilding and architecture. It was highly sought after by colonial powers for its durability and resistance to water.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            Teak is cultivated extensively in plantations, but natural forests are under pressure from deforestation. Sustainable management practices are critical for its conservation.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/sagvan.jpg",
      "plants-images/sagwan1.jpg",
      "plants-images/sagwan3.webp",
      "plants-images/sagwan2.webp",
      "plants-images/sagwan4.jpg",
      "plants-images/sagwan5.jpg",
    ],
  },
  Bhoma: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Bhoma (Awala)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            Bhoma, known as <strong>Awala (आवला)</strong> in Hindi, is a large evergreen tree (Alstonia scholaris), commonly called the Devil Tree. It is known for its medicinal uses and timber. Often planted along roadsides and in parks, it is valued for its dense canopy.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Alstonia scholaris</li>
            <li><strong>Family:</strong> Apocynaceae</li>
            <li><strong>Origin:</strong> Southeast Asia and the Indian subcontinent</li>
            <li><strong>Height:</strong> 25-40 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Medicinal:</strong> Bark extracts are used to treat respiratory ailments and fever.</li>
            <li><strong>Timber:</strong> Wood is used for making furniture, boards, and pencils.</li>
            <li><strong>Ornamental:</strong> Frequently planted in urban areas for shade and aesthetic appeal.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Bhoma, or Awala, is valued for its medicinal properties and its ability to improve air quality by absorbing pollutants. Its dense foliage provides excellent shade.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            Bhoma thrives in tropical and subtropical climates. It prefers well-drained soil and can tolerate both dry and wet conditions, making it highly adaptable.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            Bhoma, or Awala, has been traditionally used in Ayurvedic medicine and is mentioned in ancient texts for its therapeutic properties.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            Bhoma is not considered endangered and is widely cultivated in its native range.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/bhoma2.webp",
      "plants-images/bhoma3.webp",
      "plants-images/bhoma4.avif",
      "plants-images/bhoma5.jpg",
      "plants-images/bhoma1.jpg",
    ],
  },
  Banyan: {
    info: `
        <div class="plant-info">
    <h3>✯️ Plant Name: Banyan (Vat or Bargad)</h3>
    <section class="description">
        <h4>🖍 Description:</h4>
        <p>
            The Banyan tree (Ficus benghalensis), known as "Vat" (वट) or "Bargad" (बरगद) in Hindi, is a large, long-living tree recognized for its aerial roots that form a striking canopy. It is considered sacred in Indian culture and symbolizes wisdom and longevity.
        </p>
    </section>

    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Ficus benghalensis</li>
            <li><strong>Family:</strong> Moraceae</li>
            <li><strong>Origin:</strong> Indian subcontinent</li>
            <li><strong>Height:</strong> Can grow up to 20-25 meters, with a canopy spreading over acres.</li>
        </ul>
    </section>

    <section class="uses">
        <h4>✯️ Uses:</h4>
        <ul>
            <li><strong>Medicinal:</strong> Bark and leaves are used in Ayurvedic treatments for diabetes, dysentery, and ulcers.</li>
            <li><strong>Cultural:</strong> Used as a meeting spot and worship site in Indian villages.</li>
            <li><strong>Ecological:</strong> Provides habitat for various birds, insects, and small mammals.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            The Banyan tree is revered for its ability to support biodiversity. Its dense shade and oxygen output make it invaluable for both humans and wildlife.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            Banyan trees thrive in tropical and subtropical climates. They prefer fertile, well-drained soil and plenty of sunlight. Once established, they are drought-resistant and hardy.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            The Banyan is India's national tree and holds deep cultural significance. It symbolizes immortality and is often depicted in ancient scriptures and folklore.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            The Banyan tree is not endangered but is increasingly affected by urbanization and habitat loss.
        </p>
    </section>
</div>
    `,
    images: [
      "plants-images/banyan.jpg",
      "plants-images/banyan1.jpg",
      "plants-images/banyan2.webp",
      "plants-images/banyan4.jpg",
    ],
  },
  Jackfruit: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Jackfruit (Kathal, Phanas)</h3>
    <section class="description">
        <h4>🖍 Description:</h4>
        <p>
            The Jackfruit tree (Artocarpus heterophyllus), known as "Kathal" (कटहल) in Hindi and "Phanas" (फणस) in Marathi, produces the largest tree-borne fruit in the world, prized for its sweet and versatile flavor. It is widely grown in tropical regions and is a staple in many cuisines.
        </p>
    </section>

    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Artocarpus heterophyllus</li>
            <li><strong>Family:</strong> Moraceae</li>
            <li><strong>Origin:</strong> South and Southeast Asia</li>
            <li><strong>Height:</strong> Typically 8-25 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Edible:</strong> Ripe fruit is eaten fresh, and unripe fruit is used in savory dishes. Seeds are also roasted or boiled.</li>
            <li><strong>Wood:</strong> Jackfruit wood is used for making furniture and musical instruments.</li>
            <li><strong>Medicinal:</strong> Bark, leaves, and seeds are used in traditional medicine for various ailments.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Jackfruit is rich in dietary fiber, vitamins, and antioxidants, making it beneficial for digestion, immunity, and overall health. It is also a sustainable food source.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            Jackfruit trees thrive in tropical and subtropical climates. They prefer deep, well-drained, sandy or clay loam soils and require moderate rainfall and warm temperatures to flourish.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            Jackfruit has been cultivated for thousands of years in India and Southeast Asia. It is mentioned in ancient Sanskrit texts and is revered as a symbol of abundance.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            Jackfruit is not endangered and is widely cultivated, but deforestation and climate change could impact its natural habitat.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/jackfruit1.jpg",
      "plants-images/jackfruit4.webp",
      "plants-images/jackfruit3.webp",
      "plants-images/jackfruit.jpg",
    ],
  },
  PeepalTree: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: पीपल (Peepal Tree)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            The Peepal tree (Ficus religiosa), also known as the sacred fig, holds immense religious and cultural significance in India and Southeast Asia. It is a large, fast-growing deciduous tree with heart-shaped leaves.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Ficus religiosa</li>
            <li><strong>Family:</strong> Moraceae</li>
            <li><strong>Origin:</strong> Indian subcontinent</li>
            <li><strong>Height:</strong> Up to 30 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Religious:</strong> Revered in Hinduism, Buddhism, and Jainism; used in temples and ceremonies.</li>
            <li><strong>Medicinal:</strong> Treats respiratory issues, digestive problems, and skin ailments.</li>
            <li><strong>Environmental:</strong> Acts as a natural air purifier, releasing oxygen even at night.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            The Peepal tree is known for its ability to release oxygen 24/7, making it beneficial for the environment. Its bark, leaves, and fruits have numerous medicinal properties.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            The Peepal tree thrives in tropical and subtropical climates and can grow in a variety of soils. It requires minimal maintenance and is drought-tolerant.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            The Peepal tree is sacred in Indian culture and is associated with spiritual enlightenment. Buddha is believed to have attained enlightenment under a Peepal tree, known as the Bodhi tree.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            The Peepal tree is not endangered and is widely planted due to its cultural and environmental significance.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/peepaltree.JPG",
      "plants-images/pipal.jpg",
      "plants-images/pipal1.jpg",
      "plants-images/pipal2.jpg",
      "plants-images/pipal3.webp",
    ],
  },
  Pomegranate: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Pomegranate (अनार / Dalim)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            Pomegranate (Punica granatum) is a fruit-bearing shrub or small tree known for its bright red fruits filled with juicy, edible seeds. It is celebrated for its health benefits and cultural symbolism. The pomegranate is commonly referred to as "Anar" in Hindi and "Dalim" in Bengali.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Punica granatum</li>
            <li><strong>Family:</strong> Lythraceae</li>
            <li><strong>Origin:</strong> Iran to northern India</li>
            <li><strong>Height:</strong> 5-10 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Culinary:</strong> The seeds and juice are used in desserts, beverages, and cooking.</li>
            <li><strong>Medicinal:</strong> Rich in antioxidants; helps lower blood pressure and improve heart health.</li>
            <li><strong>Ornamental:</strong> Used as a decorative plant in gardens.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Pomegranate is packed with antioxidants, vitamins, and minerals, making it a superfood. It supports digestion, boosts immunity, and promotes healthy skin. In India, it is also considered a symbol of prosperity and fertility.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            Pomegranate thrives in arid and semi-arid climates. It prefers well-drained, loamy soil and requires full sunlight to produce abundant fruits. In India, it is commonly found in regions with dry or temperate climates such as Rajasthan and Gujarat.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            Pomegranate has been cultivated since ancient times and is often mentioned in mythology and religious texts as a symbol of fertility, abundance, and eternal life. In India, it holds cultural significance and is often seen in festivals, offering rituals, and artwork.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            Pomegranate is widely cultivated and is not at risk of extinction. It is also an integral part of Indian agriculture, grown in many states for both domestic consumption and export.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/pomo.jpg",
      "plants-images/pomo1.jpg",
      "plants-images/pomo2.jpg",
      "plants-images/pomo4.jpg",
    ],
  },
  Champak: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Champak (चंपा / Chompa)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            Champak (Magnolia champaca) is a fragrant flowering tree known for its bright yellow or orange blossoms. It is valued for its ornamental beauty and cultural significance in many parts of Asia, particularly in India, where it is called "Champa" in Hindi and "Chompa" in Bengali.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Magnolia champaca</li>
            <li><strong>Family:</strong> Magnoliaceae</li>
            <li><strong>Origin:</strong> South and Southeast Asia</li>
            <li><strong>Height:</strong> 15-30 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Aromatic:</strong> Flowers are used in perfumes and essential oils.</li>
            <li><strong>Cultural:</strong> Used in religious ceremonies and as garlands during festivals like Ganesh Chaturthi and other Hindu rituals.</li>
            <li><strong>Ornamental:</strong> Planted in gardens and parks for its beauty and fragrance.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Champak flowers have a calming fragrance, which is believed to reduce stress. The tree also supports biodiversity by providing habitat for birds and insects. It is considered a symbol of beauty and love in Indian culture.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            Champak thrives in tropical and subtropical climates. It prefers rich, well-drained soil and needs full to partial sunlight for optimal growth. In India, it is commonly found in gardens, temples, and parks across states with warmer climates like Kerala and Tamil Nadu.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            The Champak flower is deeply ingrained in Indian culture and mythology, symbolizing love, beauty, and purity. It is often mentioned in ancient texts and poetry, as well as in Hindu religious rituals, where the flower is used in offerings to deities.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            Champak is not endangered but is cultivated extensively for its fragrant flowers and ornamental value. It is protected in some areas due to its cultural significance and aesthetic value.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/champ2.webp",
      "plants-images/cham1.jpg",
      "plants-images/cham.webp",
    ],
  },
  Panama: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Jamun (Jambul)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            The Jamun tree (Syzygium cumini) is a tropical evergreen tree known for its dark purple or black fruit, commonly called the "Indian Blackberry." The fruit is rich in nutrients and is prized for its health benefits. The tree has dense foliage and is often found in tropical and subtropical regions.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Syzygium cumini</li>
            <li><strong>Family:</strong> Myrtaceae</li>
            <li><strong>Origin:</strong> Indian Subcontinent</li>
            <li><strong>Height:</strong> 10-30 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Culinary:</strong> The fruit is used to make jams, juices, and traditional Indian sweets.</li>
            <li><strong>Medicinal:</strong> The fruit, seeds, and bark have been traditionally used to treat various ailments like diabetes, digestive problems, and throat infections.</li>
            <li><strong>Ornamental:</strong> Planted for shade and as a decorative tree in gardens and parks.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Jamun is a powerful superfood that is rich in antioxidants, vitamins, and minerals. It is known for its ability to manage blood sugar levels, improve digestion, and boost immunity.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            The Jamun tree thrives in tropical and subtropical climates. It prefers well-drained soil and requires full sunlight for optimal growth. It is highly resilient to drought once established.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            The Jamun tree has been revered in Indian culture for centuries. It is often mentioned in ancient texts and is associated with mythology and traditional medicine.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            The Jamun tree is not endangered and is commonly cultivated throughout its native range. It faces minimal threats but is occasionally impacted by deforestation and land use changes.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/jamun.JPG",
      "plants-images/jamun2.jpeg",
      "plants-images/jamun1.webp",
    ],
  },
  Burflower: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Burflower (Kadam) / कदंब</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            The Burflower tree (Anthocephalus cadamba), commonly known as Kadam (कदंब), is a large deciduous tree known for its fragrant flowers. It is native to the tropical regions of Asia and is revered for its ornamental beauty and medicinal properties.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Anthocephalus cadamba</li>
            <li><strong>Family:</strong> Rubiaceae</li>
            <li><strong>Origin:</strong> Southeast Asia</li>
            <li><strong>Height:</strong> 15-30 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Medicinal:</strong> Used in traditional medicine for treating fevers, coughs, and skin diseases.</li>
            <li><strong>Wood:</strong> Softwood used for making furniture and pulpwood.</li>
            <li><strong>Ornamental:</strong> Popular for landscaping due to its attractive flowers.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Kadam (कदंब) is valued for its medicinal properties, especially in treating skin ailments and fevers. Its flowers are also known for their soothing fragrance, which makes it popular in gardens and temples.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            The Kadam tree grows best in tropical and subtropical climates, preferring moist, well-drained soil and full sunlight. It thrives in areas with a moderate to high amount of rainfall.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            Kadam (कदंब) has cultural significance in India and Southeast Asia, where it is considered sacred and is often planted near temples. Its fragrant flowers have been used in religious rituals for centuries.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            The Kadam tree is not endangered but is affected by habitat destruction in some parts of its native range.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/burf1.jpg",
      "plants-images/burf2.jpg",
      "plants-images/burf3.jpg",
      "plants-images/burf.jpg",
    ],
  },
  BauhiniaForficata: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Bauhinia Forficata (बौहिनिया फॉरफिकेटा)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            Bauhinia forficata, also known as the "Brazilian Orchid Tree" or "Kachnar" in India, is a flowering tree native to Brazil and other parts of South America. It is known for its striking orchid-like flowers and is often grown for ornamental purposes. The tree's leaves are often used in traditional medicine in India.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Bauhinia forficata</li>
            <li><strong>Family:</strong> Fabaceae</li>
            <li><strong>Origin:</strong> South America (Brazil, Argentina)</li>
            <li><strong>Height:</strong> 5-8 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Medicinal:</strong> Used in traditional medicine in India to treat diabetes, inflammation, and digestive disorders. Its leaves and flowers have therapeutic benefits.</li>
            <li><strong>Ornamental:</strong> Popular in landscaping and gardens for its vibrant, orchid-like flowers.</li>
            <li><strong>Wood:</strong> The wood is used for crafting and making small items and furniture.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Bauhinia forficata is highly valued for its medicinal uses, especially for its anti-inflammatory and hypoglycemic properties. It is also known for improving the aesthetic appeal of gardens due to its striking flowers.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            The tree thrives in tropical and subtropical climates and is well-suited for Indian regions with a moderate to warm climate. It prefers well-drained, slightly acidic soil and requires full sunlight and moderate rainfall for healthy growth.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            In India, Bauhinia forficata is recognized for its medicinal properties and has been used in Ayurvedic and traditional medicine practices for centuries. It is sometimes referred to as "Kachnar," a name associated with the common Bauhinia species found in India.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            Bauhinia forficata is not considered endangered but is affected by habitat destruction in certain areas, particularly in its native regions in South America.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/bahu.webp",
      "plants-images/bahu1.webp",
      "plants-images/bahu2.webp",
      "plants-images/bahu3.webp",
    ],
  },
  MangiferaCaesia: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Gulmohar Tree (Delonix regia)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            The Gulmohar tree (Delonix regia), commonly known as the Flame Tree, is a tropical tree known for its vibrant and flamboyant red-orange flowers. It is native to Madagascar but is widely grown in tropical and subtropical regions, especially in India. The tree's canopy provides dense shade, and it is often planted for ornamental purposes due to its striking beauty.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Delonix regia</li>
            <li><strong>Family:</strong> Fabaceae</li>
            <li><strong>Origin:</strong> Madagascar (widely cultivated in tropical regions)</li>
            <li><strong>Height:</strong> 8-12 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Ornamental:</strong> The Gulmohar tree is mainly planted for its stunning red-orange flowers, often used in landscaping and parks.</li>
            <li><strong>Shade:</strong> It provides excellent shade due to its wide, spreading canopy, making it ideal for roadside planting and public spaces.</li>
            <li><strong>Wood:</strong> The wood of the Gulmohar tree is used for making furniture and crafts, although it is not as durable as other hardwoods.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            The Gulmohar tree is valued for its beauty and provides ecological benefits, including promoting biodiversity. It also offers shade and helps in improving the aesthetic quality of urban and suburban areas.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            The Gulmohar tree thrives in tropical and subtropical climates and prefers well-drained, sandy soil. It requires full sunlight for optimal flowering and is tolerant of dry conditions, although it grows best in areas with moderate rainfall.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            The Gulmohar tree has become a symbol of beauty and resilience in many tropical and subtropical regions. It is often planted in urban areas for shade and aesthetic purposes and holds cultural significance in countries like India.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            The Gulmohar tree is not considered endangered and is widely planted in tropical regions around the world. However, it faces some threats from deforestation in its native areas.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/GulmoharTree.JPG",
      "plants-images/gul.jpg",
      "plants-images/gul1.jpg",
      "plants-images/gul2.jpg",
    ],
  },
  CurryTree: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Curry Tree</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    The curry tree (Murraya koenigii) is a small tropical tree native to the Indian subcontinent, known for its aromatic leaves used in Indian cuisine. The leaves have a distinct fragrance and are an essential ingredient in many dishes.
                </p>
            </section>
            
            <section class="botanical-details">
                <h4>🌱 Botanical Details:</h4>
                <ul>
                    <li><strong>Scientific Name:</strong> Murraya koenigii</li>
                    <li><strong>Family:</strong> Rutaceae</li>
                    <li><strong>Origin:</strong> Indian subcontinent</li>
                    <li><strong>Height:</strong> 4-6 meters</li>
                </ul>
            </section>

            <section class="uses">
                <h4>🌿 Uses:</h4>
                <ul>
                    <li><strong>Culinary:</strong> The leaves are used in curries, soups, and chutneys for their unique flavor.</li>
                    <li><strong>Medicinal:</strong> The leaves are used in traditional medicine for treating digestive issues, diabetes, and skin problems.</li>
                    <li><strong>Essential Oils:</strong> Oil extracted from the leaves has antibacterial properties and is used in cosmetics and aromatherapy.</li>
                </ul>
            </section>

            <section class="benefits">
                <h4>🌟 Benefits:</h4>
                <p>
                    The curry tree's leaves are rich in antioxidants, vitamins, and minerals, supporting overall health, improving digestion, and promoting healthy skin.
                </p>
            </section>

            <section class="habitat-growth">
                <h4>🌏 Habitat and Growth Requirements:</h4>
                <p>
                    The curry tree thrives in tropical and subtropical climates. It prefers well-drained, fertile soil and needs full sunlight for optimal growth. It is relatively drought-tolerant once established.
                </p>
            </section>

            <section class="historical-significance">
                <h4>📜 Historical Significance:</h4>
                <p>
                    The curry tree has been a staple in Indian culinary traditions for centuries, valued both for its unique flavor and medicinal properties.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    The curry tree is not endangered and is widely cultivated throughout the Indian subcontinent and other tropical regions.
                </p>
            </section>
        </div>
    `,
    images: [
      "plants-images/cur.jpg",
      "plants-images/cur1.jpg",
      "plants-images/cur2.jpg",
    ],
  },
  Mango: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Mango</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    The mango tree (Mangifera indica) is a tropical fruit-bearing tree known for its sweet and tangy fruits. It is native to South Asia but is now grown worldwide in tropical and subtropical regions.
                </p>
            </section>
            
            <section class="botanical-details">
                <h4>🌱 Botanical Details:</h4>
                <ul>
                    <li><strong>Scientific Name:</strong> Mangifera indica</li>
                    <li><strong>Family:</strong> Anacardiaceae</li>
                    <li><strong>Origin:</strong> South Asia</li>
                    <li><strong>Height:</strong> 10-40 meters</li>
                </ul>
            </section>

            <section class="uses">
                <h4>🌿 Uses:</h4>
                <ul>
                    <li><strong>Culinary:</strong> Mangoes are consumed fresh, in smoothies, desserts, chutneys, and salads.</li>
                    <li><strong>Medicinal:</strong> Mango leaves are used in traditional medicine for treating diabetes and digestive issues.</li>
                    <li><strong>Wood:</strong> The wood of the mango tree is used in furniture and carvings.</li>
                </ul>
            </section>

            <section class="benefits">
                <h4>🌟 Benefits:</h4>
                <p>
                    Mangoes are rich in vitamins A and C, antioxidants, and dietary fiber, which promote good digestion, skin health, and immune system support.
                </p>
            </section>

            <section class="habitat-growth">
                <h4>🌏 Habitat and Growth Requirements:</h4>
                <p>
                    Mango trees thrive in tropical and subtropical climates with well-drained soil and plenty of sunlight. They are not frost-tolerant and prefer hot, humid conditions.
                </p>
            </section>

            <section class="historical-significance">
                <h4>📜 Historical Significance:</h4>
                <p>
                    Mangoes have been cultivated for over 4,000 years in South Asia and have spread to other tropical regions. They hold cultural and religious significance in many parts of the world.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    Mango trees are not endangered and are widely grown for both commercial and personal use.
                </p>
            </section>
        </div>
    `,
    images: [
      "plants-images/man.jpg",
      "plants-images/man.webp",
      "plants-images/man1.jpg",
      "plants-images/man2.webp",
    ],
  },
  AlbiziaChinensis: {
    info: `
        <div class="plant-info">
    <h3>🌿 Plant Name: Malabar Nut Tree (Justicia adhatoda)</h3>
    <section class="description">
        <h4>📝 Description:</h4>
        <p>
            The Malabar Nut Tree, scientifically known as <em>Justicia adhatoda</em>, is a medicinal shrub native to South Asia, particularly India and Sri Lanka. It is renowned for its therapeutic properties, especially in Ayurveda, where it is widely used for respiratory ailments.
        </p>
    </section>
    
    <section class="botanical-details">
        <h4>🌱 Botanical Details:</h4>
        <ul>
            <li><strong>Scientific Name:</strong> Justicia adhatoda</li>
            <li><strong>Family:</strong> Acanthaceae</li>
            <li><strong>Origin:</strong> South Asia</li>
            <li><strong>Height:</strong> 2-5 meters</li>
        </ul>
    </section>

    <section class="uses">
        <h4>🌿 Uses:</h4>
        <ul>
            <li><strong>Medicinal:</strong> The leaves of the Malabar Nut Tree are used in treating asthma, bronchitis, and cough due to their bronchodilator and expectorant properties.</li>
            <li><strong>Herbal Remedies:</strong> Extracts from the plant are also used for skin ailments, fever, and digestive disorders.</li>
            <li><strong>Environmental:</strong> The plant is used for its ability to prevent soil erosion and improve biodiversity in tropical gardens.</li>
        </ul>
    </section>

    <section class="benefits">
        <h4>🌟 Benefits:</h4>
        <p>
            Known for its strong medicinal properties, the Malabar Nut Tree is especially valued in Ayurveda for improving respiratory health. It also contributes to soil stabilization and supports biodiversity.
        </p>
    </section>

    <section class="habitat-growth">
        <h4>🌏 Habitat and Growth Requirements:</h4>
        <p>
            The Malabar Nut Tree thrives in tropical and subtropical regions. It grows well in well-drained, fertile soil and prefers a warm, humid climate. It can tolerate partial shade but thrives in full sunlight.
        </p>
    </section>

    <section class="historical-significance">
        <h4>📜 Historical Significance:</h4>
        <p>
            The plant has been a cornerstone of traditional Indian medicine for centuries. It is frequently mentioned in ancient Ayurvedic texts as a remedy for respiratory and inflammatory conditions.
        </p>
    </section>

    <section class="conservation-status">
        <h4>⚠️ Conservation Status:</h4>
        <p>
            The Malabar Nut Tree is not endangered and is widely cultivated in its native regions for its medicinal properties and ecological benefits.
        </p>
    </section>
</div>

    `,
    images: [
      "plants-images/malabar nuts.JPG",
      "plants-images/malabar nutss.JPG",
      "plants-images/nuts.jpg",
      "plants-images/nut.webp",
    ],
  },

  // Add more plants here...
};

// Function to start the image carousel
function startImageCarousel(images) {
  let currentImageIndex = 0;

  // Set the initial image
  plantImage.src = images[currentImageIndex];
  plantImage.alt = `Image ${currentImageIndex + 1}`;

  // Clear any existing interval
  clearInterval(carouselInterval);

  // Start the interval to change the image
  carouselInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    plantImage.src = images[currentImageIndex];
    plantImage.alt = `Image ${currentImageIndex + 1}`;
  }, 3000); // Change image every 3 seconds
}

// Open modal and populate with details and start carousel
viewMoreButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const plantName = event.target.dataset.plant;

    if (plantDetails[plantName]) {
      // Set the information content
      additionalInfoDiv.innerHTML = plantDetails[plantName].info;

      // Start the image carousel
      startImageCarousel(plantDetails[plantName].images);
    } else {
      additionalInfoDiv.innerHTML = `<p>No information available for ${plantName}.</p>`;
      plantImage.src = "";
      plantImage.alt = "No Image Available";
    }

    modal.style.display = "block";
  });
});

// Close modal on button click
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  clearInterval(carouselInterval); // Stop the image carousel
});

// Close modal if clicked outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    clearInterval(carouselInterval); // Stop the image carousel
  }
});

// demo trial

// Get references to DOM elements
const modal = document.getElementById('modal');
const viewMoreButtons = document.querySelectorAll('.view-more');
const closeButton = document.querySelector('.close');
const additionalInfoDiv = document.getElementById('additional-info');
const plantImage = document.getElementById('plant-image');
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
            'assets/babul.jpg', 
            'assets/tulsi.JPG', 
            'assets/sagvan.JPG'
        ],
    }
    ,
    Tulsi: {
        info: `
            <h3>🌿 Plant Name: Tulsi (Holy Basil)</h3>
            <h4>📝 Description:</h4>
            <p>Tulsi is revered in Indian culture and Ayurveda as a "Queen of Herbs." Its leaves and seeds are highly medicinal, and it is often grown in Indian households for spiritual purposes.</p>
            
            <h4>🌱 Botanical Details:</h4>
            <ul>
                <li><strong>Scientific Name:</strong> Ocimum tenuiflorum</li>
                <li><strong>Family:</strong> Lamiaceae</li>
                <li><strong>Origin:</strong> Indian subcontinent</li>
                <li><strong>Height:</strong> 30-60 cm</li>
            </ul>

            <h4>🌿 Uses:</h4>
            <ul>
                <li>Medicinal: Treats colds, respiratory issues, and digestion problems.</li>
                <li>Spiritual: Used in rituals and offerings in Hindu traditions.</li>
                <li>Herbal Teas: Tulsi tea is consumed for its calming effects.</li>
            </ul>

            <h4>🌟 Benefits:</h4>
            <p>Tulsi has adaptogenic properties, helping the body manage stress. It also boosts immunity and supports respiratory health.</p>

            <h4>🌏 Habitat and Growth Requirements:</h4>
            <p>Tulsi grows in warm, tropical climates and prefers well-drained soil. It requires regular watering and thrives in sunlight.</p>

            <h4>📜 Historical Significance:</h4>
            <p>Tulsi has been mentioned in ancient texts like the Charaka Samhita and is considered an elixir of life in Indian traditions.</p>

            <h4>⚠️ Conservation Status:</h4>
            <p>Tulsi is not endangered and is widely cultivated for its medicinal and spiritual significance.</p>
        `,
        images: [
            'path_to_tulsi_image1.jpg', // Replace with actual paths
            'path_to_tulsi_image2.jpg',
            'path_to_tulsi_image3.jpg',
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
            'path_to_teak_image1.jpg', // Replace with actual paths
            'path_to_teak_image2.jpg',
            'path_to_teak_image3.jpg',
        ],
    },Tulsi: {
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
            'path_to_tulsi_image1.jpg', 
            'path_to_tulsi_image2.jpg', 
            'path_to_tulsi_image3.jpg'
        ],
    },Teak: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Teak</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    Teak (Tectona grandis) is a tropical hardwood tree renowned for its high-quality timber. It is widely used in furniture, shipbuilding, and construction due to its durability and resistance to termites.
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
                    Teak has been used for centuries in South Asia for shipbuilding and architecture. It was highly sought after by colonial powers for its durability and resistance to water.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    Teak is cultivated extensively in plantations but natural forests are under pressure from deforestation. Sustainable management practices are critical for its conservation.
                </p>
            </section>
        </div>
    `,
    images: [
        'path_to_teak_image1.jpg', 
        'path_to_teak_image2.jpg', 
        'path_to_teak_image3.jpg'
    ],
},Bhoma: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Bhoma</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    Bhoma (Alstonia scholaris), commonly known as the Devil Tree, is a large evergreen tree known for its medicinal uses and timber. It is often planted along roadsides and in parks due to its dense canopy.
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
                    Bhoma is valued for its medicinal properties and its ability to improve air quality by absorbing pollutants. Its dense foliage provides excellent shade.
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
                    Bhoma has been traditionally used in Ayurvedic medicine and is mentioned in ancient texts for its therapeutic properties.
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
        'path_to_bhoma_image1.jpg', 
        'path_to_bhoma_image2.jpg', 
        'path_to_bhoma_image3.jpg'
    ],
},
Banyan: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Banyan</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    The Banyan tree (Ficus benghalensis) is a large, long-living tree known for its aerial roots that create a striking canopy. It is considered sacred in Indian culture and is often associated with wisdom and longevity.
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
                <h4>🌿 Uses:</h4>
                <ul>
                    <li><strong>Medicinal:</strong> Bark and leaves are used in Ayurvedic treatments for diabetes, dysentery, and ulcers.</li>
                    <li><strong>Cultural:</strong> Used as a meeting spot and worship site in Indian villages.</li>
                    <li><strong>Ecological:</strong> Provides habitat for various birds, insects, and small mammals.</li>
                </ul>
            </section>

            <section class="benefits">
                <h4>🌟 Benefits:</h4>
                <p>
                    The Banyan tree is revered for its ability to support biodiversity. Its dense shade and oxygen output make it valuable for both humans and wildlife.
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
        'path_to_banyan_image1.jpg', 
        'path_to_banyan_image2.jpg', 
        'path_to_banyan_image3.jpg'
    ],
}
,Jackfruit: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Jackfruit</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    The Jackfruit tree (Artocarpus heterophyllus) produces the largest tree-borne fruit in the world, prized for its sweet and versatile flavor. It is widely grown in tropical regions and is a staple in many cuisines.
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
        'path_to_jackfruit_image1.jpg', 
        'path_to_jackfruit_image2.jpg', 
        'path_to_jackfruit_image3.jpg'
    ],
}
,PeepalTree: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Peepal Tree</h3>
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
        'path_to_peepal_image1.jpg', 
        'path_to_peepal_image2.jpg', 
        'path_to_peepal_image3.jpg'
    ],
}
,Pomegranate: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Pomegranate</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    Pomegranate (Punica granatum) is a fruit-bearing shrub or small tree known for its bright red fruits filled with juicy, edible seeds. It is celebrated for its health benefits and cultural symbolism.
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
                    Pomegranate is packed with antioxidants, vitamins, and minerals, making it a superfood. It supports digestion, boosts immunity, and promotes healthy skin.
                </p>
            </section>

            <section class="habitat-growth">
                <h4>🌏 Habitat and Growth Requirements:</h4>
                <p>
                    Pomegranate thrives in arid and semi-arid climates. It prefers well-drained, loamy soil and requires full sunlight to produce abundant fruits.
                </p>
            </section>

            <section class="historical-significance">
                <h4>📜 Historical Significance:</h4>
                <p>
                    Pomegranate has been cultivated since ancient times and is often mentioned in mythology and religious texts as a symbol of fertility, abundance, and eternal life.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    Pomegranate is widely cultivated and is not at risk of extinction.
                </p>
            </section>
        </div>
    `,
    images: [
        'path_to_pomegranate_image1.jpg', 
        'path_to_pomegranate_image2.jpg', 
        'path_to_pomegranate_image3.jpg'
    ],
}
,Champak: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Champak</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    Champak (Magnolia champaca) is a fragrant flowering tree known for its bright yellow or orange blossoms. It is valued for its ornamental beauty and cultural significance in many parts of Asia.
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
                    <li><strong>Cultural:</strong> Used in religious ceremonies and as garlands.</li>
                    <li><strong>Ornamental:</strong> Planted in gardens and parks for its beauty.</li>
                </ul>
            </section>

            <section class="benefits">
                <h4>🌟 Benefits:</h4>
                <p>
                    Champak flowers have a calming fragrance, which is believed to reduce stress. The tree also supports biodiversity by providing habitat for birds and insects.
                </p>
            </section>

            <section class="habitat-growth">
                <h4>🌏 Habitat and Growth Requirements:</h4>
                <p>
                    Champak thrives in tropical and subtropical climates. It prefers rich, well-drained soil and needs full to partial sunlight for optimal growth.
                </p>
            </section>

            <section class="historical-significance">
                <h4>📜 Historical Significance:</h4>
                <p>
                    The Champak flower is deeply ingrained in Indian culture and mythology, symbolizing love and beauty. It is often mentioned in ancient texts and poetry.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    Champak is not endangered but is cultivated extensively for its fragrant flowers and ornamental value.
                </p>
            </section>
        </div>
    `,
    images: [
        'path_to_champak_image1.jpg', 
        'path_to_champak_image2.jpg', 
        'path_to_champak_image3.jpg'
    ],
}
,Panama : {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Panama Rubber Tree</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    The Panama Rubber Tree (Castilla elastica) is a tropical tree known for its latex production, which was historically used to make natural rubber. It has a spreading crown and is notable for its large leaves.
                </p>
            </section>
            
            <section class="botanical-details">
                <h4>🌱 Botanical Details:</h4>
                <ul>
                    <li><strong>Scientific Name:</strong> Castilla elastica</li>
                    <li><strong>Family:</strong> Moraceae</li>
                    <li><strong>Origin:</strong> Central and South America</li>
                    <li><strong>Height:</strong> 20-30 meters</li>
                </ul>
            </section>

            <section class="uses">
                <h4>🌿 Uses:</h4>
                <ul>
                    <li><strong>Industrial:</strong> Source of latex for rubber production.</li>
                    <li><strong>Cultural:</strong> Used in traditional rituals by indigenous communities.</li>
                    <li><strong>Ecological:</strong> Provides habitat and shade in tropical forests.</li>
                </ul>
            </section>

            <section class="benefits">
                <h4>🌟 Benefits:</h4>
                <p>
                    The Panama Rubber Tree is a key resource for natural rubber and contributes to the ecological health of tropical forests by supporting biodiversity.
                </p>
            </section>

            <section class="habitat-growth">
                <h4>🌏 Habitat and Growth Requirements:</h4>
                <p>
                    This tree thrives in warm, humid tropical climates with rich, well-drained soils. It requires consistent rainfall and prefers lowland areas.
                </p>
            </section>

            <section class="historical-significance">
                <h4>📜 Historical Significance:</h4>
                <p>
                    The Panama Rubber Tree played a crucial role in the early rubber industry, providing latex that was tapped and processed for various uses. It holds cultural significance in indigenous practices.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    The tree is not considered endangered but faces challenges from habitat loss due to deforestation.
                </p>
            </section>
        </div>
    `,
    images: [
        'path_to_panama_rubber_tree_image1.jpg', 
        'path_to_panama_rubber_tree_image2.jpg', 
        'path_to_panama_rubber_tree_image3.jpg'
    ],
}
,Burflower: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Burflower (Kadam)</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    The Burflower tree (Anthocephalus cadamba), commonly known as Kadam, is a large deciduous tree known for its fragrant flowers. It is native to the tropical regions of Asia and is revered for its ornamental beauty and medicinal properties.
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
                    Kadam is valued for its medicinal properties, especially in treating skin ailments and fevers. Its flowers are also known for their soothing fragrance, which makes it popular in gardens and temples.
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
                    Kadam has cultural significance in India and Southeast Asia, where it is considered sacred and is often planted near temples. Its fragrant flowers have been used in religious rituals for centuries.
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
        'path_to_kadam_tree_image1.jpg', 
        'path_to_kadam_tree_image2.jpg', 
        'path_to_kadam_tree_image3.jpg'
    ],
}
,BauhiniaForficata: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Bauhinia Forficata</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    Bauhinia forficata, also known as the "Brazilian Orchid Tree," is a flowering tree native to Brazil and other parts of South America. It is known for its striking orchid-like flowers and is often grown for ornamental purposes.
                </p>
            </section>
            
            <section class="botanical-details">
                <h4>🌱 Botanical Details:</h4>
                <ul>
                    <li><strong>Scientific Name:</strong> Bauhinia forficata</li>
                    <li><strong>Family:</strong> Fabaceae</li>
                    <li><strong>Origin:</strong> South America</li>
                    <li><strong>Height:</strong> 5-8 meters</li>
                </ul>
            </section>

            <section class="uses">
                <h4>🌿 Uses:</h4>
                <ul>
                    <li><strong>Medicinal:</strong> Used in traditional medicine to treat diabetes, inflammation, and digestive disorders.</li>
                    <li><strong>Ornamental:</strong> Popular in landscaping for its beautiful flowers.</li>
                    <li><strong>Wood:</strong> The wood is used for making furniture and crafting items.</li>
                </ul>
            </section>

            <section class="benefits">
                <h4>🌟 Benefits:</h4>
                <p>
                    Bauhinia forficata is valued for its medicinal uses, particularly for its anti-inflammatory and hypoglycemic properties. It also enhances the aesthetic appeal of gardens with its colorful, orchid-like flowers.
                </p>
            </section>

            <section class="habitat-growth">
                <h4>🌏 Habitat and Growth Requirements:</h4>
                <p>
                    This tree thrives in tropical and subtropical climates, preferring well-drained, slightly acidic soil. It needs full sunlight and moderate rainfall to grow well.
                </p>
            </section>

            <section class="historical-significance">
                <h4>📜 Historical Significance:</h4>
                <p>
                    Bauhinia forficata has been used in traditional South American medicine for centuries and is culturally significant in many regions of Brazil.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    The tree is not considered endangered but faces threats from habitat destruction in some areas.
                </p>
            </section>
        </div>
    `,
    images: [
        'path_to_bauhinia_image1.jpg', 
        'path_to_bauhinia_image2.jpg', 
        'path_to_bauhinia_image3.jpg'
    ],
}
,MangiferaCaesia: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Mangifera Caesia</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    Mangifera caesia, commonly known as the "Yellow Mango" or "Irai Mango," is a tropical fruit-bearing tree found in Southeast Asia. It is closely related to the mango and produces a sweet, aromatic fruit.
                </p>
            </section>
            
            <section class="botanical-details">
                <h4>🌱 Botanical Details:</h4>
                <ul>
                    <li><strong>Scientific Name:</strong> Mangifera caesia</li>
                    <li><strong>Family:</strong> Anacardiaceae</li>
                    <li><strong>Origin:</strong> Southeast Asia</li>
                    <li><strong>Height:</strong> 10-20 meters</li>
                </ul>
            </section>

            <section class="uses">
                <h4>🌿 Uses:</h4>
                <ul>
                    <li><strong>Fruit:</strong> The fruit is edible and is used in jams, juices, and traditional desserts.</li>
                    <li><strong>Medicinal:</strong> The tree's bark and leaves are used in traditional medicine for treating digestive problems and inflammation.</li>
                    <li><strong>Wood:</strong> The wood is used in construction and for making furniture.</li>
                </ul>
            </section>

            <section class="benefits">
                <h4>🌟 Benefits:</h4>
                <p>
                    Mangifera caesia provides a variety of health benefits, including improving digestion and reducing inflammation. Its fruit is rich in vitamins and antioxidants, making it a nutritious addition to the diet.
                </p>
            </section>

            <section class="habitat-growth">
                <h4>🌏 Habitat and Growth Requirements:</h4>
                <p>
                    The tree thrives in tropical climates and requires well-drained soil. It prefers full sunlight and regular rainfall to ensure healthy growth.
                </p>
            </section>

            <section class="historical-significance">
                <h4>📜 Historical Significance:</h4>
                <p>
                    Mangifera caesia has been cultivated in Southeast Asia for centuries and holds cultural significance in various regions, especially in traditional cuisine and medicinal practices.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    The species is not endangered but faces some pressures due to deforestation and habitat loss in its native regions.
                </p>
            </section>
        </div>
    `,
    images: [
        'path_to_mangifera_image1.jpg', 
        'path_to_mangifera_image2.jpg', 
        'path_to_mangifera_image3.jpg'
    ],
},CurryTree: {
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
        'path_to_curry_tree_image1.jpg', 
        'path_to_curry_tree_image2.jpg', 
        'path_to_curry_tree_image3.jpg'
    ],
}
,Mango: {
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
        'path_to_mango_tree_image1.jpg', 
        'path_to_mango_tree_image2.jpg', 
        'path_to_mango_tree_image3.jpg'
    ],
}
,AlbiziaChinensis: {
    info: `
        <div class="plant-info">
            <h3>🌿 Plant Name: Albizia Chinensis</h3>
            <section class="description">
                <h4>📝 Description:</h4>
                <p>
                    Albizia Chinensis, commonly known as the Chinese Albizia or Siris tree, is a fast-growing tree species native to Southeast Asia. It is known for its beautiful, feathery flowers and its use in traditional medicine.
                </p>
            </section>
            
            <section class="botanical-details">
                <h4>🌱 Botanical Details:</h4>
                <ul>
                    <li><strong>Scientific Name:</strong> Albizia chinensis</li>
                    <li><strong>Family:</strong> Fabaceae</li>
                    <li><strong>Origin:</strong> Southeast Asia</li>
                    <li><strong>Height:</strong> 10-20 meters</li>
                </ul>
            </section>

            <section class="uses">
                <h4>🌿 Uses:</h4>
                <ul>
                    <li><strong>Medicinal:</strong> Used in traditional medicine for treating fever, pain, and inflammation.</li>
                    <li><strong>Timber:</strong> The wood is used for construction, making furniture, and crafting.</li>
                    <li><strong>Ornamental:</strong> Albizia Chinensis is planted for its ornamental value, especially its attractive flowers.</li>
                </ul>
            </section>

            <section class="benefits">
                <h4>🌟 Benefits:</h4>
                <p>
                    The tree is known for its ability to fix nitrogen in the soil, improving soil fertility. It also provides shade and helps prevent soil erosion.
                </p>
            </section>

            <section class="habitat-growth">
                <h4>🌏 Habitat and Growth Requirements:</h4>
                <p>
                    Albizia Chinensis thrives in tropical and subtropical climates, preferring well-drained, fertile soil. It requires full sunlight and moderate rainfall.
                </p>
            </section>

            <section class="historical-significance">
                <h4>📜 Historical Significance:</h4>
                <p>
                    This tree has been used in traditional medicine in Southeast Asia for centuries, particularly in Chinese and Ayurvedic medicine.
                </p>
            </section>

            <section class="conservation-status">
                <h4>⚠️ Conservation Status:</h4>
                <p>
                    Albizia Chinensis is not endangered and is widely cultivated in its native region and other tropical areas for its ecological and medicinal properties.
                </p>
            </section>
        </div>
    `,
    images: [
        'path_to_albizia_chinensis_image1.jpg', 
        'path_to_albizia_chinensis_image2.jpg', 
        'path_to_albizia_chinensis_image3.jpg'
    ],
}
,
    
    
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
viewMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const plantName = event.target.dataset.plant;

        if (plantDetails[plantName]) {
            // Set the information content
            additionalInfoDiv.innerHTML = plantDetails[plantName].info;

            // Start the image carousel
            startImageCarousel(plantDetails[plantName].images);
        } else {
            additionalInfoDiv.innerHTML = `<p>No information available for ${plantName}.</p>`;
            plantImage.src = '';
            plantImage.alt = 'No Image Available';
        }

        modal.style.display = 'block';
    });
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(carouselInterval); // Stop the image carousel
});

// Close modal if clicked outside content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        clearInterval(carouselInterval); // Stop the image carousel
    }
});







// demo trial


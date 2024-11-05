
// JavaScript for the modal functionality
const modal = document.getElementById('modal');
const viewMoreButtons = document.querySelectorAll('.view-more');
const closeButton = document.querySelector('.close');
const additionalInfoDiv = document.getElementById('additional-info');

// Sample additional information for each plant
const additionalInfo = {
    Neem: `
    <h3>🌿 Plant Name: Neem</h3>
    <h4>📝 Description:</h4>
    <p>Neem is highly valued for its medicinal and agricultural uses. It can grow up to 20-30 meters in height.</p>
    <h4>🌿 Habitat:</h4>
    <p>Neem trees are typically found in tropical and semi-tropical regions. They thrive in sunlight and are often found in open fields.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🌱 Neem has natural antibacterial, antiviral, and antifungal properties.</li>
        <li>🌿 Neem oil is used in cosmetics, medicines, and as a natural pesticide.</li>
        <li>🍃 Leaves are used in remedies for skin conditions.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Neem is not endangered and is widely cultivated in many regions due to its versatility and resilience.</p>
`,

Tulsi: `
    <h3>🌿 Plant Name: Tulsi</h3>
    <h4>📝 Description:</h4>
    <p>Tulsi is known for its medicinal properties and spiritual significance in Indian culture. It is often found in households and temples.</p>
    <h4>🌿 Habitat:</h4>
    <p>Tulsi thrives in warm, tropical climates and is native to India and Southeast Asia.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🌱 Tulsi leaves are used to treat various ailments like colds and respiratory disorders.</li>
        <li>🍃 It is regarded as a sacred plant in Hinduism and is often used in rituals.</li>
        <li>🌍 Tulsi is known as the “Queen of Herbs” due to its wide-ranging health benefits.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Tulsi is not endangered and is widely cultivated across the Indian subcontinent.</p>
`,

Teak: `
    <h3>🌳 Plant Name: Teak (सागवन)</h3>
    <h4>📝 Description:</h4>
    <p>Teak is prized for its high-quality timber, which is durable and resistant to decay. It is widely used in furniture and shipbuilding.</p>
    <h4>🌿 Habitat:</h4>
    <p>Teak trees are found in mixed hardwood forests, typically in Southeast Asia, especially India, Myanmar, and Thailand.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🪵 Teak wood is famous for its natural oils, making it water-resistant.</li>
        <li>🌱 The tree can grow up to 40 meters tall and live for hundreds of years.</li>
        <li>🚢 Historically, it was used in shipbuilding due to its durability and resistance to water.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Teak is not endangered, but sustainable forestry practices are needed to ensure its long-term availability.</p>
`,

Bhoma: `
    <h3>🌿 Plant Name: Bhoma (Konkani)</h3>
    <h4>📝 Description:</h4>
    <p>Bhoma, scientifically known as Glochidion ellipticum, is a tropical plant used in traditional medicine for its various health benefits. It grows as a shrub or small tree.</p>
    <h4>🌿 Habitat:</h4>
    <p>This plant is commonly found in the forests of the Western Ghats and thrives in tropical and subtropical climates.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🍃 Bhoma is used in folk medicine for treating digestive and skin ailments.</li>
        <li>🌱 The plant plays a role in maintaining the ecological balance in its native habitats.</li>
        <li>🍈 It produces small fruits that are sometimes consumed locally.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Bhoma is not widely cultivated and is typically found in the wild, but it is not considered endangered.</p>
`,


Banyan: `
    <h3>🌳 Plant Name: Banyan</h3>
    <h4>📝 Description:</h4>
    <p>The Banyan tree is known for its expansive canopy and aerial roots, which allow it to spread over large areas. It can grow to immense sizes and live for centuries.</p>
    <h4>🌿 Habitat:</h4>
    <p>The Banyan thrives in tropical and subtropical climates and is commonly found in India, Bangladesh, and Sri Lanka.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🌳 The Banyan tree is considered sacred in many cultures and is often associated with longevity and shelter.</li>
        <li>🌱 Its aerial roots grow downwards and become new trunks, allowing the tree to spread wide.</li>
        <li>🏞️ The largest Banyan tree can cover several acres, with its branches and roots forming a forest-like structure.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>The Banyan tree is not endangered and is widely respected and protected in many parts of India due to its cultural significance.</p>
`,
Jackfruit: `
    <h3>🌳 Plant Name: Jackfruit</h3>
    <h4>📝 Description:</h4>
    <p>The Jackfruit tree produces the largest fruit in the world, with some fruits weighing up to 40 kg. It is highly valued for its edible fruit and wood.</p>
    <h4>🌿 Habitat:</h4>
    <p>Jackfruit trees are commonly found in tropical and subtropical regions, particularly in South and Southeast Asia, thriving in humid and warm climates.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🍈 The fruit is used in a variety of dishes, both ripe and unripe, across many Asian cuisines.</li>
        <li>🌳 Jackfruit wood is durable and often used in furniture making and musical instruments.</li>
        <li>🍃 The seeds are also edible and can be roasted or boiled for consumption.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Jackfruit is not endangered and is cultivated widely in tropical regions for its fruit and timber.</p>
`,
PeepalTree: `
<h3>🌳 Plant Name: Peepal Tree</h3>
<h4>📝 Description:</h4>
<p>The Peepal tree, also known as the sacred fig, is highly revered in various cultures and holds deep religious significance. It is known for its heart-shaped leaves.</p>
<h4>🌿 Habitat:</h4>
<p>The Peepal tree is commonly found in tropical and subtropical regions, particularly in India, Nepal, and Sri Lanka, thriving in a wide range of environments.</p>
<h4>🌟 Interesting Facts:</h4>
<ul>
    <li>🌿 The Buddha is said to have attained enlightenment under a Peepal tree.</li>
    <li>🌱 Peepal trees are known to release oxygen even at night, unlike most plants.</li>
    <li>💊 The bark, leaves, and roots of the tree are used in traditional medicine for various ailments.</li>
</ul>
<h4>⚠️ Conservation Status:</h4>
<p>The Peepal tree is not endangered and is widely planted for its religious, environmental, and medicinal benefits.</p>
`,
Pomegranate: `
    <h3>🍎 Plant Name: Pomegranate (डाळिंब)</h3>
    <h4>📝 Description:</h4>
    <p>Pomegranate is known for its bright red fruit, packed with juicy seeds called arils. It has been cultivated since ancient times for its nutritional and medicinal properties.</p>
    <h4>🌿 Habitat:</h4>
    <p>Pomegranate trees thrive in warm, dry regions and are typically found in Mediterranean climates, as well as parts of Asia and the Middle East.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🍎 Pomegranates are rich in antioxidants and are considered a superfood for their health benefits.</li>
        <li>🌸 The plant’s flowers are vibrant red and highly decorative.</li>
        <li>💊 Pomegranate extracts are used in traditional medicine for their anti-inflammatory and anti-cancer properties.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Pomegranate trees are widely cultivated and are not considered endangered.</p>
`,
Champak: `
    <h3>🌼 Plant Name: Champak (White चाफा)</h3>
    <h4>📝 Description:</h4>
    <p>Champak, also known as Plumeria alba, is a small tree or shrub known for its beautiful, fragrant white flowers, often associated with religious significance.</p>
    <h4>🌿 Habitat:</h4>
    <p>This tree thrives in tropical and subtropical climates, commonly found in gardens and parks across Southeast Asia and India.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🌺 The flowers are often used in making garlands and other floral decorations.</li>
        <li>🍃 The leaves are thick and can grow up to 30 cm long, providing a lush appearance.</li>
        <li>💧 The sap of the tree is used in traditional medicine for its healing properties.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Champak trees are not endangered and are cultivated in many tropical regions for their ornamental value.</p>
`,
PanamaRubberTree: `
    <h3>🌳 Plant Name: Panama Rubber Tree</h3>
    <h4>📝 Description:</h4>
    <p>The Panama Rubber Tree, scientifically known as Castilla elastica, is a large tree famous for its latex, which is used in the production of rubber.</p>
    <h4>🌿 Habitat:</h4>
    <p>This tree thrives in tropical rainforests, commonly found in Central and South America, where it prefers well-drained soils and high humidity.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🌱 The latex extracted from this tree is used in various applications, including adhesives and coatings.</li>
        <li>🌳 It can grow up to 30 meters tall and is valued for its strong, straight trunk.</li>
        <li>💧 The tree requires a warm climate with consistent rainfall to grow optimally.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>The Panama Rubber Tree is not considered endangered and is cultivated in several regions for its latex and timber.</p>
`,
Burflower: `
    <h3>🌸 Plant Name: Burflower (Kadam)</h3>
    <h4>📝 Description:</h4>
    <p>The Burflower, or Kadam, is a large tree known for its beautiful, fragrant flowers that attract pollinators and add charm to tropical landscapes.</p>
    <h4>🌿 Habitat:</h4>
    <p>This tree thrives in tropical forests and is commonly found in parts of Southeast Asia and India, preferring well-drained soils.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🌼 The flowers are used in traditional ceremonies and are considered auspicious in many cultures.</li>
        <li>🍃 The wood of the Kadam tree is utilized for making furniture and other wooden products.</li>
        <li>💧 The tree is known for its ability to grow quickly and adapt to various soil types.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>The Burflower tree is not endangered and is widely cultivated for its ornamental value and timber.</p>
`,
BauhiniaForficata: `
    <h3>🌿 Plant Name: Bauhinia forficata</h3>
    <h4>📝 Description:</h4>
    <p>Bauhinia forficata is a deciduous tree known for its striking white flowers and is often used in traditional medicine to treat diabetes and other ailments.</p>
    <h4>🌿 Habitat:</h4>
    <p>This tree is native to South America, particularly Brazil, and prefers tropical and subtropical climates.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🌸 Its beautiful, orchid-like flowers make it a popular ornamental tree.</li>
        <li>💊 Bauhinia forficata is known for its antidiabetic properties and is used in herbal remedies.</li>
        <li>🌱 It grows up to 5-10 meters tall and thrives in warm, humid environments.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Bauhinia forficata is not endangered and is widely cultivated for its medicinal and ornamental uses.</p>
`,
MangiferaCaesia: `
    <h3>🥭 Plant Name: Mangifera caesia</h3>
    <h4>📝 Description:</h4>
    <p>Mangifera caesia is a tropical fruit tree native to Southeast Asia, known for its large, sweet, and fragrant fruit, often referred to as "white mango."</p>
    <h4>🌿 Habitat:</h4>
    <p>This tree is found in tropical forests and cultivated in regions like Indonesia, Malaysia, and the Philippines. It thrives in warm, humid climates with well-drained soil.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🍈 The fruit of Mangifera caesia is used in various traditional dishes and can be eaten fresh or used in jams and desserts.</li>
        <li>🌱 The tree can grow up to 30 meters tall and produces a large canopy, providing ample shade.</li>
        <li>💧 It prefers tropical conditions and requires plenty of rainfall to produce its best fruit.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Mangifera caesia is not endangered and is widely cultivated in tropical regions for its fruit.</p>
`,

CurryTree: `
    <h3>🌿 Plant Name: Curry Tree</h3>
    <h4>📝 Description:</h4>
    <p>Murraya koenigii, commonly known as the Curry Tree, is a tropical to sub-tropical tree whose leaves are a key ingredient in many South Asian dishes, known for their aromatic and flavorful profile.</p>
    <h4>🌿 Habitat:</h4>
    <p>The Curry Tree is native to the Indian subcontinent and thrives in tropical and subtropical regions. It is often grown in home gardens for culinary purposes.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🍛 The leaves are used in curries, soups, and other dishes, adding a unique flavor.</li>
        <li>🌱 It can be grown as a small shrub or tree, reaching up to 6 meters in height.</li>
        <li>🌿 The leaves have medicinal properties and are used in traditional medicine for digestion and diabetes.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>The Curry Tree is not endangered and is widely cultivated for its leaves and medicinal properties.</p>
`,
Mango: `
    <h3>🥭 Plant Name: Mango</h3>
    <h4>📝 Description:</h4>
    <p>Mangifera indica, commonly known as the Mango tree, is famous for producing one of the most popular fruits in the world. The mango is sweet, juicy, and highly nutritious.</p>
    <h4>🌿 Habitat:</h4>
    <p>The Mango tree is native to South Asia and thrives in tropical and subtropical climates. It is now cultivated in many parts of the world, including Africa, the Americas, and Southeast Asia.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🍈 The fruit is rich in vitamins A and C, making it a nutritious snack.</li>
        <li>🌳 Mango trees can grow up to 30-40 meters tall and live for centuries.</li>
        <li>🍴 Mangoes are used in a variety of dishes, from fresh salads to smoothies and desserts.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Mango trees are not endangered and are widely cultivated for their fruit worldwide.</p>
`,
AlbiziaChinensis: `
    <h3>🌳 Plant Name: Albizia chinensis</h3>
    <h4>📝 Description:</h4>
    <p>Albizia chinensis is a large deciduous tree, known for its spreading crown and rapid growth, commonly used for shade, reforestation, and timber production.</p>
    <h4>🌿 Habitat:</h4>
    <p>This tree is native to Southeast Asia and grows in tropical and subtropical regions, thriving in forests and alongside rivers.</p>
    <h4>🌟 Interesting Facts:</h4>
    <ul>
        <li>🌱 Albizia chinensis is often used in agroforestry systems for its ability to enrich the soil.</li>
        <li>🌳 It can reach a height of up to 30 meters with a wide, umbrella-like crown.</li>
        <li>🪵 Its timber is used in furniture making, while the tree also provides shade in plantations.</li>
    </ul>
    <h4>⚠️ Conservation Status:</h4>
    <p>Albizia chinensis is not endangered and is widely planted for timber and reforestation efforts.</p>
`




};

// Function to open the modal with relevant information
viewMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const plantName = event.target.parentElement.querySelector('h2').textContent.split(': ')[1]; // Extract plant name
        additionalInfoDiv.innerHTML = additionalInfo[plantName] || '<p>Information not available.</p>'; // Get additional info for the plant
        modal.style.display = 'flex'; // Show the modal
        setTimeout(() => {
            document.querySelector('.modal-content').classList.add('show'); // Fade in the modal content
        }, 10);
    });
});

// Close the modal when the user clicks on <span> (x)
closeButton.onclick = function() {
    document.querySelector('.modal-content').classList.remove('show'); // Fade out the modal content
    setTimeout(() => {
        modal.style.display = 'none'; // Hide the modal after fade out
    }, 300); // Match the duration of the fade out effect
}

// Close the modal when clicking anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        document.querySelector('.modal-content').classList.remove('show'); // Fade out the modal content
        setTimeout(() => {
            modal.style.display = 'none'; // Hide the modal after fade out
        }, 300); // Match the duration of the fade out effect
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const quizItems = document.querySelectorAll(".quiz-item");

    // Create popup overlay
    const popupOverlay = document.createElement("div");
    popupOverlay.classList.add("popup-overlay");

    popupOverlay.innerHTML = `
        <div class="popup-content">
            <span class="popup-close">&times;</span>
            <div class="popup-left"></div>
            <div class="popup-right"></div>
        </div>
    `;
    document.body.appendChild(popupOverlay);

    // Close button functionality
    const popupClose = popupOverlay.querySelector(".popup-close");
    popupClose.addEventListener("click", () => {
        popupOverlay.style.display = "none";
    });

    const showPopup = (text, image) => {
        const popupLeft = popupOverlay.querySelector(".popup-left");
        const popupRight = popupOverlay.querySelector(".popup-right");

        popupLeft.innerHTML = text;
        popupRight.innerHTML = `<img src="${image}" alt="Answer Image" style="width: 100%; border-radius: 10px;">`;

        popupOverlay.style.display = "flex";
    };

    quizItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const answers = [
                {
                    text: `
                    <h3>🌍 How Would Our Planet Look Without Forests?</h3>

<h4>🌳 The Vital Role of Forests</h4>
<p>
Forests are the backbone of life on Earth, playing a vital role in sustaining ecosystems and regulating the planet's climate. They act as natural air purifiers, absorbing carbon dioxide and releasing oxygen, while their dense canopies protect the Earth from extreme temperatures. Without forests, barren wastelands would dominate the landscape, leading to longer droughts 🌞, more intense storms 🌪️, and rapid global warming. The balance of life would be irreversibly disrupted, threatening the survival of humans and countless species.
</p>

<h4>🌬️ Disrupted Air Quality and Ecosystems</h4>
<p>
Often referred to as the "lungs of the Earth" 🫁, forests provide more than just oxygen—they filter pollutants, stabilize weather patterns, and create a healthier atmosphere. Without them, air quality would deteriorate, exposing billions to respiratory issues and reducing access to clean air. Forests also support over 1.6 billion people 🌏 by providing food, medicine, and shelter. Losing forests would leave these communities vulnerable to poverty, forced migration, and environmental disasters, deepening global inequalities.
</p>

<h4>🐾 Loss of Biodiversity</h4>
<p>
Forests are home to over 80% of all terrestrial species, from vibrant birds and mammals to rare fungi and insects. Without forests, these species would lose their habitats, leading to mass extinctions and collapsing ecosystems. The disappearance of pollinators like bees and birds would disrupt food production, affecting agriculture and human sustenance. Biodiversity isn’t just a measure of life—it’s the foundation of thriving ecosystems, and its loss would be catastrophic.
</p>

<h4>💧 Increased Natural Disasters</h4>
<p>
Forests act as a natural defense system against disasters. Their roots bind the soil, preventing erosion, while their canopies absorb rainfall, reducing flood risks. Without them, floods, landslides, and desertification would become more frequent and destructive 💧. Coastal areas would lose the protective barriers provided by mangroves, leaving millions vulnerable to storm surges and tsunamis. These disasters would disproportionately impact the poorest communities, amplifying human suffering and economic losses.
</p>


                `,
                image: "quiz/ecologi1.jpg",
                
                },
                {
                    text: `
                    <h3>🌡️ What Role Do Forests Play in Combating Climate Change?</h3>

<h4>🌳 Forests: Nature's Carbon Sinks</h4>
<p>
Forests are one of the most powerful tools we have to combat climate change. They act as natural <em>carbon sinks</em>, absorbing approximately 7.6 billion metric tons of carbon dioxide (CO2) annually. Through photosynthesis, trees and plants take in CO2, release oxygen, and store carbon in their trunks, branches, leaves, roots, and the soil. This process significantly reduces greenhouse gas concentrations, stabilizing global temperatures and supporting a healthier planet 🌍.
</p>

<h4>🚨 Deforestation: A Growing Problem</h4>
<p>
The rapid loss of forests is intensifying climate change. Deforestation accounts for around <strong>15% of global greenhouse gas emissions</strong>. When trees are cut down, the carbon they store is released back into the atmosphere, increasing CO2 levels. Additionally, deforestation disrupts local weather patterns, reduces biodiversity, and depletes the soil’s ability to store carbon, compounding environmental challenges.
</p>

<h4>🌍 The Solution: Reforestation</h4>
<p>
Reversing deforestation through <em>reforestation and afforestation</em>—planting new trees and restoring degraded forests—is one of the most effective strategies against climate change. These efforts do more than just absorb CO2; they also boost biodiversity, regulate local climates, improve water cycles, and protect soil health. Research shows that restoring 350 million hectares of forests could reduce global CO2 emissions by up to 20%, offering a pathway to a more balanced and sustainable environment.
</p>

<h4>🌱 Take Action Now</h4>
<p>
Combating climate change isn’t just the responsibility of governments and large organizations—individuals can make a difference too! Whether you plant a tree in your backyard, support local conservation projects, or participate in global reforestation campaigns, every small action adds up. Together, we can ensure forests continue to play their crucial role in creating a sustainable and healthy planet for future generations.
</p>

                `,
                image: "quiz/ecological.webp",
                
                
                },
                {
                    text: `
                    <h3>🐾 Which Endangered Species Call Forests Home?</h3>

<h4>🌳 Forests: A Sanctuary for Endangered Species</h4>
<p>
Forests are home to some of the world’s most iconic and endangered species, serving as critical habitats for preserving biodiversity. From the misty rainforests of Southeast Asia to the dense jungles of India, these ecosystems provide shelter and resources for animals like the orangutan 🦧, Bengal tiger 🐅, and red panda 🐼. These species play essential roles in maintaining ecological balance—orangutans disperse seeds, aiding forest regeneration, while Bengal tigers control herbivore populations to prevent overgrazing.
</p>

<h4>🚨 Threats to Forest-Dwelling Species</h4>
<p>
Despite their importance, these magnificent species face mounting threats. Deforestation, illegal logging, and agricultural expansion are rapidly destroying their natural habitats. As forests shrink, the animals that depend on them are pushed closer to extinction. The loss of these species disrupts ecosystems, weakening the intricate connections that sustain life on Earth.
</p>

<h4>🌍 Conservation: A Path Forward</h4>
<p>
Efforts to protect endangered species and their habitats offer hope. Wildlife reserves 🛡️, national parks, and stricter anti-poaching laws provide safe havens for forest-dwelling species. Community-based conservation projects are also engaging local populations in protecting their ecosystems. International collaborations, reforestation programs, and sustainable land-use practices are crucial in restoring forests and ensuring the survival of these species.
</p>

<h4>🌱 Our Collective Responsibility</h4>
<p>
Protecting endangered species is a global responsibility. By supporting conservation initiatives, reducing deforestation, and raising awareness, we can help secure a future for these species. The health of forests and their inhabitants is deeply connected to the well-being of our planet. Together, we can ensure forests remain thriving sanctuaries for generations to come.
</p>

                `,
                image: "quiz/lungs.webp",
                
                },
                {
                    text: `
                    <h3>💧 How Are Forests Connected to the Water Cycle?</h3>

<h4>💦 Forests as Natural Water Reservoirs</h4>
<p>
Forests are essential in regulating the Earth's water cycle. Acting as natural reservoirs, they store freshwater in their soil, trees, and vegetation. Through <em>transpiration</em>, forests release moisture into the atmosphere, contributing to cloud formation and rainfall 🌧️. This process stabilizes local weather patterns, ensures consistent water availability, and prevents droughts. Forests are indispensable for maintaining the delicate balance of the water cycle.
</p>

<h4>🌍 The Impact of Forest Loss on the Water Cycle</h4>
<p>
When forests disappear, the water cycle's balance is severely disrupted. Forests help regulate humidity, prevent soil erosion, and manage groundwater flow. Without them, rainfall patterns become erratic, leading to increased droughts, arid climates, and reduced water availability 🚱. These disruptions harm ecosystems and human communities, particularly those dependent on natural water sources for agriculture and daily needs.
</p>

<h4>🌱 Forests and Global Water Security</h4>
<p>
Protecting forests is crucial for maintaining a sustainable water supply and ensuring clean water for future generations 🧑‍🤝‍🧑. Forest conservation helps prevent desertification, enhance environmental resilience, and restore water cycle balance. Adopting sustainable forest management practices can mitigate climate change's impact on water resources and promote global water security.
</p>

<h4>⚡ Why Immediate Action Is Necessary</h4>
<p>
The need to preserve forests has never been more urgent. Deforestation and climate change pose significant threats to global water cycles and freshwater resources. By supporting reforestation efforts and sustainable land management practices, we can protect these vital ecosystems. Together, we can ensure a future with abundant and clean water for all life on Earth.
</p>

                `,
                image: "quiz/watercycle.jpg",
                
                },
                {
                    text: `
                    <h3>🌳 What Steps Can Individuals Take to Protect Forests?</h3>

<h4>📄 1. Reduce Paper Usage</h4>
<p>
One of the simplest yet impactful actions you can take to protect forests is reducing paper consumption. Opt for digital alternatives, use both sides of paper, and recycle paper products to lower the demand for paper production—a major driver of deforestation. Small lifestyle changes, like going paperless, can collectively reduce the pressure on forests and conserve natural resources.
</p>

<h4>🌿 2. Support Eco-Friendly Products</h4>
<p>
Choose products made from sustainable materials. Look for certifications like <em>FSC (Forest Stewardship Council)</em> when buying wood, paper, or other forest-based items. Support goods made with recycled materials or eco-friendly practices, such as biodegradable packaging or plant-based alternatives. By favoring sustainable businesses, you promote a greener economy that values forest preservation.
</p>

<h4>🌱 3. Plant Trees and Support Reforestation</h4>
<p>
Planting trees is a direct and effective way to combat deforestation and restore ecosystems. Participate in community-based reforestation programs, local tree-planting events, or plant a tree in your own space. Additionally, supporting organizations dedicated to large-scale reforestation amplifies your impact by restoring biodiversity and mitigating climate change.
</p>

<h4>🌟 Together, We Can Make a Difference</h4>
<p>
Protecting forests requires a collective effort. By taking meaningful steps—whether through personal actions or advocating for global change—each of us can contribute to forest conservation. Together, we can ensure a sustainable future for our forests and the planet 🌍.
</p>

                `,
                image: "quiz/protect.jpg",
                
                },
                {
                    text: `
                    <h3>🔥 What Are the Biggest Threats to Forests Today?</h3>

<h4>🚜 1. Deforestation for Agriculture</h4>
<p>
Deforestation for agriculture is one of the primary drivers of forest loss worldwide. To meet the growing global demand for food, vast forested areas are cleared for crops and livestock. This destroys critical habitats, disrupts ecosystems, and contributes to soil degradation and biodiversity loss. Unsustainable practices like monocropping and slash-and-burn farming exacerbate the issue. Adopting sustainable farming techniques, such as agroforestry, crop rotation, and organic farming, can help preserve forests while ensuring food security.
</p>

<h4>🪓 2. Illegal Logging</h4>
<p>
Illegal logging poses a severe threat to forests. Unsanctioned operations often target valuable hardwood trees, causing deforestation, habitat destruction, and ecosystem disruption. The demand for timber, paper, and other forest products fuels these activities. Combating illegal logging requires robust enforcement of laws, advanced monitoring systems, and transparent supply chains. Engaging local communities in sustainable forest management practices is also critical to addressing this issue effectively.
</p>

<h4>🏙️ 3. Urban Expansion</h4>
<p>
As cities grow, urban expansion encroaches on forested areas, leading to habitat fragmentation and deforestation. This urban sprawl contributes to pollution, water scarcity, and resource depletion, while making it challenging for wildlife to thrive. Sustainable urban planning that incorporates green spaces, such as parks and urban forests, can mitigate these impacts. These solutions not only promote biodiversity but also improve the quality of life for urban residents.
</p>

<h4>🌍 What Can We Do?</h4>
<p>
Addressing these threats requires collective action on local, national, and global scales. Conservation efforts must be prioritized, environmental laws strictly enforced, and sustainable land-use practices widely adopted. Governments, businesses, and individuals can collaborate to implement forest-friendly policies, invest in reforestation projects, and support initiatives to combat illegal logging and reduce climate change impacts. Together, we can secure a sustainable future for our forests and planet.
</p>

                `,
                image: "quiz/thread.jpg",
                
                },
            ];

            const answer = answers[index];
            showPopup(answer.text, answer.image);
        });
    });

    // Close popup when clicking outside the content
    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });
});





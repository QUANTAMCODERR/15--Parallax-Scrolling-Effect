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
                    <p><strong>The Vital Role of Forests 🌳</strong><br>
                    Forests are more than just a beautiful part of nature—they are essential to the survival of life on Earth. Without forests, 
                    our planet would be drastically altered. Imagine a barren wasteland with no trees to provide shelter, absorb carbon, or regulate 
                    the climate. Without forests, the Earth would face extreme weather events 🌪️, including longer and harsher droughts, 
                    heavier storms, and an increase in global temperatures. The balance of ecosystems would collapse, and life as we know it would 
                    be unsustainable.</p>
                
                    <p><strong>Disrupted Ecosystems and Air Quality 🌬️</strong><br>
                    Forests are often referred to as the "lungs of the Earth" 🫁 because they produce oxygen and filter the air we breathe. 
                    Without them, air quality would deteriorate, causing a rise in respiratory diseases and reducing our access to clean air. 
                    Over 1.6 billion people 🌏 depend on forests not only for oxygen but for livelihoods, resources, and shelter. The loss of forests 
                    would leave them vulnerable to poverty, displacement, and environmental disasters.</p>
                
                    <p><strong>Mass Extinction of Species 🐾</strong><br>
                    Forests are home to more than 80% of terrestrial biodiversity. Without them, countless species, both known and unknown, would 
                    face extinction. The destruction of habitats would lead to a catastrophic loss of biodiversity, undermining the health of ecosystems 
                    and disrupting the delicate balance of nature.</p>
                
                    <p><strong>Increased Natural Disasters 💧</strong><br>
                    Forests play a crucial role in reducing natural disasters like floods and landslides. Their root systems hold soil in place, 
                    preventing erosion, and their canopy helps to absorb heavy rainfall, reducing the risk of floods. Without forests, we would 
                    experience more frequent and devastating floods, landslides, and soil degradation, making already vulnerable areas even more 
                    prone to disaster.</p>
                
                    <p><strong>Protecting Forests: A Sustainable Future 🌱</strong><br>
                    Protecting and restoring forests is one of the most effective ways to ensure a sustainable future. By preserving forests, 
                    we maintain the delicate balance of nature that sustains life on Earth. Safeguarding biodiversity, stabilizing the climate, 
                    and providing resources for billions of people depend on our commitment to protecting these vital ecosystems. Together, 
                    we can secure a healthier, more resilient planet for generations to come.</p>
                `,
                image: "assets/babul.jpg",
                
                },
                {
                    text: `
                    <h3>🌡️ What Role Do Forests Play in Combating Climate Change?</h3>
                    <p><strong>Forests: Nature's Carbon Sinks 🌳</strong><br>
                    Forests are essential in the fight against climate change. They act as the planet's natural <em>carbon sinks</em>, 
                    absorbing approximately 7.6 billion metric tons of carbon dioxide (CO2) annually. Through the process of photosynthesis, 
                    trees and plants absorb CO2 from the atmosphere, convert it into oxygen, and store the carbon in their biomass—trunks, branches, 
                    leaves, roots—and even the soil beneath them. This process is vital in reducing the concentration of greenhouse gases in the air and 
                    stabilizing the planet's temperatures 🌍.</p>
                
                    <p><strong>Deforestation: A Growing Problem 🚨</strong><br>
                    Unfortunately, the rapid loss of forests around the world is worsening climate change. Deforestation is responsible for 
                    around <strong>15% of global greenhouse gas emissions</strong>. When trees are cut down, the carbon stored within them is 
                    released back into the atmosphere, contributing to a significant increase in CO2 levels. Additionally, clearing forests disrupts local 
                    weather patterns, reduces biodiversity, and degrades the soil, making it harder for the land to store carbon in the future.</p>
                
                    <p><strong>The Solution: Reforestation 🌍</strong><br>
                    So, what can we do? One of the most effective ways to reverse this damage is through <em>reforestation and afforestation</em>—planting 
                    trees and restoring degraded forests. These initiatives do more than just absorb CO2; they also enhance biodiversity, stabilize local 
                    climates, improve water cycles, and protect soil health. In fact, restoring 350 million hectares of forests could help reduce global 
                    CO2 emissions by up to 20%. By supporting reforestation efforts, we can help combat climate change while also restoring the natural 
                    balance of our ecosystems.</p>
                
                    <p><strong>Take Action Now 🌱</strong><br>
                    Planting trees isn’t just a job for governments and large organizations—individuals can also make a difference! Whether you plant a 
                    tree in your backyard, support local conservation efforts, or participate in reforestation campaigns, every action counts. Together, 
                    we can ensure that forests continue to play their critical role in creating a sustainable, healthy planet for future generations.</p>
                `,
                image: "images/forest2.jpg",
                
                
                },
                {
                    text: `
                    <h3>🐾 Which Endangered Species Call Forests Home?</h3>
                    <p><strong>Forests: A Sanctuary for Endangered Species 🌳</strong><br>
                    Forests provide sanctuary for some of the world's most iconic and endangered species. These forests serve as both homes and 
                    critical habitats for animals that play an integral role in maintaining the ecological balance of their ecosystems. From the 
                    misty rainforests of Southeast Asia to the dense jungles of India, forests are a vital lifeline for species like the orangutan 🦧, 
                    Bengal tiger 🐅, red panda 🐼, and many others. These creatures are not just symbolic of the wilderness; they are key players 
                    in preserving biodiversity and ecosystem health. For instance, orangutans help in seed dispersal, contributing to forest regeneration, 
                    while Bengal tigers maintain the balance by controlling the population of herbivores.</p>
                
                    <p><strong>Threats to Forest-Dwelling Species 🚨</strong><br>
                    Unfortunately, these magnificent species face the looming threat of extinction, primarily due to the loss of their natural habitats. 
                    Deforestation, illegal logging, and encroachment for agricultural development are rapidly destroying the forests they depend on. 
                    As the forests vanish, so do the species that inhabit them. The destruction of these habitats is pushing these animals closer to the 
                    brink of extinction, with many species facing a dramatic decline in population.</p>
                
                    <p><strong>Conservation: A Hopeful Path Forward 🌍</strong><br>
                    While the challenges are immense, conservation efforts offer hope. Wildlife reserves 🛡️, protected areas, and stricter anti-poaching 
                    laws are critical in securing safe habitats for these species. Moreover, community-based conservation initiatives are proving to be 
                    highly effective in involving local populations in protecting their natural surroundings. International collaborations, as well as 
                    efforts to reduce deforestation and promote sustainable land-use practices, are also pivotal in safeguarding these forests and their 
                    inhabitants. Every action counts in the fight to protect these precious species from extinction.</p>
                
                    <p><strong>The Importance of Our Collective Effort 🌱</strong><br>
                    It is up to us, as a global community, to advocate for these endangered species and support ongoing conservation efforts. 
                    The future of these species and the health of the ecosystems they inhabit are interconnected with the well-being of our planet. 
                    Together, we can ensure that these forests continue to thrive and serve as safe havens for generations to come.</p>
                `,
                image: "images/forest3.jpg",
                
                },
                {
                    text: `
                    <h3>💧 How Are Forests Connected to the Water Cycle?</h3>
                    <p><strong>Forests as Natural Water Reservoirs 💦</strong><br>
                    Forests play a pivotal role in regulating the Earth's water cycle. They act as natural reservoirs, storing significant amounts 
                    of freshwater in their soil, trees, and plant life. Through a process called <em>transpiration</em>, forests release moisture back 
                    into the atmosphere, contributing to cloud formation and rainfall 🌧️. This process helps regulate local weather patterns and 
                    ensures a stable supply of water in the environment. Forests are, therefore, integral in preventing droughts and maintaining 
                    the overall balance of the water cycle.</p>
                
                    <p><strong>Disruption of the Water Cycle Without Forests 🌍</strong><br>
                    If forests were to disappear, the delicate balance of the water cycle would be severely disrupted. Forests help maintain humidity 
                    levels, prevent soil erosion, and control the flow of groundwater. Without forests, rainfall patterns would become unpredictable, 
                    leading to more frequent droughts, arid climates, and reduced water availability 🚱. This disruption would negatively impact both 
                    ecosystems and human populations, especially those relying on natural water sources for agriculture and drinking water.</p>
                
                    <p><strong>Forests and Global Water Security 🌱</strong><br>
                    Protecting forests is essential not only for maintaining the water cycle but also for ensuring the availability of clean water 
                    for future generations 🧑‍🤝‍🧑. Forest conservation efforts are vital for securing a sustainable water supply, preventing 
                    desertification, and promoting environmental resilience. Sustainable forest management practices can help restore the balance 
                    of the water cycle and mitigate the impacts of climate change on water resources.</p>
                
                    <p><strong>Why We Must Act Now ⚡</strong><br>
                    The urgency of preserving forests cannot be overstated. With the increasing threats of deforestation and climate change, 
                    safeguarding forests is critical for maintaining global water cycles and ensuring the availability of clean, fresh water for 
                    all life on Earth. By supporting reforestation efforts and promoting sustainable land management practices, we can secure 
                    a future with abundant water resources for generations to come.</p>
                `,
                image: "images/forest4.jpg",
                
                },
                {
                    text: `
                    <h3>🌳 What Steps Can Individuals Take to Protect Forests?</h3>
                    <p><strong>1. Reduce Paper Usage 📄</strong><br>
                    One of the simplest yet impactful ways to protect forests is by reducing paper consumption. By opting for digital alternatives, 
                    using both sides of paper, and recycling paper products, you can significantly reduce the demand for paper production, 
                    which is a major contributor to deforestation. Small lifestyle changes, like going paperless in your daily activities, can 
                    collectively make a big difference in reducing the pressure on forests.</p>
                
                    <p><strong>2. Support Eco-Friendly Products 🌿</strong><br>
                    Supporting products that are made from sustainable materials is another key action. Look for certifications like 
                    <em>FSC (Forest Stewardship Council)</em> when purchasing wood, paper, and other forest-based products. Choose goods that 
                    are made using recycled materials or those that promote eco-friendly practices, such as biodegradable packaging or 
                    plant-based alternatives. By supporting businesses that prioritize sustainability, you encourage the growth of a green economy 
                    that values forest preservation.</p>
                
                    <p><strong>3. Plant Trees and Support Reforestation 🌱</strong><br>
                    One of the most direct ways to protect and restore forests is by planting trees. Whether it's through community-based 
                    reforestation programs, local tree planting events, or even planting a tree in your own yard, every tree planted helps combat 
                    deforestation and restores lost ecosystems. Additionally, supporting organizations dedicated to large-scale reforestation efforts 
                    can amplify your impact, helping to restore biodiversity and combat climate change.</p>
                
                    <p><strong>4. Advocate for Forest Protection Policies 🛑</strong><br>
                    Political action is crucial in the fight against deforestation. Support policies that protect forests, such as those that 
                    enforce stricter laws on logging, combat illegal deforestation, and promote sustainable land use practices. Advocate for 
                    governments and corporations to commit to zero-deforestation pledges and the preservation of critical forest areas. 
                    Your voice can help create change on a larger scale.</p>
                
                    <p><strong>Together, We Can Make a Difference 🌟</strong><br>
                    Protecting forests is not the job of a single individual—it’s a collective effort. By taking small but meaningful steps, 
                    each of us can contribute to forest conservation. Whether it’s through personal actions or advocating for global change, 
                    every effort counts. Together, we can create a sustainable future for our forests and the planet 🌍.</p>
                `,
                image: "images/forest5.jpg",
                
                },
                {
                    text: `
                    <h3>🔥 What Are the Biggest Threats to Forests Today?</h3>
                    
                    <p><strong>1. Deforestation for Agriculture 🚜</strong><br>
                    One of the leading causes of deforestation is the conversion of forests into agricultural land. As the global demand for food increases, forests are cleared to make way for crops and livestock. This not only destroys vital habitats but also disrupts the delicate balance of ecosystems. Unsustainable agricultural practices, such as monocropping and slash-and-burn farming, exacerbate the issue, contributing to soil degradation and loss of biodiversity. To mitigate this, it’s crucial to adopt sustainable farming techniques like agroforestry, crop rotation, and organic farming, which help preserve forests while meeting food production needs.</p>
                
                    <p><strong>2. Illegal Logging 🪓</strong><br>
                    Illegal logging is another significant threat to forests. Unsanctioned logging operations often target valuable hardwood trees, leading to deforestation, loss of habitat, and disruption of ecosystems. These activities are driven by the high demand for timber, paper, and other forest products. Combating illegal logging requires stronger enforcement of laws, better monitoring systems, and increased transparency in supply chains. It also involves working with local communities to promote sustainable forest management practices.</p>
                
                    <p><strong>3. Urban Expansion 🏙️</strong><br>
                    As urban populations grow, cities expand into previously forested areas. This urban sprawl not only leads to direct deforestation but also fragmentizes habitats, making it difficult for species to thrive. Urban expansion contributes to increased pollution, water scarcity, and the depletion of natural resources. Urban planning that integrates green spaces, such as parks and urban forests, can help mitigate the negative impacts of urbanization, while promoting biodiversity and improving the quality of life for city dwellers.</p>
                
                    <p><strong>What Can We Do?</strong><br>
                    Protecting forests from these threats requires coordinated efforts at the local, national, and global levels. Prioritizing conservation efforts, enforcing environmental laws, and adopting sustainable land-use practices are essential steps. Governments, businesses, and individuals must work together to promote forest-friendly policies, invest in reforestation, and support initiatives that combat illegal logging and reduce the impacts of climate change.</p>
                `,
                image: "images/forest6.jpg",
                
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





class Tree {
    constructor(name, pic, type, growthRate, height, life, habitat, description) {
        this.name = name;
        this.pic = pic;
        this.type = type;
        this.growthRate = growthRate;
        this.height = height;
        this.life = life;
        this.habitat = habitat;
        this.description = description;
    }

    getSection() {
        const section = document.querySelector(".column");
        section.innerHTML = 
            `<h3>${this.name}</h3>
            <img class="images" src="images/${this.pic}" alt="${this.name}">`;
        return section;
    }
    getExpandedSection() {
        const section = document.createElement("section");
        section.innerHTML = 
            `<h3>${this.name}</h3>
            <p><b>Type:</b> ${this.type}</p>
            <p><b>Growth Rate:</b> ${this.growthRate}</p>
            <p><b>Height:</b> ${this.height}</p>
            <p><b>Life Span:</b> ${this.life}</p>
            <p><b>Habitat:</b> ${this.habitat}</p>
            <p> ${this.description}</p>`;

        const image = document.querySelector(".tree-image");
        image.innerHTML =  `<img class="images" src="images/${this.pic}" alt="${this.name}">`;
        return section;
    }

}
const trees = [
    new Tree("Bald Cypress", "baldcypress.png", "Conifer", "1-2 feet per year", "120 ft", "600 years", "Swamps, Floodplains", "The Bald Cypress is a sizable coniferous tree often observed in swamps and floodplains, recognized for its distinctive buttressed trunk and protruding knobby knees in aquatic environments. With the potential to reach a height of up to 120 feet, this tree boasts an impressive lifespan of approximately 600 years."),
    new Tree("Eastern Redbud", "easternredbud.png", "Deciduous", "Fast Growth", "20 ft", "60 years", "Forest understory", "The Eastern Redbud is a compact deciduous tree that typically reaches a height and spread of around 20 feet, displaying ascending branches and a rounded form. Its leaves are alternately arranged, simple, and broadly heart-shaped, measuring 3-5 inches in both height and width."),
    new Tree("Loblolly Pine", "loblollypine.png", "Conifer", "Medium Growth", "100 ft", "500 years", "Coastal Plain", "The Loblolly Pine is a sizable conifer indigenous to coastal plains, distinguished by its swift growth, attaining heights of up to 100 feet. Featuring long, slender needles and generating oval-shaped cones, this pine variety is frequently employed in forestry and timber production due to its widespread availability and utility."),
    new Tree("Southern Magnolia", "southernmagnolia.png", "Evergreen", "Slow to Medium Growth", "60 ft", "80-120 years", "Wetlands, Uplands", "The Southern Magnolia is an evergreen tree prevalent in both wetlands and uplands, characterized by a moderate to slow growth rate and typically attaining heights of approximately 60 feet. Notable for its sizable, glossy leaves and fragrant white flowers, the Southern Magnolia blossoms from late spring to early summer.")
];


function addTreesToHome() {
    const sectionContent = document.getElementById("columns");
    trees.forEach(tree => {
        columns.appendChild(tree.getSection());
    });
}
addTreesToHome();
document.querySelectorAll(".columns section").forEach((section, index) => {
    section.onclick = (e) => {
        document.getElementById("dialog").style.display = "block";
        const selectedTree = trees[index];
        const dialogDetails = document.getElementById("dialog-details");
        dialogDetails.innerHTML = '';
        dialogDetails.appendChild(selectedTree.getExpandedSection());
    };
});
document.getElementById("dialog-close").onclick = () => {
    document.getElementById("dialog").style.display = "none";
};
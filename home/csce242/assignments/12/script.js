const getHouses = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try{
        const response = await fetch(url);
        return response.json();
    }catch(error){
        console.log(error);
    }
}

const showHouses = async() => {
    const houses = await getHouses();
    const houseList = document.getElementById("houses");

    houses.forEach(house => {
        houseList.append(getHouseSection(house));
    })
}

const getHouseSection = (house) => {

    const section = document.createElement("section");

    section.className = "house-info";

    const nameHeader = document.createElement("h2");

    nameHeader.textContent = house.name;

    section.appendChild(nameHeader);

    const houseDiv = document.createElement("section");
    houseDiv.id = "house";

    const mainImage = document.createElement("img");
    mainImage.className = "images";
    
    mainImage.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    houseDiv.appendChild(mainImage); 


    const description = document.createElement("section");
    description.id = "description";
    description.innerHTML = `
        <p><b>Size:</b> ${house.size}</p>
        <p><b>Bedrooms:</b> ${house.bedrooms}</p>
        <p><b>Bathrooms:</b> ${house.bathrooms}</p>
        <p><b>Features:</b> ${house.features.join(", ")}</p>
    `;
    houseDiv.appendChild(description);

    section.appendChild(houseDiv);


    const floorPlansSection = document.createElement("section"); 
    floorPlansSection.id = "columns";

    house.floor_plans.forEach(plan => {
        const planDiv = document.createElement("div");
        const planImage = document.createElement("img");
        const planName = document.createElement("p");

        planName.innerHTML = plan.name;
        planDiv.appendChild(planName);
        planImage.className = "floor-imgs";
        planImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.image}`;
        planDiv.appendChild(planImage);

        floorPlansSection.appendChild(planDiv);
    });


    section.appendChild(floorPlansSection);
    

    return section;
}

window.onload = () => showHouses();


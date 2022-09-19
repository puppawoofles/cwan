(() => {
    await require("cwan/generator");
})();



class CommonGoods {
    static KEY = "swon.sog.goods.common";
    static CHART = Chart.generateFromCSV([
        ["name", "costPerUnit", "minTechLevel", "tags"],
        ["Clothing", 1000, 0, ["Common", "Low Tech", "Cultural"]],
        ["Colonial Materials", 2000, 4, ["Survival", "Posttech", "Common"]],
        ["Colonial Supplies", 1000, 4, ["Agricultural", "Survival"]],
        ["Drugs (raw materials)", 2000, 0, ["Agricultural", "Biotech", "Bulky"]],
        ["Drugs (recreational)", 50000, 3, ["Luxury", "Biotech", "Compact"]],
        ["Exotic Jewels", 25000, 0, ["Rare", "Mineral", "Luxury", "Compact"]],
        ["Fine Liquor", 10000, 0, ["Low Tech", "Luxury", "Compact"]],
    ]);
}


// ###################################################
// #### Interest Charts (for flavor)  ################
// ###################################################
class RandomGoodInterestPlant {
    static KEY = "swon.sog.goods.interest.plants";
    static CHART = Chart.generateFromCSV([
        ["roll", "result"],
        ["1", "High-yield harvest"],
        ["2", "Nutritous"],
        ["3", "Hardy"],
        ["4", "Psychoactive"],
        ["5", "Culturally Important"],
        ["6", "Immune to Pests"],
        ["7", "Great for fermenting"],
        ["8", "Useful for building"],
        ["9", "Makes inedible protein edible"],
        ["10", "Extracts useful materials from soil"],
        ["11", "Used in drug manufacture"],
        ["12", "Prevents Illness"],
        ["13", "Locally vital to Life"],
        ["14", "Useful Fibers"],
        ["15", "Low-effort to Grow"],
        ["16", "Supports Insects"],
        ["17", "Super Tasty"],
        ["18", "Has Industrial Value"],
        ["19", "Has Religious Value"],
        ["20", "Some wacky physical property"],
    ]);
}

class RandomGoodInterestMineral {
    static KEY = "swon.sog.goods.interest.minerals";
    static CHART = Chart.generateFromCSV([
        ["roll", "result"],
        ["1", "Absorbs toxins"],
        ["2", "Edible and Nutritous"],
        ["3", "Beautiful in crafts"],
        ["4", "Useful agricultural properties"],
        ["5", "Part of Unique Alloy"],
        ["6", "Super Durable"],
        ["7", "Super easy to work with"],
        ["8", "Useful energy-manipulation properties"],
        ["9", "Unique medicinal properties"],
        ["10", "Vital in communications infrastructure"],
        ["11", "Useful heat-manipulation properties"],
        ["12", "Useful radiation-manipulation properties"],
        ["13", "Useful optical properties"],
        ["14", "Useful explosive properties"],
        ["15", "Useful building properties"],
        ["16", "Has industrial-posttech value"],
        ["17", "Vital in Spike Drive manufacture"],
        ["18", "Super lightweight"],
        ["19", "Has industrial-chemical value"],
        ["20", "Vital for life-support tech"],
    ]);
}

class RandomGoodInterestProduct {
    static KEY = "swon.sog.goods.interest.products";
    static CHART = Chart.generateFromCSV([
        ["roll", "result"],
        ["1", "Has addictive components"],
        ["2", "Cheap to make, but only here"],
        ["3", "Exquisite craftsmanship in function"],
        ["4", "Exquisite craftsmanship in form"],
        ["5", "Has cultural significance"],
        ["6", "Renowned brand name"],
        ["7", "Super durable"],
        ["8", "Cheap to operate"],
        ["9", "Easy to repair"],
        ["10", "Super lightweight"],
        ["11", "Super fashionable"],
        ["12", "Induces positive emotions"],
        ["13", "Compact"],
        ["14", "One-size-fits-all"],
        ["15", "Reliable in harsh conditions"],
        ["16", "Minimal power usage"],
        ["17", "Highly customizable"],
        ["18", "Super versatile / alternative functions"],
        ["19", "Favored by the elite"],
        ["20", "Ideal for the majority use case only"],
    ]);
}

class RandomGoodInterestAnimal {
    static KEY = "swon.sog.goods.interest.animals";
    static CHART = Chart.generateFromCSV([
        ["roll", "result"],
        ["1", "Has desirable secretions"],
        ["2", "Has human ancestry in some form"],
        ["3", "Gene-gineered for a specific purpose"],
        ["4", "Uniquely beautiful in form"],
        ["5", "Extremely docile"],
        ["6", "Is a delicacy (at least to the locals)"],
        ["7", "Low requirements to keep"],
        ["8", "Extraordinarily hardy or healthy"],
        ["9", "Obligate Cybernetics"],
        ["10", "Desired by the elite"]]);
}

// ###################################################
// #### Interest Charts (for flavor)  ################
// ###################################################

class CargoBaseTagChart {
    static ID = "swon.sog.goods.random.basetag";
    static CHART = Chart.generateFromCSV([
        ["roll", "Cargo Tag", "pricemod"],
        ["1", "Agricultural", -2]
        ["2", "Alien", +2],
        ["3", "Astronautic", +1],
        ["4", "Biotech", +1],
        ["5", "Consumer", 0],
        ["6", "Cultural", 0],
        ["7", "Livestock", 0],
        ["8", "Low Tech", -1],
        ["9", "Luxury", 2],
        ["10", "Maltech", 4],
        ["11", "Medical", 2],
        ["12", "Military", 1],
        ["13", "Mineral", -1],
        ["14", "Posttech", 0],
        ["15", "Pretech", 3],
        ["16", "Religious", 0],
        ["17", "Sapient", 2],
        ["18", "Survival", 0],
        ["19", "Tool", 1],
        ["20", "Vehicle", 1]
    ]);
}


Chart.register("swon.sog.goods.random.basetag", {
    inputSchema: null,
    rollSchema: RollParams.fromDiceString("d20"),
    resultSchema: RollChart.generateFromCSV("roll", )
});


Chart.register("swon.sog.goods.random.rarity", {
    inputSchema: null,
    rollSchema: RollParams.fromDiceString("d20"),
    resultSchema: RollChart.generateFromCSV("roll", [
        ["roll", "Cargo Tag", "pricemod", "interestCharts"],
        ["1", "Agricultural", -2, GoodInterestShortcuts.PLANT],
        ["2", "Alien", +2, GoodInterestShortcuts.PLANT_MINERAL_PRODUCT],
        ["3", "Astronautic", +1, GoodInterestShortcuts.MINERAL_PRODUCT],
        ["4", "Biotech", +1, GoodInterestShortcuts.PLANT_MINERAL_PRODUCT],
        ["5", "Consumer", 0, GoodInterestShortcuts.PRODUCT],
        ["6", "Cultural", 0, GoodInterestShortcuts.PLANT_MINERAL_PRODUCT],
        ["7", "Livestock", 0, GoodInterestShortcuts.PLANT],
        ["8", "Low Tech", -1, GoodInterestShortcuts.PRODUCT],
        ["9", "Luxury", 2, GoodInterestShortcuts.PRODUCT],
        ["10", "Maltech", 4, GoodInterestShortcuts.PRODUCT],
        ["11", "Medical", 2, GoodInterestShortcuts.PLANT_MINERAL_PRODUCT],
        ["12", "Military", 1, GoodInterestShortcuts.PLANT_MINERAL_PRODUCT],
        ["13", "Mineral", -1, GoodInterestShortcuts.MINERAL],
        ["14", "Posttech", 0, GoodInterestShortcuts.PRODUCT],
        ["15", "Pretech", 3, GoodInterestShortcuts.PRODUCT],
        ["16", "Religious", 0, GoodInterestShortcuts.PLANT_MINERAL_PRODUCT],
        ["17", "Sapient", 2, {}],
        ["18", "Survival", 0, GoodInterestShortcuts.PLANT_MINERAL_PRODUCT],
        ["19", "Tool", 1, GoodInterestShortcuts.PRODUCT],
        ["20", "Vehicle", 1, GoodInterestShortcuts.PRODUCT]
    ])
});






class SOGGoodsTags {
    static COMMON = "Common";
    static LOW_TECH = "LowTech";
    static CULTURAL = "Cultural";
}

class SOGGoodsChart {

    
}
Chart.register("swon.sog.saleschat", {
    inputSchema: null,
    rollSchema: RollParams.fromDiceString("3d6"),
    resultSchema: RollChart.generateFromCSV(null, [
        ["cargo", "base_cost", "min_tech_level", "tags"],
        ["Clothing", 1000, 0, [SOGGoodsTags.COMMON, SOGGoodsTags.LOW_TECH, SOGGoodsTags.CULTURAL]]
    ])
});

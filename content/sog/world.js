(() => {
    await require("cwan/generator");
})();


class FailedColony {

    static HOW_DEVELOPED = Chart.generateFromCSV([
        ["roll", "description"],
        ["1-4", "Landing Party: Only the barest of beginnings"],
        ["5-10", "Outpost: A town-sized population and basic spaceport"],
        ["11-15", "Young Colony: Basic self-sustaining infrastructure, multiple population centers"],
        ["16-17", "Mature Colony: Several Population centers, self-sustaining infrastructure, industry"],
        ["18", "Frontier World: Hundreds of thousands of population with supporting industry"],
        ["19", "Developed World: Millions of residents, and if possible, basic astronautics industry"],
        ["20", "Advanced World: Hundreds of millions of residents, multiple major cities"]
    ]);

    static WHY_COLONIZED = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Vital position in spike-drive lanes"],
        ["2", "Rich in minerals and ores"],
        ["3", "Climate/biosphere unusually friendly to humans"],
        ["4", "Perfect hiding spot for convicts and exiles due to poor habitability"],
        ["5", "Strategic military importance"],
        ["6", "Local florae/faunae commercially exploitable"],
        ["7", "Site of interesting/researchable natural phenomena"],
        ["8", "Distant from existing worlds; original colonizers wanted privacy"],
        ["9", "Existing alien natives were friendly to humans"],
        ["10", "Had a vital material that other planets strictly lack"],
        ["11", "Ordained as a new homeworld by some cultural leader"],
        ["12", "Accidental, out of need or mistake"]
    ]);

    static WHY_FAIL = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Pandemic, but there was a vaccine?"],
        ["2", "Infighting among local factions escalated"],
        ["3", "Natural resources dried up"],
        ["4", "Raiders wouldn't leave them alone"],
        ["5", "Vital survival infrastructure irreparably broke"],
        ["6", "Maltech weapon of mass destruction"],
        ["7", "Hostile military group (alien or otherwise) wiped them out"],
        ["8", "Population devolved into non-sentience for some reason"],
        ["9", "Did not survive The Scream due to psychic rampages"],
        ["10", "Astronomic calamities, but that's totally not a problem anymore, wink"],
        ["11", "Lost a fight with the locals"],
        ["12", "Dwindled away to nothing due to lack of genetic diversity"],
        ["13", "Some ideology resulted in the collapse of the society (e.g. mass suicide)"],
        ["14", "Fell into anarchy, then a slow die-off"],
        ["15", "Destroyed itself trying to unseat a tyrant"],
        ["16", "Unexpected geologic/meteorlogical event"],
        ["17", "A bigger power in the sector decided to squish them"],
        ["18", "Did not survive The Scream due to hopelessness/isolation"],
        ["19", "Took a big risk on some big project that didn't pan out, collapsed industry/society"],
        ["20", "Founding planet abandoned them by cutting off vital resources"]
    ]);
}



class EconomicCrisis {
    static ID = "swon.sog.world.economiccrisis";
    static CHART = Chart.generateFromCSV([
        ["roll", "whatHappened"],
        ["1", "Vital component to local industry is rapidly depleteing"],
        ["2", "Economic takeover by a small group by abusing local law"],
        ["3", "Military tension result in overinvestment in military tech, to the cost of all else"],
        ["4", "Local banking tech has failed, resulting in mass accidental deflation"],
        ["5", "Local politicians over-promised welfare/services that are impossible to deliver"],
        ["6", "Populists siezed control and are plundering the wealthy"],
        ["7", "A new resource suddenly obsoletes an established industry"],
        ["8", "A religious or cultural upset condemns an important local industry"],
        ["9", "A long-impovershed/oppressed group is in an open rebellion"],
        ["10", "Productive minority blamed by demagogue leadership for ills; open hostilities"],
        ["11", "Formerly-local industry outsourced for cheap, leaving locals without work"],
        ["12", "Xenophobia against off-worlders affecting trade"]
    ])
}


class WorldTag {
    static ID = "swon.sog.world.tradetag";
    static CHART = Chart.generateFromCSV([
        ["tag",             "description"],
        ["Alien",           "Inhuman inhabitants"],
        ["Closed",          "Contact is technically forbidden"],
        ["Communist",       "All belongs to ruling body"],
        ["Disorganized",    "No central authority"],
        ["Dying",           "World is doomed in the foreseeable future"],
        ["Fractious",       "Locals in struggling factions"],
        ["Kleptocratic",    "Ruled by thieves"],
        ["Laizzes Faire",   "Free-trade is highly valued"],
        ["Megacorps",       "Giant corps control trade"],
        ["Military",        "Military controls trade"],
        ["Opened",          "Only recently contacted others"],
        ["Panopticon",      "Surveillance State"],
        ["Primitive",       "Tech-primitive locals"],
        ["Restricted",      "Someone else is restraining trade"],
        ["Scarcity",        "World sorely lacks something"],
        ["Secret",          "The rest of the cosmos is a secret to the locals"],
        ["Sophisticated",   "Jaded towards far-traders"],
        ["Theocratic",      "Clergy controls trade"],
        ["Thriving",        "Economy is booming"],
        ["Tribute",         "Society revolves around paying tribute"],
        ["Tyrannical",      "Tyrant controls trade"],
        ["Usurped",         "Outsider controls trade"],
        ["Vendor",          "Has unique good only available here"],
        ["Xenophobic",      "Distrustful of outsiders"]
    ])
}
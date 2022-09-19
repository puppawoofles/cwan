(() => {
    await require("cwan/generator");
})();


class EconomicNpc {
    static OFFWORLDER_ATTITUDE = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Curious; Wary, but willing to deal with them"],
        ["2", "Suspicion; Worried about exploitation of locals"],
        ["3", "Fascination; Eager about the possibilities"],
        ["4", "Utilitarian; Tolerance as long as they are useful"]
    ]);

    static IMPORTANT_RELATIONSHIPS = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Significant Other(s)"],
        ["2", "Child(ren)"],
        ["3", "Religious or Cultural Community"],
        ["4", "Employer or Coworkers"],
        ["5", "Socially Unacceptable relationship"],
        ["6", "None; People are tools for use"]
    ]);

    static WORST_ENEMY = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Tyrannical Employer"],
        ["2", "Grudge-bearing official"],
        ["3", "Vengeful Psychic"],
        ["4", "Scheming Subordinate"],
        ["5", "Former lover who feels wronged"],
        ["6", "Co-worker who wants them destroyed"],
        ["7", "A debtor, criminal or otherwise, owed money or otherwise"],
        ["8", "One of their victims"]
    ]);

    static INITIAL_ATTITUDE = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Flirty towards most compatible NPC"],
        ["2", "Star-struck by REAL offworlders"],
        ["3", "Hopelessly stupid foreigners"],
        ["4", "Rich targets to be milked"],
        ["5", "Racist for some reason"],
        ["6", "Want to leave a good impression"],
        ["7", "Convinced PCs are ultra-competent at everything"],
        ["8", "Most possess deep space-wisdom from journeys"],
        ["9", "Envious of their excitement/profitability"],
        ["10", "Overly curious about current and past business dealings"]
    ]);

    static WHAT_WANT = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Passage off-world to escape"],
        ["2", "Something illegal from a local black market"],
        ["3", "Goods/tech otherwise unavailable from this world"],
        ["4", "A buttload of cash"],
        ["5", "'Pacification' of an enemy"],
        ["6", "Message delivery"],
        ["7", "Gainful employment"],
        ["8", "Medical help they can't get on their own"],
        ["9", "The ruin of a local business or organization"],
        ["10", "To help ally/kin on another world"],
        ["11", "Passage off-world for a utilitarian purpose"],
        ["12", "To get out of debt"]
    ]);

    static QUIRK = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Missing a piece, either with or without prosthetic"],
        ["2", "Slovenly appearance"],
        ["3", "Obsessed with data slab / work device"],
        ["4", "Often makes statements by asking questions instead"],
        ["5", "Minority in this world"],
        ["6", "Deeply religious; may fidget with religious object"],
        ["7", "Has a thick accent or dialect"],
        ["8", "Remarkably young or old for the position they fill"],
        ["9", "Dresses in loud, off-world fashion"],
        ["10", "Visible signs of chronic illness"],
        ["11", "Rigid/stiff behavior; 'Stick up their butt'"],
        ["12", "Complains about their work a lot"],
        ["13", "Paranoid and skeptical of others; believes everything is a lie"],
        ["14", "Remarkably charismatic or attractive"],
        ["15", "Radically opposes one mainstay belief of this world's culture"],
        ["16", "Has past trauma; is constantly alert for threats"],
        ["17", "Has BMI likely well outside of healthy ranges (under or over)"],
        ["18", "Has a severe sensory disability, but pretends they don't"],
        ["19", "Always with emotional-support-(person/animal)"],
        ["20", "Brief of word to the point of being ambiguously rude"]
    ]);
}


class BusinessRival {
    static POWER = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Formerly very, but with recent losses"],
        ["2", "Upstart, but vigorous"],
        ["3", "Rather, but complacent"],
        ["4", "Extremely Powerful on exactly one world"]
    ]);

    static PC_ATTITUDE = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Unaware they exist; if impossible, thinks so little of them they may as well not exist"],
        ["2", "Want to turn PCs into loyal minions"],
        ["3", "Wat to ruin PCs' business"],
        ["4", "Want to use PCs to get ahead (them or an employee)"],
        ["5", "Want to use PCs to take down a rival (them or an employee)"],
        ["6", "Afraid of the PCs"]
    ]);

    static CURRENT_PROBLEM = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Complacent leadership who can't innovate"],
        ["2", "Game of Thrones executive backstabbing"],
        ["3", "Long-standing labor mistreatment"],
        ["4", "A major government really hates them"],
        ["5", "Over-extended in support of a specific scheme"],
        ["6", "Products badly outclassed by a new rival"],
        ["7", "Vital material for their business has impending shortage"],
        ["8", "Resources tied up in unstable location"]
    ]);

    static THEIR_CEO = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Non-human who can leverage their species' resources"],
        ["2", "A precog psychic with uncanny insight"],
        ["3", "A degenerate reveling in wealth and power"],
        ["4", "An AI, with or without brakes"],
        ["5", "A grizzled, far-trader veteran"],
        ["6", "Reckless and impulsive heir to the business"],
        ["7", "An important cultural leader"],
        ["8", "A hedonist who is only partly engaged with business"],
        ["9", "A ruthless, profiteering businessperson"],
        ["10", "Someone hell-bent on doing something deranged"]
    ]);

    static SCHEME = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Bend local government to their will with back-room dealings and coersion"],
        ["2", "Use stolen pretech to build new product"],
        ["3", "Sabotage a rival, preferably using PCs"],
        ["4", "Military conquest of local government"],
        ["5", "Something involving MalTech"],
        ["6", "Take over competitors to form monopoly"],
        ["7", "Reduce available tech to force reliance on their products"],
        ["8", "Sabotage local military for a client/benefactor"],
        ["9", "Monopolize a local resource for mass profit"],
        ["10", "Outcompete small traders to have total market control"],
        ["11", "Isolate a planet/sector away from other traders"],
        ["12", "Change local culture to make it more useful to them"]
    ]);

    static BUSINESS = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Spike Drives or other spacefaring materials"],
        ["2", "Pharmeceuticals"],
        ["3", "Agricultural-tech"],
        ["4", "Military-tech"],
        ["5", "Medical (possibly Maltech)"],
        ["6", "Financial services"],
        ["7", "Mercenaries"],
        ["8", "Labor; Contract, Slave, or otherwise"],
        ["9", "Energy generation"],
        ["10", "Construction"],
        ["11", "BioTech"],
        ["12", "Cyberware"],
        ["13", "Computing (possibly AI)"],
        ["14", "Robotics (possibly military)"],
        ["15", "Mining"],
        ["16", "Psionic services"],
        ["17", "Alien Liaison"],
        ["18", "Cultural services (possibly religion)"],
        ["19", "Entertainment"],
        ["20", "PreTech Salvage"]
    ]);
}


class BusinessContact {
    static DEAL_INTEREST = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Not Crucial; they have other possibilities"],
        ["2", "Would suffer significant loss if it goes poorly"],
        ["3", "Would ruin quarterly numbers"],
        ["4", "Vital to their interests, either in volume or in timing"]
    ]);

    static DEAL_DESIRE = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "They need the good or cash immediately to get out of a jam"],
        ["2", "They have insider information about an upcoming surplus/shortage"],
        ["3", "Coerced by a local government"],
        ["4", "It supports a bigger / more important business opportunity"],
        ["5", "Coerced by employers or debtors"],
        ["6", "Middle-man who needs to fulfill a prior deal with the results of this one"]
    ]);

    static LEVERAGE_SOURCE = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Inherited old money"],
        ["2", "Head of a local profitable business"],
        ["3", "Government official in charge of this resource"],
        ["4", "Retired far-trader who keeps busy playing with the local economy"],
        ["5", "Ambituous entrepreneur with a large loan"],
        ["6", "Crime boss with legit cover-businesses"],
        ["7", "Rebel / Revolutionary leader"],
        ["8", "Local fixer for bigger fish"]
    ]);

    static RELATIONSHIP_WITH_LOCAL_GOVERNMENT = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Is actually an official"],
        ["2", "Government suspicious of their trade"],
        ["3", "From an oppressed minority"],
        ["4", "Loved by one faction, hated by another"],
        ["5", "Has deep connections with former ruling faction"],
        ["6", "Has deep connections with current ruling faction"],
        ["7", "Only just tolerated by local officials"],
        ["8", "Want to overthrow it"],
        ["9", "Secret agents of government's law enforcement"],
        ["10", "Secretly operating illegally"]
    ]);

    static ENEMY_WHO_WOULD_SEE_THEM_RUINED = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Abandoned spouse/lover"],
        ["2", "Cheated business partner"],
        ["3", "Former friend left for dead from past business dealings"],
        ["4", "Former colleague they ruined to advance"],
        ["5", "Far-trader they cheated"],
        ["6", "Former government official whose corruption they outed"],
        ["7", "A crime boss who hasn't been paid for protection"],
        ["8", "An official with a chip on their shoulder against their industry"],
        ["9", "A local inustrialist who wants to see them ruined"],
        ["10", "A local rival"],
        ["11", "An abused/mistreated employee"],
        ["12", "A family member who wants to take over the business"]
    ]);

    static BIGGEST_RUMOR = Chart.generateFromCSV([
        ["roll", "description"],
        ["1", "Hopelessly in debt to local crime boss"],
        ["2", "Actually with a hated secret police"],
        ["3", "Secretly part of an outlawed/persecuted group"],
        ["4", "Trade cheap/shoddy goods to far traders"],
        ["5", "Use local culture to cheat far traders"],
        ["6", "Goods are toxic/dangerous to buyers"],
        ["7", "Puppet for a secret mastermind"],
        ["8", "Addicted to an offworlder drug"],
        ["9", "Have truly distasteful biological urges"],
        ["10", "Cheat their employees out of wages"],
        ["11", "Port workers hate them and sabotage their goods"],
        ["12", "Secretly working with rebels / revolutionaries"],
        ["13", "Violently abuse to local minority"],
        ["14", "Local government wants to ruin them over some past slight"],
        ["15", "Carry a disease with social baggage"],
        ["16", "Is actually a coherent feral psychic"],
        ["17", "Somehow involved with MalTech"],
        ["18", "Stole their wealth and have enemies to show"],
        ["19", "Abuse their minions/servants in especially deplorable ways"],
        ["20", "Building up credibility for a huge betrayal"]
    ]);
}

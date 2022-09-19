
(() => {
    await require("woof/noise"); 
})();

/**
 * A basic wrapper around a thing that generates things.
 */
class Generator {



}

class Chart {


    static generateFromCSV(parts) {
        
    }
}


class RollChart {

    static generateFromCSV(valueFields, parts) {






    }

}


/** This is how we generate a roll. */
class RollParams {
    /** Seed parts. */
    seeds = [];
    /** [minInclusive, maxExclusive].  Note that this roll is linear in distribution. */
    range = [];

    static rollRangeFromDice(type) {
        const matches = (/d([0-9]+)/).match(type.toLowerCase());
        if (!matches) return null;
        return [1, matches[1] + 1];
    }

}


/** This is what we generate from a roll. */
class Roll {

    /** Generates a roll. */
    generate() {




    }



}
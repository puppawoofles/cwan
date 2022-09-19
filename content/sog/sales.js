(() => {
    await require("cwan/generator");
})();


class SalePriceModifiers {
    static ID = "swon.sog.sales.modifierchart";
    static BASE_ROLL = "3d6";
    static CHART = Chart.generateFromCSV([
        ["roll", "modifier"],
        ["2-", 0.1],
        ["3", 0.3],
        ["4", 0.4],
        ["5", 0.5],
        ["6", 0.6],
        ["7", 0.7],
        ["8", 0.8],
        ["9", 0.9],
        ["10-11", 1.0],
        ["12", 1.1],
        ["13", 1.2],
        ["14", 1.4],
        ["15", 1.6],
        ["16", 1.8],
        ["17", 2.0],
        ["18", 2.5],
        ["19+", 3.0]
    ]);

}

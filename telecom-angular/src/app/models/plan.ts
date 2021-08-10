class Plan {
    id: number;
    maxNumLines: number;
    baseCost: number;
    costPerLine: number;

    constructor(id = 0, maxNumLines = 0, baseCost = 0, costPerLine = 0) {
        this.id = id;
        this.maxNumLines = maxNumLines;
        this.baseCost = baseCost;
        this.costPerLine = costPerLine;
    }
}

export default Plan;
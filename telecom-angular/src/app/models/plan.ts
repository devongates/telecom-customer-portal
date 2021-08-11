class Plan {
	id: number;
	maxNumLines: number;
	baseCost: number;
	costPerLine: number;
	name: string;

	constructor(id = 0, maxNumLines = 0, baseCost = 0, costPerLine = 0, name = "") {
		this.id = id;
		this.maxNumLines = maxNumLines;
		this.baseCost = baseCost;
		this.costPerLine = costPerLine;
		this.name = name;
	}
}

export default Plan;
import Phone from "./phone";
import Plan from "./plan";

class UserPlan {
    id: number;
    plan: Plan;
	phones: Array<Phone>

    constructor(id = 0, plan:Plan, phones = []) {
        this.id = id;
		this.plan=plan;
		this.phones=phones;
    }
}

export default UserPlan;
import Phone from "./phone";
import Plan from "./plan";

class UserPlan {
    id: number;
    planId: number;
    userId: number;
    plan: Plan;
    phones: Array<Phone>

    constructor(id = 0, planId = 0, userId = 0, plan = new Plan(), phones = []) {
        this.id = id;
        this.planId = planId;
        this.userId = userId;
        this.plan = plan;
        this.phones = phones;
    }
}

export default UserPlan;
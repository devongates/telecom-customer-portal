import Phone from "./phone";
import Plan from "./plan";

class UserPlan {
    id: number;
    planId: number;
    userId: number;

    constructor(id = 0, planId = 0, userId = 0) {
        this.id = id;
        this.planId = planId;
        this.userId = userId;
    }
}

export default UserPlan;
import Phone from "./phone";
import Plan from "./plan";

class UserPlan {
    id: number;
    plan_id: number;
    user_id: number;

    constructor(id = 0, plan_id = 0, user_id = 0) {
        this.id = id;
        this.plan_id = plan_id;
        this.user_id = user_id;
    }
}

export default UserPlan;
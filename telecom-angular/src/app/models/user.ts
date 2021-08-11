import UserPlan from "./userPlan";

class User {
    id: number;
    email: string;
    password: string;
	userPlans: Array<UserPlan>

    constructor(id = 0, email = '', password = '', userPlans=[]) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.userPlans = userPlans;
    }
}

export default User;
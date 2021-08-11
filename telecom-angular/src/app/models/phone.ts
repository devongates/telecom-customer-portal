class Phone {
    id: number;
    name: string;
    phoneNumber: string;
    plan: string;

    constructor(id = 0, name = '', phoneNumber = '', plan = '') {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.plan = plan;
    }
}

export default Phone;
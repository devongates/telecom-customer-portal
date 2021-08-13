class Phone {
    id: number;
    phoneName: string;
    phoneNumber: string;
    phoneType: string;
    userPlanId: number;

    constructor(id = 0, phoneName = '', phoneNumber = '', phoneType = '', userPlanId = 0) {
        this.id = id;
        this.phoneName = phoneName;
        this.phoneNumber = phoneNumber;
        this.phoneType = phoneType;
        this.userPlanId = userPlanId;
    }
}

export default Phone;
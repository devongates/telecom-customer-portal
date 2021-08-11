class Phone {
    id: number;
    phoneName: string;
    phoneNumber: string;
    phoneType: string;

    constructor(id = 0, phoneName = '', phoneNumber = '', phoneType = '') {
        this.id = id;
        this.phoneName = phoneName;
        this.phoneNumber = phoneNumber;
        this.phoneType = phoneType;
    }
}

export default Phone;
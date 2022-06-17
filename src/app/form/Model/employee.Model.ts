export class EmployeeModel {
    firstName : String;
    lastName : String;
    gender: String;
    department :String;
    salary : Number;
    notes : String;
    profilePic : String;
    startdate: Date;

    constructor(
        firstName: String,
        lastName: String,
        gender : String,
        department : String,
        salary : number,
        notes:String,
        profilePic : String,
        startdate: Date
    )
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.gender=gender;
        this.department=department;
        this.salary=salary;
        this.notes=notes;
        this.profilePic=profilePic;
        this.startdate=startdate;

    }
    
}
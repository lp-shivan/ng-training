export class Person {

    first_name: string;
    last_name: string;
    birth_date: Date;

    constructor(first_name: string, last_name: string, birth_date: Date) {
        console.log('Base Class Constructor ');
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;
    }

    showDetails() {
        console.log('First Name : ', this.first_name);
        console.log('Last Name : ', this.last_name);
        console.log('Birth Date : ', this.birth_date);
    }
}

export class Employee extends Person {

    emp_no: string;

    constructor(first_name: string, last_name: string, birth_date: Date, emp_no: string) {
        console.log('Derived Class Constructor ');
        super(first_name, last_name, birth_date);
        this.emp_no = emp_no;
    }

    showDetails() {
        super.showDetails();
        console.log('Emp No : ', this.emp_no);
    }
}

let employeeObj = new Employee('LP Shivan', 'Shambavan', new Date(1983, 6, 14), '1456');

employeeObj.showDetails();

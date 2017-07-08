enum Gender {
    Male,
    Female
}

class Employee {

    emp_no: string;
    birth_date: Date;
    first_name: string;
    last_name: string;
    gender: Gender;
    hire_date: Date

    constructor(emp_no: string, birth_date: Date,
                first_name: string, last_name: string,
                gender: Gender, hire_date: Date) {
        
        this.emp_no = emp_no;
        this.birth_date = birth_date;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.hire_date = hire_date;
    }

    showEmployee() {
        console.log('Employee Details');
        console.log('Emp No : ', this.emp_no);
        console.log('Birth Date : ', this.birth_date);
        console.log('Firstname : ', this.first_name);
        console.log('Last Name: ', this.last_name);
        console.log('Gender : ', this.gender);
        console.log('Hire Date: ', this.hire_date);
    }
}

let employee = new Employee('123', new Date(1983, 6, 14), 
                            'LP Shivan', 'Shambavan', 
                            Gender.Male, new Date());

employee.showEmployee();

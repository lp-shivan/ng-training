"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = (function () {
    function Person(first_name, last_name, birth_date) {
        console.log('Base Class Constructor ');
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;
    }
    Person.prototype.showDetails = function () {
        console.log('First Name : ', this.first_name);
        console.log('Last Name : ', this.last_name);
        console.log('Birth Date : ', this.birth_date);
    };
    return Person;
}());
exports.Person = Person;
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(first_name, last_name, birth_date, emp_no) {
        var _this = this;
        console.log('Derived Class Constructor ');
        _this = _super.call(this, first_name, last_name, birth_date) || this;
        _this.emp_no = emp_no;
        return _this;
    }
    Employee.prototype.showDetails = function () {
        _super.prototype.showDetails.call(this);
        console.log('Emp No : ', this.emp_no);
    };
    return Employee;
}(Person));
exports.Employee = Employee;
var employeeObj = new Employee('LP Shivan', 'Shambavan', new Date(1983, 6, 14), '1456');
employeeObj.showDetails();

class EmpMainClass {
  constructor() {
    this.employeWage_per_hour = 20;
    this.employeWage_full_day = 8;
    this.employeWage_part_time_hours = 4;
    this.working_days_per_month = 20;
    this.max_working_hour_in_month = 100;
  }

  getAttendance() {
    let attendance = Math.floor(Math.random() * 10) % 2;
    return attendance;
  }

  main() {
    console.log("Welcome to employee wage project");
    let total_working_hours = 0;
    let total_working_days = 0;
    let total_wage = 0;

    let attendanceObj = new EmpMainClass();
    let attendanceType = attendanceObj.getAttendance();

    switch (attendanceType) {
      case 0:
        console.log("Employee is Absent");
        break;
      case 1:
        console.log("Employee is Present");
        while (
          total_working_hours < this.max_working_hour_in_month &&
          total_working_days < this.working_days_per_month
        ) {
          let empType = Math.floor(Math.random() * 10) % 2;
          let empHours = 0;

          switch (empType) {
            case 0:
              empHours = this.employeWage_full_day;
              break;
            case 1:
              empHours = this.employeWage_part_time_hours;
              break;
            default:
              break;
          }

          let dailyWage = empHours * this.employeWage_per_hour;
          total_wage += dailyWage;
          total_working_hours += empHours;
          total_working_days++;
          console.log("Day " + total_working_days + " wage: " + dailyWage);
        }

        console.log("Total wage for " + total_working_days + " days of work: " + total_wage);
        break;
      default:
        break;
    }
  }
}

let empMainObj = new EmpMainClass();
empMainObj.main();
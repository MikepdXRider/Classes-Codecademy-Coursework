//Super class with a constructor
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
    
  get name() {
    return this._name;
  }
    
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
    
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword(){
    return Math.floor(Math.random() * 10000);
  }
}
//Nurse class with inheritance
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
    
  get certifications() {
    return this._certifications;
  }
    
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}
  
//Doctor class with inheritance
class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  } 

  get insurance() {
    return this._insurance;
  }
}

//Testing nurse class and inheritance
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

//Testing doctor class and inheritance
const doctorJeffrie = new Doctor ('Jeffrie', true);
doctorJeffrie.takeVacationDays(7);
console.log(doctorJeffrie.remainingVacationDays);
console.log(doctorJeffrie.insurance);
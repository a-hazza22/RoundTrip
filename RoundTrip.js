const departTripTicket = {
    //بيانات التذكرة 
  name: "Brandon",
  from: "Pittsburgh, PA",
  to: "Augsburg, Germany",
  businessClass: false,
  upgrade() {
    //ترقية التذكرة
    if (this.businessClass) {
      console.log("Your ticket is already business class!");
    } else {
      this.businessClass = true;
      console.log("Ticket upgraded to business class!");
    }
  },
  //أوقات الرحلة
  leaveTime: 12,
  arriveTime: 23,
  flightTime() {
    let flightTime = this.arriveTime - this.leaveTime;
    if (flightTime < 0) {
      flightTime += 24;
    }
    console.log(flightTime + " hours");
  }
};
// نفس الكود الاول ولاكن في دالة مختلفة لتذكرة العودة 
const returnTripTicket = {
  name: "Brandon",
  from: "Augsburg, Germany",
  to: "Pittsburgh, PA",
  businessClass: true,
  upgrade() {
    if (this.businessClass) {
      console.log("Your ticket is already business class!");
    } else {
      this.businessClass = true;
      console.log("Ticket upgraded to business class!");
    }
  },
  leaveTime: 24,
  arriveTime: 4,
  flightTime() {
    let flightTime = this.arriveTime - this.leaveTime;
    if (flightTime < 0) {
      flightTime += 24;
    }
    console.log(flightTime + " hours");
  }
};
// --- تشغيل الدوال ---
// ترقية تذكرة الذهاب 
departTripTicket.upgrade();
// ترقية تذكرة العودة
returnTripTicket.upgrade();
// عرض أوقات الرحلة
departTripTicket.flightTime();
returnTripTicket.flightTime();


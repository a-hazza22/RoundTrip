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


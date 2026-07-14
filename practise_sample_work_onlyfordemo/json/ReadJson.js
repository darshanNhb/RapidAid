const fs = require("fs");
fs.readFile("C:/Users/Darshan Buddhdev/OneDrive/Desktop/NIRMA/full_stack_nirma/RapidAid/practise_sample_work_onlyfordemo/emergencyRequest.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const emergencyRequest = JSON.parse(data);
    console.log("Emergency Request Details are given below.\n");
    console.log("Request ID:", emergencyRequest.requestId);
    console.log("Patient Name:", emergencyRequest.patient.name);
    console.log("Age:", emergencyRequest.patient.age);
    console.log("Blood Group:", emergencyRequest.patient.bloodGroup);
    console.log("Emergency Type:", emergencyRequest.emergencyType);
    console.log("Priority:", emergencyRequest.priority);
    console.log("Pickup Address:", emergencyRequest.pickupLocation.address);
    console.log("Assigned Ambulance:", emergencyRequest.assignedAmbulance.vehicleNumber);
    console.log("Driver:", emergencyRequest.assignedAmbulance.driverName);
    console.log("Hospital:", emergencyRequest.assignedHospital.hospitalName);
    console.log("Status:", emergencyRequest.requestStatus);
});
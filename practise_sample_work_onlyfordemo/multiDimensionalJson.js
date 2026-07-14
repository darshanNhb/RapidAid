const emergencyRequests = [
  {
    requestId: "ER001",
    patient: {
      patientId: "PAT101",
      name: "Rahul Sharma",
      age: 28
    },
    ambulances: [
      {
        ambulanceId: "AMB201",
        driver: "Amit Patel",
        status: "On the Way"
      },
      {
        ambulanceId: "AMB202",
        driver: "Rohit Shah",
        status: "Available"
      }
    ]
  },
  {
    requestId: "ER002",
    patient: {
      patientId: "PAT102",
      name: "Priya Mehta",
      age: 35
    },
    ambulances: [
      {
        ambulanceId: "AMB203",
        driver: "Suresh Kumar",
        status: "Busy"
      },
      {
        ambulanceId: "AMB204",
        driver: "Kiran Joshi",
        status: "On the Way"
      }
    ]
  }
];
console.log("Complete JSON Array is given below.");
console.log(emergencyRequests);
console.log("\nIndividual Elements are given below.");
console.log("Request ID:", emergencyRequests[0].requestId);
console.log("Patient Name:", emergencyRequests[0].patient.name);
console.log(
  "Second Ambulance Driver:",
  emergencyRequests[0].ambulances[1].driver
);
console.log(
  "Ambulance Status:",
  emergencyRequests[1].ambulances[0].status
);
console.log("Patient Age:", emergencyRequests[1].patient.age);
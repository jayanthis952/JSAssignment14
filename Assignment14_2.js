let hospitals = [
    {
      "id": 1,
      "name": "Hospital A",
      "location": "Delhi",
      "noOfBeds": 450,
      "availability": "Yes"
    },
    {
      "id": 2,
      "name": "Hospital B",
      "location": "Pune",
      "noOfBeds": 150,
      "availability": "No"
    },
    {
      "id": 3,
      "name": "Hospital C",
      "location": "Pune",
      "noOfBeds": 350,
      "availability": "Yes"
    }
  ];
  
  // Filter the hospitals based on the criteria
  let filteredHospitals = hospitals.filter(hospital => {
    return hospital.noOfBeds > 200 && hospital.availability === "Yes" && hospital.location === "Pune";
  });
  
  console.log(filteredHospitals);
  
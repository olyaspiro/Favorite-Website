function thisIsFunction(phone) {
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/; // Format: (123) 456-7890
    return phonePattern.test(phone);
  }
  
  console.log(thisIsFunction("(708) 456-7890")); // true
  console.log(thisIsFunction("708-456-7890")); // false






let tutors = [
    { name: "Christopher", subject: "Math", rate: 30 },
    { name: "Eva", subject: "English", rate: 25 },
    { name: "Estella", subject: "Science", rate: 35 },
    { name: "Rachael", subject: "History", rate: 28 },
  ];
  
  function thisIsAnotherFunction(name, subject, rate) {
    tutors.push({ name, subject, rate });
    console.log(`${name} has been added as a ${subject} tutor at a rate of $${rate} per hour.`);
  }
  
  // Adding a new tutor
  thisIsAnotherFunction("Lucas", "Art", 40);
  
  console.log(tutors);
  


  
  


  function thisIsAnotherFunction(hourlyRate, hours) {
    return hourlyRate * hours;
  }
  
  const hourlyRate = 30; // Rate per hour in dollars
  const hours = 1; // Number of hours for the tutoring session
  
  console.log(`Total tutoring price: $${thisIsAnotherFunction(hourlyRate, hours)}`);




  function thisIsAnotherFunction(message) {
    let feedback = [message];
    return feedback;
  }
  
  console.log(thisIsAnotherFunction("Great website!")); 
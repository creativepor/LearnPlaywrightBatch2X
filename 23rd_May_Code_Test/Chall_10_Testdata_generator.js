function generateTestData(count) {
  // const used for fixed configuration values
  const roles = ["admin", "editor", "viewer", "tester", "manager"];
  const domain = "testingacademy.com";
  
  // var used for a global counter tracking total generated records across operations
  var totalGeneratedCount = 0; 
  
  let result = "";

  // let used for block-scoped loop variables
  for (let i = 1; i <= count; i++) {
    let id = `USR-${String(i).padStart(4, '0')}`;
    let name = `TestUser_${i}`;
    let email = `testuser${i}@${domain}`;
    let role = roles[(i - 1) % roles.length];
    
    // Every 3rd user is INACTIVE
    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

    result += `${id} | ${name} | ${email} | ${role} | ${status}\n`;
    totalGeneratedCount++;
  }

  return result.trim();
}
console.log(generateTestData(10));
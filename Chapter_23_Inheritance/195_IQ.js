// Base class for all test cases

class TestCase {
    execute() {
        console.log("Running generic test");
    }
}
// Derived classes for specific test types
class UnitTest extends TestCase {
    execute() {
        console.log("Running unit test — checking one function");
    }
}
// Derived classes for specific test types
class APITest extends TestCase {
    execute() {
        console.log("Running API test — sending HTTP request");
    }
}
// Derived classes for specific test types
class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E test — opening browser");
    }
}
// Usage
let tests = [new UnitTest(), new APITest(), new E2ETest()];

// Execute all tests
tests.forEach(function (test) {
    test.execute();
});
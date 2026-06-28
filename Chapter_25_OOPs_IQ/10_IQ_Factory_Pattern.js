// OOPs IQ Question 10: Design Pattern - Factory Pattern
// Question: What is the Factory Pattern and why is it useful?

console.log(\"=== WITHOUT FACTORY PATTERN (Direct instantiation) ===\\n\");

class PdfDocument {
  export() {
    return \"PDF exported\";
  }
}

class WordDocument {
  export() {
    return \"Word document exported\";
  }
}

class ExcelDocument {
  export() {
    return \"Excel spreadsheet exported\";
  }
}

// User has to know about all document types
const pdf = new PdfDocument();
const word = new WordDocument();
const excel = new ExcelDocument();

console.log(pdf.export());
console.log(word.export());
console.log(excel.export());

console.log(\"\\nProblems:\");
console.log(\"❌ Client needs to know all document types\");
console.log(\"❌ Adding new type requires client code change\");
console.log(\"❌ Logic for choosing type is scattered\\n\");

console.log(\"\\n=== WITH FACTORY PATTERN ===\\n\");

// Factory class encapsulates object creation
class DocumentFactory {
  static create(type) {
    switch (type.toLowerCase()) {
      case 'pdf':
        return new PdfDocument();
      case 'word':
        return new WordDocument();
      case 'excel':
        return new ExcelDocument();
      default:
        throw new Error(`Unknown document type: ${type}`);
    }
  }
}

// Client only knows about factory
const doc1 = DocumentFactory.create('pdf');
const doc2 = DocumentFactory.create('word');
const doc3 = DocumentFactory.create('excel');

console.log(doc1.export());
console.log(doc2.export());
console.log(doc3.export());

console.log(\"\\nBenefits:\");
console.log(\"✅ Client doesn't need to know concrete types\");
console.log(\"✅ Adding new type only requires factory change\");
console.log(\"✅ Centralized object creation logic\\n\");

console.log(\"\\n=== ADVANCED: Factory with Validation ===\\n\");

class AdvancedDocumentFactory {
  static supportedTypes = ['pdf', 'word', 'excel', 'txt', 'json'];

  static create(type) {
    if (!this.supportedTypes.includes(type.toLowerCase())) {
      throw new Error(`Type must be one of: ${this.supportedTypes.join(', ')}`);
    }

    switch (type.toLowerCase()) {
      case 'pdf':
        return new PdfDocument();
      case 'word':
        return new WordDocument();
      case 'excel':
        return new ExcelDocument();
      case 'txt':
        return new TextDocument();
      case 'json':
        return new JsonDocument();
    }
  }

  static getSupportedTypes() {
    return this.supportedTypes;
  }

  static isSupported(type) {
    return this.supportedTypes.includes(type.toLowerCase());
  }
}

class TextDocument {
  export() {
    return \"Text file exported\";
  }
}

class JsonDocument {
  export() {
    return \"JSON document exported\";
  }
}

console.log(\"Supported types:\", AdvancedDocumentFactory.getSupportedTypes());
console.log(\"Is 'xml' supported?\", AdvancedDocumentFactory.isSupported('xml'));
console.log(\"Is 'json' supported?\", AdvancedDocumentFactory.isSupported('json'));

const txtDoc = AdvancedDocumentFactory.create('txt');
console.log(txtDoc.export());

console.log(\"\\n=== REAL-WORLD: Database Connection Factory ===\\n\");

class DatabaseConnection {
  connect() {
    throw new Error(\"Must implement connect()\");
  }
}

class MySQLConnection extends DatabaseConnection {
  connect() {
    console.log(\"✅ Connected to MySQL\");
  }
}

class PostgreSQLConnection extends DatabaseConnection {
  connect() {
    console.log(\"✅ Connected to PostgreSQL\");
  }
}

class MongoDBConnection extends DatabaseConnection {
  connect() {
    console.log(\"✅ Connected to MongoDB\");
  }
}

class DatabaseFactory {
  static createConnection(dbType) {
    const type = dbType.toLowerCase();
    
    switch (type) {
      case 'mysql':
        return new MySQLConnection();
      case 'postgresql':
        return new PostgreSQLConnection();
      case 'mongodb':
        return new MongoDBConnection();
      default:
        throw new Error(`Unknown database type: ${dbType}`);
    }
  }
}

// Configuration-driven (from config file)
const config = { database: 'postgresql' };
const db = DatabaseFactory.createConnection(config.database);
db.connect();

console.log(\"\\n=== ANSWER ===\");
console.log(`
FACTORY PATTERN:
A creational design pattern that encapsulates object creation.

Key Idea:
- Separate object creation from usage
- Use a factory method to create objects
- Client doesn't know concrete classes

Structure:
┌─────────────────────┐
│   Factory Class     │
│  ├─ create(type)    │
│  └─ ...helpers      │
└──────────┬──────────┘
           │
           ├─→ ConcreteClass1
           ├─→ ConcreteClass2
           └─→ ConcreteClass3

Benefits:
✅ Centralized creation logic
✅ Easy to add new types
✅ Loose coupling (client doesn't know types)
✅ Consistent object creation
✅ Easy to switch implementations
✅ Configuration-driven behavior

Use Cases:
1. Multiple related classes
2. Type chosen at runtime
3. Creation logic is complex
4. Need extensibility
5. Configuration-driven selection

Comparison:
WITHOUT Factory:
const doc = new PdfDocument();
const doc = new WordDocument();
// Client must know all types

WITH Factory:
const doc = DocumentFactory.create('pdf');
// Client only knows factory

Example: Payment System
WITHOUT:
const payment = new CreditCardPayment();

WITH:
const payment = PaymentFactory.create('creditcard');

Easy switching:
config.paymentType = 'paypal'; // Just change config
const payment = PaymentFactory.create(config.paymentType);

Related Patterns:
- Abstract Factory: Multiple families of objects
- Builder: Complex object construction
- Singleton: Single instance of a class

When NOT to use:
❌ Only one concrete class
❌ Simple object creation
❌ Overcomplicates for small projects

Best Practices:
1. Factory method names should be clear (create, make, etc.)
2. Validate input parameters
3. Throw meaningful errors
4. Document supported types
5. Keep factory methods focused
6. Consider Abstract Factory for related families

Real-World Framework Examples:
- React.createElement() - Factory for components
- Array.from() - Factory to convert to arrays
- new Date() - Factory to create dates
- jQuery($) - Factory to create DOM wrappers
`);

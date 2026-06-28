// Encapsulation using Closures and IIFE (Immediately Invoked Function Expression)

const UserModule = (function () {
  let users = []; // Private variable
  let nextId = 1; // Private variable

  return {
    // Public method to add user
    addUser: function (name, email) {
      const user = {
        id: nextId++,
        name: name,
        email: email,
        createdAt: new Date()
      };
      users.push(user);
      console.log(`User added: ${name}`);
      return user;
    },

    // Public method to get user by ID
    getUserById: function (id) {
      return users.find(u => u.id === id);
    },

    // Public method to get all users
    getAllUsers: function () {
      return [...users]; // Return a copy to prevent external modification
    },

    // Public method to delete user
    deleteUser: function (id) {
      users = users.filter(u => u.id !== id);
      console.log(`User ${id} deleted`);
    },

    // Public method to update user
    updateUser: function (id, updates) {
      const user = users.find(u => u.id === id);
      if (user) {
        Object.assign(user, updates);
        console.log(`User ${id} updated`);
      }
    }
  };
})();

// Usage
UserModule.addUser("Alice", "alice@example.com");
UserModule.addUser("Bob", "bob@example.com");

console.log(UserModule.getAllUsers());
console.log(UserModule.getUserById(1));

UserModule.updateUser(1, { email: "alice.new@example.com" });
UserModule.deleteUser(2);

console.log(UserModule.getAllUsers());

// These won't work - users array is private
// console.log(UserModule.users); // undefined

const Account = (function() {
  function invalidPassword() {
    return 'Invalid Password';
  }
  
  function generateDisplayName() {
    const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charCount = chars.length - 1;
    
    let newName = '';
    
    for (; newName.length <= 16;) {
      let randIndex = Math.ceil(Math.random() * charCount);
      newName += chars[randIndex];
    }
    
    return newName;
  }
  
  let privEmail;
  let privPassword;
  let privFirstName;
  let privLastName;
  
  function setInfo(email, password, firstName, lastName) {
    privEmail     = email;
    privPassword  = password;
    privFirstName = firstName;
    privLastName  = lastName;
  }
    
  return {
    init(email, password, firstName, lastName) {
      setInfo(email, password, firstName, lastName);
      this.displayName = generateDisplayName();
      return this;
    },
    
    resetPassword(currentOne, newOne) {
      if (privPassword === currentOne) {
        privPassword = newOne;
        return true;
      } 
      return invalidPassword();
    },
    
    firstName(password) {
      return privPassword === password ? privFirstName : invalidPassword();
    },
    
    lastName(password) {
      return privPassword === password ? privLastName : invalidPassword();
    },
    
    email(password) {
      return privPassword === password ? privEmail : invalidPassword();
    },
    
    displayName() {
      return this.displayName();
    },
    
    reanonymize(password) {
      if (privPassword === password) {
        this.displayName = generateDisplayName();
        return true;
      }
      return invalidPassword();
    },
  };
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc'));// logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
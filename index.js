// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//slice (0,1) will take off the first letter of currentUser
//you can add any expression inbetween brackets not just variables. You can do math etc.
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
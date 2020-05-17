import users from '../databases/connections/users.js';

function logIn(email, password) {
  return users.signInWithEmailAndPassword(email, password);
}

function logOut() {
  return users.signOut();
}

export {
  logIn,
  logOut,
};

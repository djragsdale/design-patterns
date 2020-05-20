import constants from '../constants/index.js';
import logger from '../util/logger/index.js';
import users from '../databases/connections/users.js';

// TODO: Do this is a class
// Could I use static methods for this?

class User {
  constructor({
    createdAt,
    customAuth,
    disabled,
    displayName,
    email,
    emailVerified,
    idToken,
    idTokenExpiresIn,
    lastLoginAt,
    passwordHash,
    passwordUpdatedAt,
    photoUrl,
    providerUserInfo,
    refreshToken,
    tokenType,
    userId,
    validSince,
  }) {
    this.createdAt = createdAt;
    this.customAuth = customAuth;
    this.disabled = disabled;
    this.displayName = displayName;
    this.email = email;
    this.emailVerified = emailVerified;
    this.idToken = idToken;
    this.idTokenExpiresIn = idTokenExpiresIn;
    this.lastLoginAt = lastLoginAt;
    this.passwordHash = passwordHash;
    this.passwordUpdatedAt = passwordUpdatedAt;
    this.photoUrl = photoUrl;
    this.providerUserInfo = providerUserInfo;
    this.refreshToken = refreshToken;
    this.tokenType = tokenType;
    this.userId = userId;
    this.validSince = validSince;
  }

  async logOut() {
    logger.trace(`Logging user ${this.idToken} out`);
    // return users.signOut();
  }

  async refreshIdToken() {
    logger.trace('Refreshing id token');
    const { data } = await users.post(constants.usersSignUpBaseURL, {
      grant_type: 'refresh_token',
      refresh_token: this.refreshToken,
    });

    // (string) The number of seconds in which the ID token expires.
    this.idTokenExpiresIn = data.expires_in;
    // (string) The type of the refresh token, always "Bearer".
    this.tokenType = data.token_type;
    // (string) The Firebase Auth refresh token provided in the request or a new refresh token.
    this.refreshToken = data.refresh_token;
    // (string) A Firebase Auth ID token.
    this.idToken = data.id_token;
    // (string) The uid corresponding to the provided ID token.
    this.userId = data.user_id;
    // project_id (string) Your Firebase project ID.
  }

  // async resetPassword() {
  //   logger.trace('Resetting password');
  // }
}

export async function getUser({ idToken }) {
  logger.trace(`Getting data for user ${idToken}`);
  const { data } = await users.post(constants.usersGetUserBaseURL, {
    idToken,
  });

  return new User(data);
}

export async function logInAndGetUser({ email, password }) {
  const { data } = await users.post(constants.usersSignInBaseURL, {
    email,
    password,
    returnSecureToken: true,
  });

  return new User(data);
}

export async function signUpAndGetUser({ email, password }) {
  logger.trace('Signing up user');
  const { data } = await users.post(constants.usersSignUpBaseURL, {
    email,
    password,
    returnSecureToken: true,
  });

  return new User(data);
}

export default User;

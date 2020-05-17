import * as firebase from 'firebase';

import config from '../../config.cjs';

const {
  userApiKey,
  userAuthDomain,
  userDatabaseURL,
  userProjectId,
  userStorageBucket,
  userMessagingSenderId,
} = config();

const app = firebase.initializeApp({
  apiKey: userApiKey,
  authDomain: userAuthDomain,
  databaseURL: userDatabaseURL,
  projectId: userProjectId,
  storageBucket: userStorageBucket,
  messagingSenderId: userMessagingSenderId,
});

export default app.auth();

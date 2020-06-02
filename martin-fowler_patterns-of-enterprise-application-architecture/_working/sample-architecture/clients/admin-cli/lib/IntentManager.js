import intents from './intents/index.js';

let intentContext = {};

function IntentManager() {
  let currentIntent = null;

  return {
    async callIntent(intent) {
      return this.callIntentWithData(intent, null);
    },

    async callIntentWithData(intent, data) {
      if (!intents[intent]) {
        throw new Error(`Intent ${intent} not recognized`);
      }

      const previousIntent = currentIntent;
      currentIntent = intent;
      const intentState = {};
      if (intents[intent].setup) await intents[intent].setup.call({ state: intentState });
      const resultData = await intents[intent].run.call({
        ...intentContext,
        state: intentState,
      }, data);
      if (intents[intent].teardown) await intents[intent].teardown();

      currentIntent = previousIntent;

      await this.exit();
      return resultData;
    },

    async passIntentResultToNextIntent(firstIntent, secondIntent) {
      const firstIntentResult = await this.callIntent(firstIntent);
      await this.callIntentWithData(secondIntent, firstIntentResult);
    },

    async exit() {
      process.exit(0);
    },
  };
}

const instance = IntentManager();
intentContext.IntentManager = instance;

export default instance;

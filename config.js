exports.languages = {
  en: "en-US",
  de: "de-DE",
  es: "es-AR",
  pl: "pl-PL"
};

exports.postsPerPage = 10;

const firebaseConfig = {
  dev: {
    apiKey: "AIzaSyCs7R9j_MjNEVaDAqzCpAOvOrAeTVkQV7E",
    authDomain: "intive3-dev.firebaseapp.com",
    databaseURL: "https://intive3-dev.firebaseio.com",
    projectId: "intive3-dev",
    storageBucket: "intive3-dev.appspot.com",
    messagingSenderId: "381749383962",
    appId: "1:381749383962:web:32ec26c48a09be482d12a3"
  },
  staging: {
    apiKey: "AIzaSyCNlLqiwjf0eWKceZ9JX0jbfLEmvhrwOVQ",
    authDomain: "intive3-staging.firebaseapp.com",
    databaseURL: "https://intive3-staging.firebaseio.com",
    projectId: "intive3-staging",
    storageBucket: "intive3-staging.appspot.com",
    messagingSenderId: "532402778384",
    appId: "1:532402778384:web:2407ed68612c6e25b67595"
  },
  prod: {
    apiKey: "AIzaSyCqsX77w9Zur1_lOTfUMQ2907j9Tpbe3Ro",
    authDomain: "intive3-prod.firebaseapp.com",
    databaseURL: "https://intive3-prod.firebaseio.com",
    projectId: "intive3-prod",
    storageBucket: "intive3-prod.appspot.com",
    messagingSenderId: "378924755498",
    appId: "1:378924755498:web:aa01f84901987e5b397153"
  }
};

let firebaseConfigFinal;

if (typeof window !== `undefined`) {
  const {
    location: { host }
  } = window;
  const devEnvs = ["intive3-dev.firebaseapp.com", "intive3-dev.web.app", "192.168.", "localhost"];
  const stagingEnvs = ["intive3-staging.firebaseapp.com", "intive3-staging.web.app"];

  const isDevEnv = devEnvs.some(env => host.includes(env));
  const isStagingEnvs = stagingEnvs.some(env => host.includes(env));

  if (isStagingEnvs) {
    firebaseConfigFinal = firebaseConfig.staging;
  } else if (isDevEnv) {
    firebaseConfigFinal = firebaseConfig.dev;
  } else {
    firebaseConfigFinal = firebaseConfig.prod;
  }
}

exports.firebaseConfig = firebaseConfigFinal;

exports.defaultLanguage = "en";

exports.defaultSwipeConfig = {
  preventDefaultTouchmoveEvent: true,
  trackMouse: true
};

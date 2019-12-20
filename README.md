This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



firebase configuration code for reactjs

//firebase-message-sw.js file create into public folder

importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
	apiKey: "AIzaSyCK52gDyutrZaZQOtPfUYcLGMhO0-HMmKA",
  authDomain: "crayond-comp-backend.firebaseapp.com",
  databaseURL: "https://crayond-comp-backend.firebaseio.com",
  projectId: "crayond-comp-backend",
  storageBucket: "crayond-comp-backend.appspot.com",
  messagingSenderId: "540551646550",
  appId: "1:540551646550:web:33601a8a79db6f7f3e5af7",
  measurementId: "G-RMJK5HJL6S"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
});

///gcm id paste in manifest.json
"gcm_sender_id": "103953800507",


//paste index.js main file

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}
..............................
export const firebaseinitial = ()=>{
  var firebaseConfig = {
    apiKey: "AIzaSyCK52gDyutrZaZQOtPfUYcLGMhO0-HMmKA",
    authDomain: "crayond-comp-backend.firebaseapp.com",
    databaseURL: "https://crayond-comp-backend.firebaseio.com",
    projectId: "crayond-comp-backend",
    storageBucket: "crayond-comp-backend.appspot.com",
    messagingSenderId: "540551646550",
    appId: "1:540551646550:web:33601a8a79db6f7f3e5af7",
    measurementId: "G-RMJK5HJL6S"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
   const messaging=fire.messaging();
  // navigator.serviceWorker
  //   .register('/my-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  // });

messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
    "BHk7X71x4elCGbA-k9XrvVkY0qJk-k9O01PdHwto4E1amf8fjZk7kM5E2ujky--p1aT81Fg4PGaTPuPijGYrofM"
  );

}

...................................

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then(function(registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
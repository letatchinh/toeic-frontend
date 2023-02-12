import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import firebaseConfig from "./firebase.config";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

function requestPermission() {
  if (typeof Notification !== "undefined") {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // Initialize Firebase Cloud Messaging and get a reference to the service
        const messaging = getMessaging(app);
        getToken(messaging, {
          vapidKey:
            "BK22DSjVs6bkhxff5AhffVo8gz-FcGD_axWKPMwNBSWNTyM8Q8N6omm90nOLQQHIySVIow5tn59vyDtfrRLIe4w",
        }).then((token) => {
          if (token) {
            console.log(token, "token");
          } else {
            console.log("No Token");
          }
        });
      } else {
        console.log("not Permitted");
      }
    });
  }
}
requestPermission();

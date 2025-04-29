// Use ES6 module imports
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js';

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCW3vzR1V7ZnkM389ZQFsM1WD3B4kO3tp4",
    authDomain: "jaya-construction-fe058.firebaseapp.com",
    projectId: "jaya-construction-fe058",
    storageBucket: "jaya-construction-fe058.appspot.com",
    messagingSenderId: "842329832873",
    appId: "1:842329832873:web:d2306f734c82ce42e618b8"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Handle background notifications
onBackgroundMessage(messaging, (payload) => {
  console.log('Received background message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

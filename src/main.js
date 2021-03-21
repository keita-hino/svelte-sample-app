import App from './App.svelte';

const firebaseConfig = {
	apiKey: FIREBASE_APIKEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	databaseURL: FIREBASE_DATABASE_URL,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
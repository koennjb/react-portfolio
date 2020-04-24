import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

class FirebaseAuth {
    auth: firebase.auth.Auth;
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
    }
    // *** Auth API ***
    createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut(): void {
        this.auth.signOut();
    }

    resetPassword(email: string): Promise<void> {
        return this.auth.sendPasswordResetEmail(email);
    }

    updatePassword(password: string): Promise<void> {
        if (!this.auth.currentUser) {
            throw new Error('No user to update password for');
        } else {
            return this.auth.currentUser.updatePassword(password);
        }
    }
}
export default FirebaseAuth;

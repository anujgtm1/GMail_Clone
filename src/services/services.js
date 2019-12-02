import * as firebase from 'firebase'
import { firebaseConfig } from '../config/firebaseConfig'

let instance = null

class FirebaseService {
    constructor() {
        if (!instance) {
            this.app = firebase.initializeApp(firebaseConfig);
            instance = this;
        }
        return instance
    }
}

const firebaseService = new FirebaseService().app


const FIREBASE_USERS_REF = firebaseService.database().ref('Users')

export const storeCredentials = (email, password) => {

    FIREBASE_USERS_REF.push().set({email, password}, (error) => {
        if (error) {
            console.log(error)
        }
    })
}


export default firebaseService;
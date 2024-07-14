import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import toast from 'react-hot-toast'

const firebaseConfig = {
  apiKey: 'AIzaSyCEUkVjzTVh7fsgXHTD8ITAv3-ahmshBLY',

  authDomain: 'sapient-catbird-355616.firebaseapp.com',

  projectId: 'sapient-catbird-355616',

  storageBucket: 'sapient-catbird-355616.appspot.com',

  messagingSenderId: '398439491238',

  appId: '1:398439491238:web:648b51c05c445344cdb667',

  measurementId: 'G-Z9V02RGM2P',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export const Register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch {
    toast.error(error.message)
  }
}
export const Login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    console.error(error)
    error && toast.error('Giriş Sırasında Hata Oluştu Bilgileri Kontrol Ediniz ve Tekrar Deneyiniz')
  }
}

export const Logout = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    toast.error(error)
  }
}

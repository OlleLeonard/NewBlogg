const AuthContext = React.createContext();

import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return auth.signOut();
};

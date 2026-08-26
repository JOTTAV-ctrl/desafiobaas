import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validação básica para ajudar no diagnóstico quando variáveis de ambiente
// não estiverem definidas (evita erro genérico do Firebase "invalid-api-key").
if (!firebaseConfig.apiKey) {
  throw new Error(
    'Variável de ambiente NEXT_PUBLIC_FIREBASE_API_KEY ausente. Crie um arquivo .env.local na raiz do projeto com as chaves do Firebase (veja .env.example).'
  );
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);

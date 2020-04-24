import 'firebase/auth';
import { createCtx } from './helper';
import FirebaseAuth from '../firebase/FirebaseAuth';

export const [useFirebase, FireaseContextProvider] = createCtx<FirebaseAuth>();

import 'firebase/auth';
import FirebaseAuth from '../firebase/FirebaseAuth';
import { makeContext } from './helper';

export const [useCtx, CtxConsumer, CtxProvider] = makeContext<FirebaseAuth>();

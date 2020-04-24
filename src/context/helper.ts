import React, { Provider, Consumer } from 'react';

export function makeContext<T>(): readonly [() => T, Consumer<T | undefined>, Provider<T | undefined>] {
    const ctx = React.createContext<T | undefined>(undefined);
    function useCtx(): T {
        const c = React.useContext<T | undefined>(ctx);
        if (!c) throw new Error('useCtx must be inside a Provider with a value');
        return c;
    }

    return [useCtx, ctx.Consumer, ctx.Provider] as const;
}

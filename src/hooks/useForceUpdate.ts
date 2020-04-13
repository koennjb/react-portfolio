import { useState } from 'react';

//create your forceUpdate hook
export default function useForceUpdate(): () => void {
    const [value, setValue] = useState<number>(0); // integer state
    return (): void => setValue((value) => ++value); // update the state to force render
}

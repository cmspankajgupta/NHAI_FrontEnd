import { useRef } from 'react';

const useMemoize = (fn, dependencies) => {
    const cache = useRef(new Map());
    const dependenciesKey = JSON.stringify(dependencies);
    if (!cache.current.has(dependenciesKey)) {
        const result = fn();
        cache.current.set(dependenciesKey, result);
    }
    return cache.current.get(dependenciesKey);
};

export default useMemoize;

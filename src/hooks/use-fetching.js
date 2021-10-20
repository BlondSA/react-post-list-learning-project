import { useState } from "react";

const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            setError(e.message, e);
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error];
};

export default useFetching;

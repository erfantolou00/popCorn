import { useEffect, useState } from "react";

const KEY = "9d4f24d7";

export function useMovies(query) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(
        function () {
            const controller = new AbortController();
            async function fetchMovie() {
                try {
                    setIsLoading(true);
                    setError("");

                    const res = await fetch(
                        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                        { signal: controller.signal }
                    );

                    if (!res.ok) throw new Error("fetching movies went wrong");

                    const data = await res.json();

                    if (data.Response === "False") throw new Error("Movie Not Found ⛔");
                    setMovies(data.Search);
                    setError("");
                } catch (err) {
                    if (err.name !== "AbortError") {
                        console.error(err.message);
                        setError(err.message);
                    }
                } finally {
                    setIsLoading(false);
                }
            }
            if (query.length < 3) {
                setMovies([]);
                setError("");
                return;
            }

            fetchMovie();
            return function () {
                controller.abort();
            };
        },
        [query]
    );
    return { isLoading, movies, error }
}
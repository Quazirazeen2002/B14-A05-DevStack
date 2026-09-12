import { useEffect, useState } from "react";

export function useTechnologies() {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function loadTechnologies() {
      try {
        const response = await fetch("/technologies.json");
        if (!response.ok) {
          throw new Error(`Failed to load technologies (status ${response.status})`);
        }
        const data = await response.json();
        if (!isCancelled) {
          setTechnologies(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    loadTechnologies();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { technologies, isLoading, error };
}

import { useEffect, useState } from 'react';

export function useData<T>(endpoint: string) {
  const [data, setData] = useState<T>(); // Specify the type of data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // No need to return data in cleanup function
  }, [endpoint]); // Only re-run effect if endpoint changes

  return data;
}

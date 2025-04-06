// homeLoader.js - This is the loader for fetching instrument data
export const homeLoader = async () => {
    const response = await fetch('/data.json');  // Make sure the JSON is placed in the public directory
    if (!response.ok) {
      throw new Error('Failed to fetch instruments');
    }
    const data = await response.json(); // Parse and return the data
    return data;
  };
  
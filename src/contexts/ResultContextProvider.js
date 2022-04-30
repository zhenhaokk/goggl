import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl =
  "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Elon Musk");


  // /video, /search, /images
  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-rapidAPI-host": "google-search3.p.rapidapi.com",
        "x-rapidAPI-key": "b7094e4754msh21b14e141a8a2e8p1e896fjsn57cb139c33cb",
      },
    });
    const data = await response.json();
    console.log(data);

    if (type.includes('/news')) {
      setResults(data.entries);
    } else { 
      setResults(data);
    }
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{
        results,
        isLoading,
        searchTerm,
        setSearchTerm,
        getResults,
      }}
    >
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);
import { useState } from "react";
import { SearchBar } from "./Searchbox";
import { Dropdown } from "./Dropdown";
import { CountriesList } from "./CountriesList";

import { useTheme } from "../Hooks/useTheme";

export const Home = () => {
  const [query, setQuery] = useState("")

  const {
    isDarkModeOn
  } = useTheme()

  
  return (
    <main className={`${isDarkModeOn ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <Dropdown setQuery={setQuery}/>
      </div>
      <CountriesList query={query} />
    </main>
  );
};

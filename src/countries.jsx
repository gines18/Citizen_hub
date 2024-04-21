import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wmwnsplphpcmvnghmcvo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtd25zcGxwaHBjbXZuZ2htY3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NDcwMTksImV4cCI6MjAyOTIyMzAxOX0.gWIVjbf7eBfWtgiMAOZ42yfzqtr4PPNt5PnsWvNhCoc"
);


function Countries() {
  const [countries, setCountries] = useState([]);
  const [newCountryName, setNewCountryName] = useState("");
  const [error, setError] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  async function handleDelete(countryName) {
    const { error } = await supabase
      .from('countries')
      .delete()
      .eq('name', countryName);
    getCountries();
  }

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setError("");
  }

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  async function insertCountry() {
    if (!newCountryName.trim()) {
      setError("Country name cannot be empty");
      return;
    }

    if (isInputFocused) {
      setError("");
    }

    const { data, error } = await supabase
      .from("countries")
      .insert([{ name: newCountryName }])
      .select();
    if (error) {
      console.error("Error inserting country:", error.message);
    } else {
      // Refresh the list of countries
      getCountries();
      // Clear the input field
      setNewCountryName("");
      setError("");
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-blue-100 py-10">
        Countries you visited:
        <input
          className="p-2 m-2 border border-gray-300 rounded p"
          type="text"
          placeholder="Enter country name"
          value={newCountryName}
          onChange={(e) => setNewCountryName(e.target.value)}
          onFocus={handleInputFocus}
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={insertCountry}
        >
          Add Country
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <ul className="flex flex-col items-center justify-center w-full bg-blue-100">
        {countries.map((country) => (
          <div className="flex flex-row bg-red-100 w-full items-center justify-center" key={country.name}>
            <li className="p-6">{country.name}</li>
            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              onClick={() => handleDelete(country.name)}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    
    </>
  );
}

export default Countries;

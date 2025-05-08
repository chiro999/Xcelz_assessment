import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [propertydata, setPropertyData] = useState([]);

  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_URL;

    fetch(`${API_BASE}/api/properties`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          console.log("Fetched property data:", data);
          setPropertyData(data);
        } else {
          console.error("Unexpected API response (not an array):", data);
          setPropertyData([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch properties:", err);
        setPropertyData([]);
      });
  }, []);

  const cities = [...new Set(propertydata.map((cur) => cur.location))];
  const bedRooms = [...new Set(propertydata.map((cur) => cur.bedrooms))];

  return (
    <AppContext.Provider value={{ propertydata, cities, bedRooms }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider, AppContext };

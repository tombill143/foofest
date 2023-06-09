/* import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [selectedChoices, setSelectedChoices] = useState({});

  const handleSelect = (choice) => {
    setSelectedChoices(choice);
  };

  return (
    <BookingContext.Provider value={{ selectedChoices, handleSelect }}>
      {children}
    </BookingContext.Provider>
  );
};
 */

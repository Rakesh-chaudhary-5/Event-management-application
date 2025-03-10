import { createContext, useState } from "react";

export const EventContext = createContext();

export const MyProvider = ({ children }) => {
  const existingEvents = JSON.parse(localStorage.getItem("eventDetail")) || [];
  const [eventData, setEventData] = useState({
    title: "",
    type: "",
    category: "Religious",
    date: "",
    imageUrl: "",
  });
  const [createdEvents, setCreatedEvents] = useState(existingEvents);

  return (
    <EventContext.Provider
      value={{ eventData, setEventData, createdEvents, setCreatedEvents }}
    >
      {children}
    </EventContext.Provider>
  );
};

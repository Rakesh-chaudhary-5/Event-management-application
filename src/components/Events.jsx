import { Link } from "react-router-dom";
import "../App.css";
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../contexts/EventContext";
import eventData from "../assets/Data/eventData";

export default function Events() {
  const { createdEvents, setCreatedEvents } = useContext(EventContext);
  const [selectCategory, setSelectCategory] = useState("");

  const handleFilter = (el) => {
    el.stopPropagation();
    setSelectCategory(el.target.value);
  };

  useEffect(() => {
    if (createdEvents.length <= 0) {
      setCreatedEvents(eventData);
      localStorage.setItem("eventDetail", JSON.stringify(eventData));
    }
  }, []);

  // filtering events by category
  const filteredEvents = createdEvents.filter(
    (el) => selectCategory === "" || el?.category === selectCategory
  );

  return (
    <div
      onClick={() => {
        setSelectCategory("");
      }}
      className="w-full flex justify-center"
    >
      <div className="w-[1400px] mt-2 mb-10 px-6">
        {/* welcome message */}
        <div className="flex font-semibold items-center flex-col gap-2">
          <h1 className="text-2xl sm:text-4xl text-center md:text-4xl ">
            We Helped Communities Connect & Flourish
          </h1>
          <p className=" text-center text-xl sm:text-3xl text-[#026A8D]">
            ✦ Upcoming Events
          </p>
        </div>
        {/* filter section */}
        <div className="mt-10 flex justify-center gap-3 sm:gap-6">
          <button
            value="Religious"
            onClick={(el) => handleFilter(el)}
            className={`filterBtn ${
              selectCategory === "Religious" ? "selectFilterBtn" : ""
            } transition`}
          >
            Religious
          </button>
          <button
            value="Social"
            onClick={(el) => handleFilter(el)}
            className={`filterBtn ${
              selectCategory === "Social" ? "selectFilterBtn" : ""
            } transition`}
          >
            Social
          </button>
          <button
            value="Charity"
            onClick={(el) => handleFilter(el)}
            className={`filterBtn ${
              selectCategory === "Charity" ? "selectFilterBtn" : ""
            } transition`}
          >
            Charity
          </button>
        </div>

        {/*redirect on create event */}
        <div className="flex justify-center mt-6 font-semibold text-white ">
          <Link to={"/create-event"}>
            <button className="bg-[#026A8D] transition hover:scale-110 py-2 rounded-lg px-4">
              Create Event
            </button>
          </Link>
        </div>
        {/* events list section */}
        <section className="mt-10 flex justify-center sm:justify-start gap-10 gap-y-16 flex-wrap">
          {filteredEvents == "" ? (
            <h1 className="text-black text-2xl font-semibold text-center w-full h-64">
              Currently No Events Available
            </h1>
          ) : (
            filteredEvents.map((el) => (
              // Event card
              <div
                key={crypto.randomUUID()}
                className="w-[300px] rounded-lg p-4 shadow-xl shadow-black"
              >
                <div className="h-60">
                  <img
                    className="rounded-lg w-full pointer-events-none  object-cover h-full"
                    src={el.imageUrl}
                    alt="event-img"
                  />
                </div>

                <div className="mt-4">
                  <div className=" ">
                    <p
                      className={`${
                        el?.type === "free"
                          ? "text-[#166534] bg-[#DCFCE7] "
                          : "text-[#1e42bb] bg-[#DBEAFE] "
                      } font-semibold  w-fit rounded-lg py-1 px-4 `}
                    >
                      {el?.type}
                    </p>
                  </div>

                  {/* title */}
                  <p className="my-6 text-2xl font-semibold">{el?.title}</p>

                  {/* date */}
                  <div className="flex gap-2 items-center">
                    <i className="fas fa-calendar-alt clear-start text-[#666666]"></i>{" "}
                    <p className="text-lg">{el?.date}</p>
                  </div>

                  <div className="flex items-center my-2 gap-2">
                    <i className="fas fa-star text-[#fbbf24]"></i>
                    <p className="text-blue-700">Join others in this event</p>
                  </div>

                  <button className="w-full font-semibold hover:scale-105 transition bg-[#1e42bb] text-white py-2 rounded-lg mt-4">
                    Event Details
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar-1.avif";
import { useContext, useEffect } from "react";
import { EventContext } from "../contexts/EventContext";

export default function CreateEventForm() {
  const { eventData, setEventData, createdEvents, setCreatedEvents } =
    useContext(EventContext);

  const navigate = useNavigate(); // Use useNavigate() correctly

  const handleEventData = async (el) => {
    const name = el.target?.name;
    const value = el.target?.value;
    const id = el.target?.id;

    if (name === "file") {
      const file = el.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Convert file to Base64
        reader.onload = () => {
          const base64String = reader.result;
          setEventData((prev) => ({
            ...prev,
            imageUrl: base64String,
          }));
          localStorage.setItem("eventImage", base64String); // Save to LocalStorage
        };
      }
    } else {
      setEventData((prev) => {
        if (name === "title") return { ...prev, title: value };
        if (name === "type") return { ...prev, type: id };
        if (name === "categories") return { ...prev, category: id };
        if (name === "date") return { ...prev, date: value };
        return prev;
      });
    }
  };

  const handleFormSubmit = (el) => {
    el.preventDefault();
    setCreatedEvents((prev) => [...prev, eventData]);
  };

  useEffect(() => {
    localStorage.setItem("eventDetail", JSON.stringify(createdEvents));
    if (eventData?.title != "") {
      navigate("/upcoming-events");
      setEventData({
        title: "",
        type: "",
        category: "Religious",
        date: "",
        imageUrl: "",
      });
    }
  }, [createdEvents]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] mt-2 mb-10 px-6">
        {/* Detail area */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold">
            Create a New Event
          </h1>
          <h1 className="text-4xl sm:text-5xl my-4 font-semibold text-[#0288B5]">
            Fill in the details to create your event
          </h1>

          <div className=" px-4 flex flex-col md:flex-row mt-6 items-center justify-between gap-10 ">
            <p className="text-lg max-w-[1200px]">
              Fill out the form below with the key details about your event,
              including date, location, and highlights. Make it engaging to
              attract your audience and ensure everything is set for a
              successful launch.
            </p>

            {/* avatar area  */}
            <div className="w-full flex flex-col items-center">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  {/* avatar */}
                  <img src={avatar} className="max-w-40" alt="avatar" />
                  {/* redirect button */}
                  <Link to={"/upcoming-events"}>
                    <button className="bg-[#1C64F2] font-semibold text-white w-40 py-2 text-lg hover:scale-110 transition rounded-xl">
                      View Events
                    </button>
                  </Link>
                </div>

                {/* avatar texts */}
                <div>
                  <strong>Trusted by Over 15k+</strong>
                  <p>Individuals Worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* form section */}
        <section className="w-full mt-20 shadow-2xl text-white bg-[#6A5BDD] py-6 px-8 rounded-lg">
          <form
            onSubmit={(el) => handleFormSubmit(el)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              {/* event title */}
              <label className="text-xl font-semibold">Event Title*</label>
              <input
                required
                name="title"
                value={eventData?.title || ""}
                onChange={(el) => handleEventData(el)}
                className="outline-none rounded-md h-10 text-black pl-4"
                type="text"
              />
            </div>

            <div>
              {/* Event type */}
              <h2 className="text-xl font-semibold">Event Type*</h2>
              <div className="mt-4 flex gap-2">
                <input
                  required
                  id="free"
                  onChange={(el) => handleEventData(el)}
                  type="radio"
                  name="type"
                  className="w-4"
                />
                <label htmlFor="free">Free</label>
              </div>

              <div className="my-6 flex gap-2">
                <input
                  required
                  id="paid"
                  onChange={(el) => handleEventData(el)}
                  type="radio"
                  name="type"
                  className="w-4"
                />
                <label htmlFor="paid">Paid</label>
              </div>

              <div className="flex gap-2">
                <input
                  required
                  id="social"
                  onChange={(el) => handleEventData(el)}
                  type="radio"
                  name="type"
                  className="w-4"
                />
                <label htmlFor="social">Donation</label>
              </div>
            </div>

            <div className="flex flex-col  gap-4">
              {/* event Categories */}
              <label className="text-xl font-semibold">Categories*</label>
              <div className="flex gap-6 flex-wrap">
                <button
                  id="Religious"
                  name="categories"
                  // value={""}
                  onClick={(el) => {
                    el.preventDefault();
                    handleEventData(el);
                  }}
                  className={`${
                    eventData.category == "Religious"
                      ? "bg-orange-600 text-white"
                      : "bg-white"
                  } text-black py-2 px-6 rounded-2xl font-semibold hover:text-white hover:bg-orange-600 transition `}
                >
                  Religious
                </button>

                <button
                  id="Social"
                  name="categories"
                  onClick={(el) => {
                    el.preventDefault();
                    handleEventData(el);
                  }}
                  className={`${
                    eventData.category == "Social"
                      ? "bg-orange-600 text-white"
                      : "bg-white"
                  } text-black py-2 px-6 rounded-2xl font-semibold hover:text-white hover:bg-orange-600 transition `}
                >
                  Social
                </button>

                <button
                  id="Charity"
                  name="categories"
                  onClick={(el) => {
                    el.preventDefault();
                    handleEventData(el);
                  }}
                  className={`${
                    eventData.category == "Charity"
                      ? "bg-orange-600 text-white"
                      : "bg-white"
                  } text-black py-2 px-6 rounded-2xl font-semibold hover:text-white hover:bg-orange-600 transition `}
                >
                  Charity
                </button>
              </div>
            </div>

            <div className="flex gap-4 flex-col">
              {/* event date */}
              <label className="text-xl font-semibold">Date*</label>
              <input
                required
                type="date"
                name="date"
                onChange={(el) => handleEventData(el)}
                className="w-40 outline-none p-2 px-4 rounded-lg text-black"
              />
            </div>

            {/* event Image  */}
            <div className="flex gap-4 flex-col">
              <label className="text-xl font-semibold">Image*</label>
              <input
                required
                name="file"
                type="file"
                onChange={(el) => handleEventData(el)}
                accept="image/*"
                className="w-40 font-semibold file:py-2 file:px-4 file:rounded-lg file:cursor-pointer file:border-none text-white"
              />
            </div>

            {/* create event btn */}
            <button
              type="submit"
              className="bg-orange-600 py-2 mt-6 text-lg font-semibold rounded-lg w-40 "
            >
              Create Event
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

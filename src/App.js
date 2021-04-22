import useSWR from "swr";
import { useState } from "react";
import {
  isEqual,
  isPast,
  addDays,
  format,
  set,
  startOfDay,
  startOfMonth,
  getDaysInMonth,
  isSameDay,
} from "date-fns";
import { de } from "date-fns/locale";

const locale = de;

function App() {
  const { data, error } = useSWR(
    "https://private-37dacc-cfcalendar.apiary-mock.com/mentors/1/agenda"
  );

  const today = startOfDay(new Date());

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [reason, setReason] = useState("");
  const [ownSlots, setOwnSlots] = useState([]);
  const [flash, setFlash] = useState("");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const slots = data.calendar.map(
    (slot) => new Date(Date.parse(slot.date_time))
  );

  const hitler = selectedDate || today;
  let monthDays = [];
  for (let d = 0; d < getDaysInMonth(startOfMonth(hitler)); d++) {
    monthDays.push(addDays(startOfMonth(hitler), d));
  }

  let weekDays = [];
  for (let x = 0; x < 7; ++x) {
    weekDays.push(addDays(selectedDate, x - 3));
  }

  const hours = [...Array(24)].map((x, i) => i);

  const onBook = async (event) => {
    event.preventDefault();

    // const response = await fetch("https://example.com/book", {
    //   method: "POST",
    //   body: JSON.stringify({ reason, selectedSlot }),
    // });

    const response = { ok: true };

    if (response.ok) {
      setOwnSlots(ownSlots.concat(selectedSlot));

      setFlash(
        <div className="space-y-4">
          <p>Appointment confirmed for {format(selectedSlot, "PPPPp")}</p>
          <p>{reason}</p>
        </div>
      );

      setTimeout(() => setFlash(""), 5000);

      // reset
      setSelectedSlot(null);
      setReason("");
    } else {
      setFlash("ERROR! Couldnt book your appointment please try agian");
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-4 p-4">
      {!selectedSlot && (
        <div className="text-center">
          <div className="font-bold">{format(hitler, "MMMM yyyy")}</div>
          <div className="grid grid-cols-7">
            {monthDays.map((day) => {
              let className;
              if (isPast(day) && !isEqual(today, day)) {
                className = "text-gray-400";
              } else if (isSameDay(day, today)) {
                className = "font-bold cursor-pointer";
              } else {
                className = "cursor-pointer";
              }

              if (isSameDay(day, selectedDate)) {
                className += " bg-yellow-100";
              }

              const onDayClick = () => {
                if (isPast(day) && !isEqual(today, day)) {
                  return;
                }

                setSelectedDate(day);
              };

              return (
                <button key={day} onClick={onDayClick} className={className}>
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!selectedSlot && selectedDate && (
        <div className="grid grid-cols-7 text-center">
          {weekDays.map((day) => {
            let className;
            let disabled = false;
            if (isSameDay(day, selectedDate)) {
              className = "bg-yellow-100";
            } else if (isPast(day) && !isEqual(today, day)) {
              className = "text-gray-400";
              disabled = true;
            }

            const changeDate = () => {
              if (!isPast(day) || isEqual(today, day)) {
                setSelectedDate(day);
              }
            };

            return (
              <div key={day} className={className}>
                <button
                  className="block h-20 w-full"
                  onClick={changeDate}
                  disabled={disabled}
                >
                  <strong>{format(day, "eeee", { locale }).slice(0, 2)}</strong>
                  <br />
                  {format(day, "d LLL", { locale })}
                </button>
                {hours.map((hour) => {
                  const start = set(day, { hours: hour });
                  const end = set(day, { hours: hour + 1 });

                  const isBooked = slots.some((slot) => {
                    return start <= slot && slot < end;
                  });

                  const isSelfBooked = ownSlots.some((slot) => {
                    return start <= slot && slot < end;
                  });

                  const isSelected = isEqual(selectedSlot, start);

                  let slotStatus;
                  if (isBooked) {
                    slotStatus = "booked";
                  } else if (isSelfBooked) {
                    slotStatus = "selfBooked";
                  } else if (isSelected) {
                    slotStatus = "selected";
                  } else if (isPast(start)) {
                    slotStatus = "past";
                  } else {
                    slotStatus = "free";
                  }

                  const onSlotClick = () => {
                    if (slotStatus !== "free") {
                      alert("Slot is not available!");
                      return;
                    }

                    setSelectedSlot(start);
                  };

                  let slotClassName;
                  switch (slotStatus) {
                    case "booked":
                      slotClassName = "bg-red-100";
                      break;
                    case "selfBooked":
                      slotClassName = "bg-blue-100";
                      break;
                    case "selected":
                      slotClassName = "bg-green-500";
                      break;
                    case "free":
                      slotClassName =
                        "bg-green-100 cursor-pointer hover:bg-green-300";
                      break;
                    default:
                      slotClassName = "bg-gray-100 text-gray-400";
                      break;
                  }

                  return (
                    <div key={hour} className={slotClassName}>
                      <button onClick={onSlotClick}>
                        {format(start, "p", { locale })}
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
      {flash && (
        <div className="border p-4 text-green-600 border-current rounded">
          {flash}
        </div>
      )}
      {selectedSlot && (
        <form onSubmit={onBook}>
          <div className="border p-4 space-y-4">
            <button onClick={() => setSelectedSlot(null)}>‹ Back</button>
            <h2 className="text-4xl text-bold">Book appointment</h2>
            <p>Mentor: {data.mentor.name}</p>
            <p>
              Selected time slot: {format(selectedSlot, "PPPPp", { locale })}{" "}
              for 1 hour
            </p>
            <p>
              <label>Reason:</label>
              <br />
              <textarea
                className="border p-2 w-full h-40"
                onChange={(event) => setReason(event.target.value)}
                required
                value={reason}
              ></textarea>
            </p>
            <p>
              <button className="border px-4 py-2 text-bold">
                Book appointment
              </button>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;

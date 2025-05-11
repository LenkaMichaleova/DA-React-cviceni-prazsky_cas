import { useEffect, useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [dateTime, setDateTime] = useState("")

  useEffect(() => {
    const fetchDateTime = async () => {
      const response = await fetch("https://timeapi.io/api/time/current/zone?timeZone=Europe/Prague")
      const json = await response.json()
      setDateTime(json)
    }
    fetchDateTime()
  }, [])

  return (
    <div className="container">
      <p>Hodnota dateTime: {" "}
        <span>{Math.floor(dateTime.day).toString().padStart(2, "0")}</span>. 
        <span>{Math.floor(dateTime.month).toString().padStart(2, "0")}</span>.
        <span>{dateTime.year}</span> {" - "}
        <span>{dateTime.hour}</span>:
        <span>{Math.floor(dateTime.minute).toString().padStart(2, "0")}</span>:
        <span>{Math.floor(dateTime.seconds).toString().padStart(2, "0")}</span>
      </p>
    </div>
  );
};

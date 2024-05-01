import React, { useEffect, useState } from "react";

const api = {
  key: "a36d358d8dcb236575f6210b2bae325c",
  baseWeather: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  let [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `${api.baseWeather}weather?q=${query}&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.cod == 404) {
            alert(result.message);
            return;
          }
          setWeather(result);
          setQuery("");
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  useEffect(() => {
    query = "London";
    setQuery("London");
    search({key:"Enter"});
  }, []);

  let appClass = "";
  if (typeof weather.main !== "undefined") {
    if (weather.weather[0].main !== "Clear") {
      appClass = weather.weather[0].main;
    }
  }

  return (
    <div className={"app " + appClass}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";
import Result from "./components/Result";
import Search from "./components/Search";
import axios from "axios";

//http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [history, setHistory] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };

  // const getWeatherData = () => {
  //   axios
  //     .get(
  //       `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit={limit}&appid={e673134dd5cd1fde9829fc573eb1de9b}`
  //     )
  //     .then((Response) => {
  //       console.log(Response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const searchWeatherHandler = () => {
    if (search !== "") {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e673134dd5cd1fde9829fc573eb1de9b&units=metric`
        )
        .then((Response) => {
          if (history.indexOf(search) === -1) {
            setHistory([...history, search]);
          }
          setWeather(Response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const historySearchHandler = (data) => {
    setSearch(data);
    console.log(data);
    searchWeatherHandler();
  };
  return (
    <>
      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen ">
        <div className="max-w-[1100px] mx-auto  p-3 bg-gradient-to-r from-cyan-500 to-blue-500">
          <Search
            searchData={search}
            eventHandler={changeSearch}
            searchWeather={searchWeatherHandler}
          />
          <Result
            weatherData={weather}
            historyData={history}
            historySearch={historySearchHandler}
          />
        </div>
      </div>
    </>
  );
}

export default App;

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={e673134dd5cd1fde9829fc573eb1de9b}
// max-w-[1240px]

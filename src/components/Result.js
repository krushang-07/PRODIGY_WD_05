import React from "react";

const Result = ({ weatherData, historyData, historySearch }) => {
  const historyItem = historyData.map((item, index) => {
    return (
      <li
        onClick={() => historySearch(item)}
        className="text-xl cursor-pointer"
        key={index}
      >
        {item}
      </li>
    );
  });
  return (
    <div className="grid grid-cols-4 shadow-xl mt-5 p-3 text-white">
      <div className="grid col-span-1 border-r-3">
        <span className="text-center font-bold text-black  text-4xl">history</span>{" "}
        <ul className="text-xl">{historyItem}</ul>
      </div>
      <div className="grid col-span-3">
        {weatherData.length !== 0 ? (
          <>
            <h2 className="text-5xl font-bold text-center text-black">
              {weatherData.name}
            </h2>
            <div className="flex justify-around text-3xl p-5 my-2">
              <div>Max Temp : {weatherData.main.temp_max} °C</div>
              <div>Min Temp : {weatherData.main.temp_min} °C</div>
            </div>
            <div className=" flex justify-around p-5 text-3xl my-2 items-center">
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <div>{weatherData.weather[0].main}</div>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-center text-5xl p-3">
              Please enter the city name
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;

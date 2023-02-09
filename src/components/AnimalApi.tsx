import axios from "axios";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Cat } from "react-kawaii";
// import { SadCat, LovestriuckCat } from "./CatMoods";
import "../App.css";
import { LovestriuckCat, SadCat } from "./CatMoods";

export type datas = {
  id?: number;
  text?: string;
  animal_type?: string;
  data?: string;
};

const AnimalApi = () => {
  const [datas, setDatas] = useState<datas[] | null>([]);
  const [query, setQuery] = useState<string>("rarara");

  const [mood, setMood] = useState<string>("happy");

  const input = useRef<HTMLInputElement>(null);
  const handleRef = () => {
    if (input.current) {
      setQuery(input.current.value);
      //   setMood("happy");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchingData();
    if (datas && datas?.length !== 0) {
      setMood("lovestruck");
    } else {
      setMood("sad");
    }
  };

  const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=${query}&amount=5`;
  console.log(datas);

  useEffect(() => {
    fetchingData();
  }, [query]);

  const fetchingData = () => {
    axios
      .get(url)
      .then((data) => setDatas(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container max-w-lg">
      <h3 className="text-3xl text-red-300">Get animal info</h3>
      <form onSubmit={handleSubmit}>
        <input type="search" ref={input} />
        <button
          onClick={handleRef}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get info
        </button>
      </form>
      <div className="justify-center flex">
        <Cat mood={mood} className="item-center" />
      </div>
      <h2 className="font-bold leading-8 text-red-300 text-lg">Result</h2>
      <ul>
        {datas && datas?.length !== 0 ? (
          datas.map((data) => {
            return <li key={data.id}>{data.text}</li>;
          })
        ) : (
          <h2>No result</h2>
        )}
      </ul>
    </div>
  );
};

export default AnimalApi;

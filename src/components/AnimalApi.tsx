import axios from "axios";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Cat } from "react-kawaii";
import { SadCat, LovestriuckCat } from "./CatMoods";
import "../App.css";

export type datas = {
  id?: number;
  text?: string;
  animal_type?: string;
  data?: string;
};

const AnimalApi = () => {
  const [datas, setDatas] = useState<datas[] | null>([]);
  const [query, setQuery] = useState<string>("");

  //   const { mood, setMood } = useMood()!;
  const [mood, setMood] = useState<string>("happy");

  const input = useRef<HTMLInputElement>(null);
  const handleRef = () => {
    // console.log(input.current.value);
    //input.current がオブジェクトが持っているか
    if (input.current) {
      setQuery(input.current.value);
      setMood("lovestruck");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchingData();
    if (datas.length == 0 && !datas) {
      setMood("sad");
    }
    //デフォルトでcatのデータが返されるからそりゃあかんわ
    console.log(datas.length);
  };

  const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=${query}&amount=5`;

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
    <div>
      <h3>Get animal info</h3>
      <form onSubmit={handleSubmit}>
        <input type="search" ref={input} />
        <button
          onClick={handleRef}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get info
        </button>
      </form>
      <div className="flex">
        <Cat mood={mood} />
      </div>

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

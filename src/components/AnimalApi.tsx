import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export type datas = {
  id?: number;
  text: string;
  animal_type: string;
};

// type handleRef = {
//   handleRef: () => void;
// };

const AnimalApi = () => {
  const [datas, setDatas] = useState<datas[] | null>([]);
  const [query, setQuery] = useState<string>("");

  const input = useRef<HTMLInputElement | null>(null);
  const handleRef = () => {
    //入力された値を取得(Queryを更新)
    console.log(input.current.value);
    setQuery(input.current.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(query);
    fetchingData(setQuery);
  };

  const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=${query}&amount=5`;

  useEffect(() => {
    fetchingData();
  }, [query]);

  //この引数にsetQueryいる？
  const fetchingData = () => {
    axios
      .get(url)
      .then((data) => setDatas(data.data))
      .catch((err) => console.log(err));

    console.log(datas);
    return setDatas(datas);
  };

  return (
    <div>
      <h3>Get animal info</h3>

      <form onSubmit={handleSubmit}>
        <input type="search" ref={input} onChange={handleRef}></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get info
        </button>
      </form>

      <ul>
        {datas
          ? datas.map((data) => {
              return <li key={data.id}>{data.text}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default AnimalApi;

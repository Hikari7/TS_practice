import React, { useContext } from "react";
import { MoodContext } from "./KawaiiProvider";
import { Chocolate } from "react-kawaii";

const useMood = () => useContext(MoodContext);

// type mood = {
//   mood?: string;
// };

const Kawaii = () => {
  //!: 100% sure to have a value
  const { mood, setMood } = useMood()!;
  return (
    <>
      <select value={mood} onChange={(e) => setMood(e.currentTarget.value)}>
        <option value="blissful">blissful</option>
        <option value="lovestruck">lovestruck</option>
        <option value="happy">happy</option>
        <option value="excited">excited</option>
        <option value="sad">sad</option>
        <option value="shocked">shocked</option>
        <option value="ko">ko</option>
      </select>
      {/* <Chocolate mood={mood} /> */}
    </>
  );
};

export default Kawaii;

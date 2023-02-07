import React, { useRef, useEffect, useContext } from "react";
import { MoodContext } from "./KawaiiProvider";
import { SpeechBubble } from "react-kawaii";

const useMood = () => useContext(MoodContext);

const Search = () => {
  const input = useRef<HTMLInputElement>(null);

  const handleRef = (e: React.FormEvent<HTMLFormElement>) => {
    const loveMood = "lovestruck";
    setMood(loveMood);
  };

  const { mood, setMood } = useMood()!;

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  return (
    <>
      {/* <SpeechBubble mood={mood} /> */}
      <form onChange={handleRef}>
        <input type="search" ref={input} />
      </form>
    </>
  );
};

export default Search;

import React, {
  useState,
  createContext,
  useEffect,
  Children,
  ReactNode,
} from "react";

type MoodContextType = {
  mood: string;
  //setStateはこんな感じにタイプ定義することが多い
  setMood: (value: string) => void;
};

type Props = {
  children: ReactNode;
};

const defaultMood = "lovestruck";
export const MoodContext = createContext<MoodContextType | undefined>("");

const KawaiiProvider = ({ children }: Props) => {
  const [mood, setMood] = useState(defaultMood);

  useEffect(() => {
    const currentMood = "happy";
    setMood(currentMood);
  }, []);

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export default KawaiiProvider;

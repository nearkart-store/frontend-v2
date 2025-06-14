"use client";
import runChat from "@/lib/aurora";
import React, { createContext, useState } from "react";

type ContextType = {
  theme: string;
  toggle: () => void;
  submit: () => Promise<void>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  result: string;
  loading: boolean;
  displayResult: boolean;
  recentPrompts: string;
  setRecentPrompts: React.Dispatch<React.SetStateAction<string>>;
  setPrevPrompts: React.Dispatch<React.SetStateAction<string[]>>;
  prevPrompts: string[];
  setDisplayResult: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<ContextType>({
  theme: "dark",
  toggle: () => {},
  submit: async () => {},
  setInput: () => {},
  input: "",
  result: "",
  loading: false,
  displayResult: false,
  recentPrompts: "",
  setRecentPrompts: () => {},
  setPrevPrompts: () => {},
  prevPrompts: [],
  setDisplayResult: () => {},
});

const ContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]);

  // paragraph delay
  interface ParagraphDelayFn {
    (index: number, newWord: string): void;
  }

  const paragraphDelay: ParagraphDelayFn = (index, newWord) => {
    setTimeout(() => {
      setResult((prev: string) => prev + newWord);
    }, 70 * index);
  };

  // on submit
  const submit = async () => {
    setLoading(true);
    setResult("");
    setDisplayResult(true);
    setRecentPrompts(input);
    setPrevPrompts((prev) => [...prev, input]);
    
    const response = await runChat(input)
    setResult(response.choices[0].message.content);
    setLoading(false);
    setInput("");
  };

  // light and dark mode
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const contextValue = {
    theme,
    toggle,
    submit,
    setInput,
    input,
    result,
    loading,
    displayResult,
    recentPrompts,
    setRecentPrompts,
    setPrevPrompts,
    prevPrompts,
    setDisplayResult,
  };
  return (
    <Context.Provider value={contextValue}>
      <div className={theme}>{children}</div>
    </Context.Provider>
  );
};

export default ContextProvider;
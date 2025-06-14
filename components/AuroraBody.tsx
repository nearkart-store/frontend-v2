"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import { ArrowUpFromLine } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Context } from "@/context/ContextProvider";

const AuroraBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    result,
    input,
    setInput,
    loading,
  } = useContext(Context);

  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setIsInputEmpty(e.target.value.trim() === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isInputEmpty) await submit();
  };

  // Auto-scroll to bottom on new result
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [result]);

  return (
    <div className="h-full flex flex-col">
      {/* Chat Display Area */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 hide-scrollbar">
        {!displayResult ? (
          <div className="text-center text-zinc-500 text-lg mt-40">
            How can I help you today?
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {/* User Prompt */}
            <div className="self-end bg-neutral-800 text-white rounded-2xl p-4 w-full max-w-[75%]">
              <p className="text-xs text-gray-200 mb-1">You</p>
              <p>{recentPrompts}</p>
            </div>

            {/* Neo's Response */}
            <div className="self-start bg-[#c54042] text-white rounded-2xl p-4 w-full max-w-[100%]">
              <p className="text-xs text-gray-200 mb-1">Neo</p>
              {loading ? (
                <p className="italic animate-pulse">Neo is thinking...</p>
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1 className="text-3xl font-bold my-4" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 className="text-2xl font-semibold my-3" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-xl font-semibold my-2" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="my-2 leading-6 text-white" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        className="list-disc list-inside ml-5 my-1"
                        {...props}
                      />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong
                        className="font-semibold text-white"
                        {...props}
                      />
                    ),
                    em: ({ node, ...props }) => (
                      <em className="italic text-gray-300" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="my-2" {...props} />
                    ),
                  }}
                >
                  {result}
                </ReactMarkdown>
              )}
            </div>

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="w-full max-w-[900px] m-auto px-3 py-3 bg-neutral-900 border-t border-zinc-800">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between gap-3 border border-zinc-700 px-4 py-3 rounded-lg">
            <input
              onChange={handleInputChange}
              value={input}
              type="text"
              className="flex-1 bg-transparent border-none outline-none text-base text-white py-2"
              placeholder="message sage..."
            />
            <button
              type="submit"
              disabled={isInputEmpty}
              className={`transition ${isInputEmpty ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              <ArrowUpFromLine size={22} className="hover:text-zinc-100" />
            </button>
          </div>
        </form>
        <p className="text-xs text-zinc-400 text-center pt-2">
          Neo can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default AuroraBody;

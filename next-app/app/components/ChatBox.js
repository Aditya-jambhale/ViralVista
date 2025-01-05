import { useState, useEffect } from "react";
import { Send } from "lucide-react";

export default function LangFlowChat() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const buttonLabels = [
    "Which post type drives more engagement?",
    "Which post has most likes?",
    "Analyze the likes on the posts.",
    "What is the optimal time to post?",
    "Identify trending topics.",
    "Compare comments across platforms.",
  ];

  const parseResponse = (response) => {
    const lines = response.split("\n");
    return lines
      .map((line) => {
        line = line.trim();
        if (!line) return null;

        let formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        if (formattedLine.startsWith("###")) {
          return { type: "h3", content: formattedLine.replace(/^###\s*/, "").trim() };
        }

        if (/^\d+\.\s/.test(formattedLine)) {
          return { type: "ol", content: formattedLine.replace(/^\d+\.\s*/, "").trim() };
        }

        if (formattedLine.startsWith("-")) {
          return { type: "li", content: formattedLine.replace(/^-+\s*/, "").trim() };
        }

        return { type: "p", content: formattedLine };
      })
      .filter((item) => item !== null);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const response = await fetch("/api/runflow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue: inputValue }),
      });

      const aiResponse = await response.json();
      const filteredResponse = aiResponse.rawResponse.outputs[0].outputs[0].artifacts.message.replaceAll("CarouseledIn", "LinkedIn");

      setDisplayedText("");
      setResponse(filteredResponse);
      setLoading(false);
      setIsTyping(true);
      setInputValue("");
    } catch (error) {
      console.error(error);
      setResponse("Error fetching response from Langflow.");
      setLoading(false);
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (isTyping && response) {
      const words = response.split(" ");
      let index = 0;

      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + " " + words[index]);
        index++;

        if (index >= words.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 10);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping, response]);

  return (
    <div>
      <h2 className="mb-4 text-xl text-black font-semibold">LangFlow Chat</h2>
      <div className="flex mt-3 gap-4 overflow-x-auto mb-5 scrollbar-hidden">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            className="text-sm bg-gray-50 border border-gray-600 text-black px-4 py-2 rounded-3xl hover:bg-gray-200 hover:border-primary whitespace-nowrap "
            onClick={() => setInputValue(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSend} className="w-full flex items-center bg-white border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300 justify-between" >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Give me analytic metrics of..."
          className="w-full p-4"
        />
        <Send className="mr-4 cursor-pointer" size={20} style={{rotate: "45deg"}} onClick={handleSend}/>
      </form>
      <div className="mt-4 p-4 border rounded-md bg-gray-50 text-black text-lg pb-6" style={{ lineHeight: 2 }}>
        <h3 className="text-xl font-semibold mb-5">API Response:</h3>
        <div>
          {isTyping
            ? parseResponse(displayedText).map((item, index) => {
                switch (item?.type) {
                  case "h3":
                    return <h3 key={index} dangerouslySetInnerHTML={{ __html: item.content }}></h3>;
                  case "ol":
                    return <p key={index} dangerouslySetInnerHTML={{ __html: `${index + 1}. ${item.content}` }}></p>;
                  case "li":
                    return <li key={index} dangerouslySetInnerHTML={{ __html: item.content }}></li>;
                  case "p":
                  default:
                    return <p key={index} dangerouslySetInnerHTML={{ __html: item.content }}></p>;
                }
              })
            : parseResponse(response).map((item, index) => {
                switch (item?.type) {
                  case "h3":
                    return <h3 key={index} dangerouslySetInnerHTML={{ __html: item.content }}></h3>;
                  case "ol":
                    return <p key={index} dangerouslySetInnerHTML={{ __html: `${index + 1}. ${item.content}` }}></p>;
                  case "li":
                    return <li key={index} dangerouslySetInnerHTML={{ __html: item.content }}></li>;
                  case "p":
                  default:
                    return <p key={index} dangerouslySetInnerHTML={{ __html: item.content }}></p>;
                }
              })}
        </div>
        {loading && (
          <div className="h-10 w-full flex">
            <div className="w-full h-full">
              <div
                className="h-1/2 bg-gray-300 rounded-xl mb-2 shimmers"
                style={{ animation: "shimmer 2s infinite" }}
              ></div>
              <div
                className="h-1/2 bg-gray-300 rounded-xl mb-2 shimmers"
                style={{ animation: "shimmer2 2s infinite", animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .blinking-cursor {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            // animation: blink .1s step-start infinite;
        }
          @keyframes shimmer {
            0% {
                width: 0%;
                opacity: 0;
            }
            50% {
                width: 70%;
                opacity: 1;
            }
            100% {
                width: 70%;
                opacity: 0;
            }
          }

          @keyframes shimmer2 {
            0% {
                width: 0%;
                opacity: 0;
            }
            50% {
                width: 40%;
                opacity: 1;
            }
            100% {
                width: 40%;
                opacity: 0;
            }
        }
        `}
        
      </style>
    </div>
  );
}

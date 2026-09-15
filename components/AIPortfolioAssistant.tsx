"use client";

import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starters = [
  "What skills does Suhail have?",
  "What projects has Suhail built?",
  "How can I work with Suhail?",
];

export default function AIPortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Suhail's AI Portfolio Assistant. Ask me about his skills, projects, or how you can work with him.",
    },
  ]);

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const content = input.trim();
    if (!content || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "AI request failed");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Sorry, the AI assistant is temporarily unavailable. Please use the Contact page to reach Suhail directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 flex h-[min(620px,calc(100vh-120px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center justify-between bg-gradient-to-r from-primary-600 to-blue-600 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/15 p-2">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="font-semibold">AI Portfolio Assistant</h2>
                <p className="text-xs text-blue-100">Powered by Gemini</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close AI assistant"
              className="rounded-lg p-2 transition hover:bg-white/15"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="px-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Try asking
                </p>
                {starters.map((starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => {
                      setInput(starter);
                    }}
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-left text-sm text-gray-700 transition hover:border-primary-400 hover:bg-primary-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-primary-600 text-white"
                      : "rounded-bl-md bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="border-t border-gray-200 p-3 dark:border-gray-700">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-1 dark:border-gray-700 dark:bg-gray-800">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Suhail..."
                maxLength={1000}
                disabled={loading}
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400 dark:text-white"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="rounded-lg bg-primary-600 p-2 text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open AI portfolio assistant"
          className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-blue-600 px-4 py-3 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="relative">
            <MessageCircle size={22} />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-primary-600" />
          </span>
          <span className="hidden font-medium sm:inline">Ask AI</span>
          <Bot size={17} className="hidden opacity-80 sm:block" />
        </button>
      )}
    </div>
  );
}

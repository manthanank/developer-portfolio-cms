"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, User, Loader2, MessageSquare } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function AiAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content:
        "Hello! I am Manthan's AI Engineering Assistant. Ask me anything about the 10 full-stack projects, architecture decisions, tech stacks, or implementation details!",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "What are the 10 projects?",
    "Explain the RAG pipeline",
    "How is Stripe integrated?",
    "What is Manthan's tech stack?",
  ];

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!messageText) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await res.json();
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I am currently unable to answer that question.",
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: "Sorry, I encountered an error while processing your request.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-3.5 sm:px-5 sm:py-3.5 text-white shadow-2xl shadow-indigo-500/40 hover:scale-105 transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Toggle AI Assistant"
        >
          <Sparkles className="h-5 w-5 animate-spin-slow" />
          <span className="hidden sm:inline font-semibold text-xs tracking-wide">
            {isOpen ? "Close AI Assistant" : "Ask AI Assistant"}
          </span>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[600px] flex flex-col rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-2xl shadow-2xl shadow-indigo-950/50 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/80">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Architecture AI Agent</span>
                  <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-1.5 py-0.2 rounded">
                    RAG Ready
                  </span>
                </h4>
                <p className="text-[11px] text-slate-400">Instant answers about Manthan's projects</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2.5 border-b border-slate-800/60 bg-slate-950/50 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                disabled={loading}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-grow p-4 space-y-3.5 overflow-y-auto max-h-[360px] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="h-6 w-6 rounded-md bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`rounded-2xl p-3 max-w-[85%] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-tr-none"
                      : "bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-line"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="h-6 w-6 rounded-md bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-8">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-indigo-400" />
                <span>Generating architectural answer...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-slate-800 bg-slate-900/60 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about project architecture, tech stack..."
              disabled={loading}
              className="flex-grow rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}


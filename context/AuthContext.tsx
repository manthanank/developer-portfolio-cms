"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: "Portfolio Owner" | "Guest Reviewer";
  tier: string;
  avatarUrl: string;
  isDraftMode: boolean;
}

interface AuthContextType {
  user: UserSession | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string, role?: "Portfolio Owner" | "Guest Reviewer") => void;
  logout: () => void;
  switchRole: () => void;
  toggleDraftMode: () => void;
}

const DEMO_OWNER: UserSession = {
  id: "usr_cms_001",
  name: "Manthan Ank",
  email: "manthan@devfolio.dev",
  role: "Portfolio Owner",
  tier: "Lead Architect / CMS Admin",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  isDraftMode: true,
};

const DEMO_GUEST: UserSession = {
  id: "usr_cms_888",
  name: "Tech Recruiter",
  email: "recruiter@talent.io",
  role: "Guest Reviewer",
  tier: "Public Visitor",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  isDraftMode: false,
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  switchRole: () => {},
  toggleDraftMode: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("devfolio_auth_session");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        setUser(DEMO_OWNER);
      }
    } else {
      setUser(DEMO_OWNER);
    }
  }, []);

  const login = (email: string, name?: string, role: "Portfolio Owner" | "Guest Reviewer" = "Portfolio Owner") => {
    const newUser: UserSession = {
      id: `usr_${Date.now()}`,
      name: name || email.split("@")[0],
      email,
      role,
      tier: role === "Portfolio Owner" ? "Lead Architect / CMS Admin" : "Public Visitor",
      avatarUrl: DEMO_OWNER.avatarUrl,
      isDraftMode: role === "Portfolio Owner",
    };
    setUser(newUser);
    localStorage.setItem("devfolio_auth_session", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("devfolio_auth_session");
  };

  const switchRole = () => {
    setUser((prev) => {
      const next = prev?.role === "Guest Reviewer" ? DEMO_OWNER : DEMO_GUEST;
      localStorage.setItem("devfolio_auth_session", JSON.stringify(next));
      return next;
    });
  };

  const toggleDraftMode = () => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, isDraftMode: !prev.isDraftMode };
      localStorage.setItem("devfolio_auth_session", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, switchRole, toggleDraftMode }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

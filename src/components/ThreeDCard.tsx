import React from "react";

export function ThreeDCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="perspective-1000">
      <div className="relative transition-transform duration-300 transform hover:rotate-x-3 hover:rotate-y-3 hover:scale-105 bg-white p-8 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { useState } from "react";
function Hide({ item }) {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <button
        onClick={toggleMenu}
        type="button"
        className="btn btn-primary"
        style={{
          marginBottom: ".5rem",
        }}
      >
        Preview
      </button>
      {isOpen && (
        <iframe
          width="100%"
          height="200px"
          src={`https://drive.google.com/file/d/${item}/preview`}
          allow="autoplay"
        ></iframe>
      )}
    </div>
  );
}

export default Hide;

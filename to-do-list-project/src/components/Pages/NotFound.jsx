// src/Pages/NotFound.jsx
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      textAlign: "center",
      padding: "40px",
      fontFamily: "system-ui, sans-serif"
    }}>

      <div style={{
        fontSize: "72px",
        fontWeight: "800",
        color: "#4f46e5", 
        lineHeight: "1",
        marginBottom: "16px"
      }}>
        404
      </div>

      <h1 style={{ 
        fontSize: "24px", 
        fontWeight: "600", 
        color: "#1c1b1a", 
        margin: "0 0 8px 0" 
      }}>
        Whoops! Page Not Found
      </h1>

      <button 
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          fontSize: "14px",
          fontWeight: "500",
          color: "#ffffff",
          backgroundColor: "#4f46e5",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(79, 70, 229, 0.2)",
          transition: "background-color 0.2s ease"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#4338ca"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#4f46e5"}
      >
        Go Back Home
      </button>
    </section>
  );
}
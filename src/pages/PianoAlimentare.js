import React from "react";

function PianoAlimentare() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>
        Piano Alimentare Settimanale
      </h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f8f8f8", color: "#333" }}>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Giorno
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Pranzo
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Cena
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#ffffff" }}>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Lunedì
            </td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Tacchino
            </td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>Pollo</td>
          </tr>
          <tr style={{ backgroundColor: "#f9f9f9" }}>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Martedì
            </td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Maiale
            </td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Merluzzo
            </td>
          </tr>
          <tr style={{ backgroundColor: "#ffffff" }}>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Mercoledì
            </td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>Pollo</td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>Uova</td>
          </tr>
          <tr style={{ backgroundColor: "#f9f9f9" }}>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Giovedì
            </td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>Uova</td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>Tonno</td>
          </tr>
          <tr style={{ backgroundColor: "#ffffff" }}>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Venerdì
            </td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Merluzzo
            </td>
            <td style={{ border: "1px solid #ddd", padding: "12px" }}>
              Carne rossa
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PianoAlimentare;

import React from "react";

function PianoAlimentare() {
  return (
    <div>
      <h1>Piano Alimentare Settimanale</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Giorno</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Pranzo</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Lunedì</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Tacchino
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Pollo</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Martedì
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Maiale</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Merluzzo
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Mercoledì
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Pollo</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Uova</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Giovedì
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Uova</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Tonno</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Venerdì
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Merluzzo
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Carne rossa
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PianoAlimentare;

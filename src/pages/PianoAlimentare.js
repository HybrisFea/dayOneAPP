import React, { useState } from 'react';

function PianoAlimentare() {
  // Stato per ogni cella del piano alimentare
  const [piano, setPiano] = useState({
    lunedi: { pranzo: 'Tacchino', cena: 'Pollo' },
    martedi: { pranzo: 'Maiale', cena: 'Merluzzo' },
    mercoledi: { pranzo: 'Pollo', cena: 'Uova' },
    giovedi: { pranzo: 'Uova', cena: 'Tonno' },
    venerdi: { pranzo: 'Merluzzo', cena: 'Carne rossa' },
  });

  // Gestione della modifica del valore di una cella
  const handleEdit = (giorno, pasto, value) => {
    setPiano((prevPiano) => ({
      ...prevPiano,
      [giorno]: {
        ...prevPiano[giorno],
        [pasto]: value,
      },
    }));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Piano Alimentare Settimanale</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f8f8', color: '#333' }}>
            <th style={{ border: '1px solid #ddd', padding: '12px', fontWeight: 'bold' }}>Giorno</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', fontWeight: 'bold' }}>Pranzo</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', fontWeight: 'bold' }}>Cena</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(piano).map((giorno) => (
            <tr key={giorno} style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ border: '1px solid #ddd', padding: '12px', fontWeight: 'bold' }}>
                {giorno.charAt(0).toUpperCase() + giorno.slice(1)}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                <input
                  type="text"
                  value={piano[giorno].pranzo}
                  onChange={(e) => handleEdit(giorno, 'pranzo', e.target.value)}
                  style={{ width: '100%', padding: '6px', fontSize: '16px', border: 'none', backgroundColor: 'transparent' }}
                />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                <input
                  type="text"
                  value={piano[giorno].cena}
                  onChange={(e) => handleEdit(giorno, 'cena', e.target.value)}
                  style={{ width: '100%', padding: '6px', fontSize: '16px', border: 'none', backgroundColor: 'transparent' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PianoAlimentare;
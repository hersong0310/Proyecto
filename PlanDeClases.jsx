import { useState } from 'react';

function PlanDeClases() {
  const [clases, setClases] = useState([
    { id: 1, tema: "Introducción a React", objetivo: "Comprender los conceptos básicos de React", duracion: "2 horas" },
    { id: 2, tema: "Componentes y Props", objetivo: "Aprender a crear y usar componentes", duracion: "3 horas" }
  ]);

  const [nuevaClase, setNuevaClase] = useState({ tema: "", objetivo: "", duracion: "" });

  const agregarClase = () => {
    if (nuevaClase.tema && nuevaClase.objetivo && nuevaClase.duracion) {
      setClases([...clases, { ...nuevaClase, id: Date.now() }]);
      setNuevaClase({ tema: "", objetivo: "", duracion: "" });
    }
  };

  const eliminarClase = (id) => {
    setClases(clases.filter(clase => clase.id !== id));
  };

  return (
    <div className="plan-clases">
      <h2>Planificador de Clases</h2>
      
      <div className="formulario">
        <h3>Agregar Nueva Clase</h3>
        <input
          type="text"
          placeholder="Tema de la clase"
          value={nuevaClase.tema}
          onChange={(e) => setNuevaClase({...nuevaClase, tema: e.target.value})}
        />
        <input
          type="text"
          placeholder="Objetivo de aprendizaje"
          value={nuevaClase.objetivo}
          onChange={(e) => setNuevaClase({...nuevaClase, objetivo: e.target.value})}
        />
        <input
          type="text"
          placeholder="Duración"
          value={nuevaClase.duracion}
          onChange={(e) => setNuevaClase({...nuevaClase, duracion: e.target.value})}
        />
        <button onClick={agregarClase}>Agregar Clase</button>
      </div>

      <div className="lista-clases">
        <h3>Clases Programadas</h3>
        {clases.map(clase => (
          <div key={clase.id} className="clase-item">
            <h4>{clase.tema}</h4>
            <p><strong>Objetivo:</strong> {clase.objetivo}</p>
            <p><strong>Duración:</strong> {clase.duracion}</p>
            <button onClick={() => eliminarClase(clase.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanDeClases;

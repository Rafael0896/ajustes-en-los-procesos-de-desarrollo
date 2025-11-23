import React from 'react';
import ChangeCard from './ChangeCard.jsx';

const OperationalChanges = () => (
    <section className="section">
        <div className="section-header">
            <h2 className="section-title">Cambios Operativos Propuestos</h2>
        </div>
        <div className="grid">
            <ChangeCard
                title="Refinamiento del Backlog"
                description="Implementar sesiones semanales de refinamiento donde el equipo revisa, estima y descompone historias de usuario, asegurando que estén listas para el próximo sprint."
            />
            <ChangeCard
                title="Definition of Done"
                description="Establecer criterios claros: código revisado, pruebas unitarias aprobadas, documentación actualizada, integración exitosa en develop y validación funcional."
            />
            <ChangeCard
                title="Peer Review"
                description="Implementar revisiones de código obligatorias entre pares mediante pull requests, promoviendo la calidad, el conocimiento compartido y la detección temprana de errores."
            />
            <ChangeCard
                title="Secuencia de Codificación"
                description="Ajustar el flujo: diseño técnico breve → desarrollo → pruebas unitarias → peer review → integración → validación. Integración continua en lugar de al final del sprint."
            />
            <ChangeCard
                title="Comunicación Mejorada"
                description="Fortalecer el canal entre desarrolladores y Product Owner mediante sesiones de aclaración técnica y validaciones incrementales durante el sprint."
            />
        </div>
    </section>
);

export default OperationalChanges;
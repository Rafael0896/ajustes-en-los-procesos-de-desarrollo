// Componente de Sección de Metodología Scrum
import React from "react";

const ScrumMethodology = () => (
    <section className="section">
        <div className="section-header">
            <h2 className="section-title">Metodología Scrum</h2>
        </div>
        <div className="card">
            <p className="text">
                Este proyecto utiliza <strong>Scrum</strong> como framework ágil para la gestión y desarrollo del producto. Scrum permite entregas incrementales, adaptación continua y alta colaboración entre equipos multifuncionales.
            </p>

            <div className="subsection">
                <h3 className="subsection-title">Roles principales</h3>
                <ul className="list">
                    <li><strong>Product Owner:</strong> Define prioridades y representa al cliente</li>
                    <li><strong>Scrum Master:</strong> Facilita el proceso y elimina impedimentos</li>
                    <li><strong>Equipo de Desarrollo:</strong> Autoorganizado y multifuncional</li>
                </ul>
            </div>

            <div className="subsection">
                <h3 className="subsection-title">Eventos clave</h3>
                <ul className="list">
                    <li><strong>Sprint Planning:</strong> Planificación de objetivos del sprint</li>
                    <li><strong>Daily Scrum:</strong> Sincronización diaria del equipo</li>
                    <li><strong>Sprint Review:</strong> Demostración del incremento</li>
                    <li><strong>Sprint Retrospective:</strong> Análisis de mejora continua</li>
                </ul>
            </div>

            <div className="subsection">
                <h3 className="subsection-title">Artefactos</h3>
                <ul className="list">
                    <li><strong>Product Backlog:</strong> Lista priorizada de funcionalidades</li>
                    <li><strong>Sprint Backlog:</strong> Trabajo comprometido para el sprint</li>
                    <li><strong>Incremento:</strong> Producto potencialmente entregable</li>
                </ul>
            </div>

            <div className="justification-box">
                <h3 className="subsection-title">Justificación</h3>
                <p className="text">
                    Scrum es ideal para este proyecto porque permite iteraciones cortas, feedback temprano, adaptación rápida a cambios y transparencia en el progreso. La naturaleza incremental del framework facilita la identificación y corrección continua de problemas en el proceso de desarrollo.
                </p>
            </div>
        </div>
    </section>
);
export default ScrumMethodology;
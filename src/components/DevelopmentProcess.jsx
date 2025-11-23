import React from 'react';

const DevelopmentProcess = () => (
    <section className="section">
        <div className="section-header">
            <h2 className="section-title">Proceso de Desarrollo y Codificación</h2>
        </div>
        <div className="card">
            <h3 className="subsection-title">Flujo actual del proceso</h3>
            <p className="text">
                El proceso de desarrollo en un sprint Scrum típicamente sigue estos pasos:
            </p>
            <ol className="ordered-list">
                <li><strong>Creación de tareas:</strong> Las historias de usuario se descomponen en tareas técnicas durante el Sprint Planning</li>
                <li><strong>Asignación:</strong> Los desarrolladores toman tareas del Sprint Backlog según su capacidad</li>
                <li><strong>Desarrollo:</strong> Implementación de la funcionalidad en ramas locales</li>
                <li><strong>Seguimiento:</strong> Actualización diaria del estado en el Daily Scrum</li>
                <li><strong>Entrega al repositorio:</strong> Commit y push al repositorio compartido</li>
            </ol>

            <div className="problem-box">
                <h3 className="subsection-title">Problemas identificados</h3>
                <ul className="list">
                    <li>Ausencia de estándares de codificación uniformes</li>
                    <li>Revisiones de código insuficientes o inexistentes</li>
                    <li>Integración tardía del código (al final del sprint)</li>
                    <li>Falta de pruebas unitarias automatizadas</li>
                    <li>Comunicación fragmentada entre desarrolladores</li>
                    <li>Definición ambigua de "completado"</li>
                    <li>Documentación técnica inconsistente</li>
                </ul>
            </div>
        </div>
    </section>
);

export default DevelopmentProcess;
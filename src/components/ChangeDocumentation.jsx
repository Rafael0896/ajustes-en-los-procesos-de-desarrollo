import React from 'react';
import DocSection from './DocSection';

const ChangeDocumentation = () => (
    <section className="section">
        <div className="section-header">
            <h2 className="section-title">Documentación de Cambios</h2>
        </div>
        <div className="card">
            <DocSection title="Proceso Actual">
                <p className="text">
                    El proceso de desarrollo presenta un flujo lineal donde las tareas se asignan individualmente, se desarrollan en aislamiento y se integran al final del sprint. La revisión de código es informal, las pruebas son manuales y no existen estándares claros de calidad ni definición uniforme de "completado".
                </p>
            </DocSection>

            <DocSection title="Problemas Detectados">
                <p className="text">
                    Los principales problemas incluyen integración tardía que genera conflictos complejos, falta de visibilidad del progreso real, código inconsistente entre desarrolladores, ausencia de validación automática, documentación obsoleta o inexistente y dificultad para mantener la calidad bajo presión de tiempo.
                </p>
            </DocSection>

            <DocSection title="Cambios Realizados">
                <p className="text">
                    Se implementa un modelo de ramas estructurado, integración continua mediante CI/CD, revisiones obligatorias de código, pruebas unitarias automatizadas, estándares de codificación aplicados automáticamente, refinamiento semanal del backlog y una Definition of Done clara y medible.
                </p>
            </DocSection>

            <DocSection title="Aplicación">
                <p className="text">
                    Los cambios se implementarán gradualmente comenzando por el próximo sprint. Primero se configurará la infraestructura técnica (Git, CI/CD, linters), luego se capacitará al equipo en las nuevas prácticas, y finalmente se incorporarán los cambios operativos en las ceremonias Scrum. El Scrum Master monitoreará la adopción y ajustará según la retrospectiva.
                </p>
            </DocSection>

            <DocSection title="Beneficios Esperados">
                <ul className="list">
                    <li><strong>Calidad superior:</strong> Menos defectos mediante revisión y pruebas automatizadas</li>
                    <li><strong>Integración más fluida:</strong> Conflictos detectados y resueltos tempranamente</li>
                    <li><strong>Velocidad sostenible:</strong> Menos tiempo en correcciones y deuda técnica</li>
                    <li><strong>Mayor transparencia:</strong> Visibilidad real del progreso y calidad</li>
                    <li><strong>Conocimiento compartido:</strong> Peer review distribuye el conocimiento</li>
                    <li><strong>Mantenibilidad:</strong> Código uniforme y documentado facilita evolución</li>
                    <li><strong>Confianza del cliente:</strong> Entregas predecibles y de calidad consistente</li>
                </ul>
            </DocSection>
        </div>
    </section>
);

export default ChangeDocumentation;
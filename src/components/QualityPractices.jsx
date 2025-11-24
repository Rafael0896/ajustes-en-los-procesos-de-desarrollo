import React from 'react';
import PracticeItem from './PracticeItem';

const QualityPractices = () => (
    <section className="section">
        <div className="section-header">
            <h2 className="section-title">Buenas Prácticas de Calidad</h2>
        </div>
        <div className="card">
            <p className="text">
                Las mejoras propuestas se fundamentan en buenas prácticas reconocidas por marcos de trabajo como <strong>Scrum</strong>, <strong>DevOps</strong> y estándares de calidad como <strong>ISO/IEC 25010</strong>:
            </p>
            <div className="practices-grid">
                <PracticeItem text={<><strong>Integración Continua:</strong> Merge frecuente para detectar conflictos temprano</>} />
                <PracticeItem text={<><strong>Entregas Incrementales:</strong> Valor entregable al final de cada sprint</>} />
                <PracticeItem text={<><strong>Peer Review:</strong> Revisión colaborativa que mejora la calidad del código</>} />
                <PracticeItem text={<><strong>Control de Versiones:</strong> Trazabilidad completa de cambios y colaboración</>} />
                <PracticeItem text={<><strong>Pruebas Automatizadas:</strong> Validación rápida y confiable de funcionalidades</>} />
                <PracticeItem text={<><strong>Documentación Necesaria:</strong> Balance entre agilidad y claridad técnica</>} />
                <PracticeItem text={<><strong>Estándares de Codificación:</strong> Consistencia y mantenibilidad del software</>} />
            </div>
        </div>
    </section>
);

export default QualityPractices;
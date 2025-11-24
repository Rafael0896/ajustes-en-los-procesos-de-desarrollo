import React from 'react';
import ChangeCard from './ChangeCard';

const TechnicalChanges = () => (
    <section className="section">
        <div className="section-header">
            <h2 className="section-title">Cambios Técnicos Propuestos</h2>
        </div>
        <div className="grid">
            <ChangeCard
                title="Modelo de Ramas Git"
                description="Adoptar GitFlow: feature para nuevas funcionalidades, develop para integración, release para preparar versiones y main para producción."
            />
            <ChangeCard
                title="Pruebas Unitarias Obligatorias"
                description="Todo código nuevo debe incluir pruebas unitarias con cobertura mínima del 80%. No se permiten merges sin pasar todas las pruebas."
            />
            <ChangeCard
                title="CI/CD Pipeline"
                description="Implementar integración continua con Jenkins/GitHub Actions para ejecutar automáticamente pruebas, análisis estático y despliegues a ambientes de staging."
            />
            <ChangeCard
                title="Estándares de Código"
                description="Configurar linters (ESLint, Pylint) y formateadores (Prettier, Black) para garantizar un estilo de código uniforme y detectar errores comunes automáticamente."
            />
            <ChangeCard
                title="Documentación Técnica"
                description="Documentar funciones críticas, APIs y componentes complejos directamente en el código mediante comentarios estructurados y READMEs en cada módulo."
            />
        </div>
    </section>
);

export default TechnicalChanges;
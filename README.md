# Optimización del Proceso de Desarrollo de Software

Landing page profesional para presentar mejoras en los procesos de desarrollo de software utilizando la metodología Scrum.

## Descripción

Este proyecto académico presenta una propuesta integral de optimización del proceso de desarrollo y codificación en equipos que trabajan con Scrum. La landing page documenta desde la metodología seleccionada hasta los cambios técnicos y operativos propuestos para mejorar la calidad del software.

## Objetivos

- Presentar Scrum como metodología ágil de desarrollo
- Identificar problemas en el proceso actual de codificación
- Proponer cambios operativos y técnicos concretos
- Documentar buenas prácticas de calidad de software
- Establecer un plan de implementación de mejoras

## Características

### Contenido de la Landing Page

1. **Metodología Scrum**
    - Roles principales (Product Owner, Scrum Master, Equipo de Desarrollo)
    - Eventos clave (Sprint Planning, Daily Scrum, Sprint Review, Retrospective)
    - Artefactos (Product Backlog, Sprint Backlog, Incremento)
    - Justificación de su uso

2. **Proceso de Desarrollo Actual**
    - Flujo de trabajo en el sprint
    - Problemas identificados
    - Áreas de mejora

3. **Cambios Operativos Propuestos**
    - Refinamiento del Backlog
    - Definition of Done
    - Peer Review
    - Secuencia de Codificación mejorada
    - Comunicación optimizada

4. **Cambios Técnicos Propuestos**
    - Modelo de ramas Git (GitFlow)
    - Pruebas unitarias obligatorias
    - CI/CD Pipeline
    - Estándares de código
    - Documentación técnica

5. **Buenas Prácticas de Calidad**
    - Integración continua
    - Entregas incrementales
    - Control de versiones
    - Pruebas automatizadas
    - Estándares de codificación

6. **Documentación de Cambios**
    - Proceso actual vs propuesto
    - Plan de implementación
    - Beneficios esperados

## Tecnologías Utilizadas

- **React** 18+ - Biblioteca de JavaScript para construir interfaces de usuario
- **CSS3** - Estilos puros sin preprocesadores ni frameworks
- **JavaScript ES6+** - Funciones modernas de JavaScript

## Estructura del Proyecto

```
proyecto-scrum-landing/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx       # Componente principal
│   │   ├── Header.jsx             # Componente de encabezado
│   │   ├── ScrumMethodology.jsx   # Sección de metodología
│   │   ├── DevelopmentProcess.jsx # Sección de proceso
│   │   ├── OperationalChanges.jsx # Cambios operativos
│   │   ├── TechnicalChanges.jsx   # Cambios técnicos
│   │   ├── QualityPractices.jsx   # Buenas prácticas
│   │   ├── ChangeDocumentation.jsx# Documentación
│   │   ├── Footer.jsx             # Pie de página
│   │   ├── ChangeCard.jsx         # Tarjeta reutilizable
│   │   ├── PracticeItem.jsx       # Item de práctica
│   │   └── DocSection.jsx         # Sección de documentación
│   ├── index.css                  # Estilos globales
│   ├── App.jsx                    # Componente raíz
│   └── main.jsx                   # Punto de entrada
├── public/
│   └── index.html
├── package.json
└── README.md
```

## Instalación

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Rafael0896/ajustes-en-los-procesos-de-desarrollo
cd scrum-landing-page
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
# o
yarn start
```

4. Abrir en el navegador:
```
http://localhost:5173/
```

## Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
# o
yarn build
```

Los archivos optimizados se generarán en la carpeta `build/`.


### Modificar Contenido

Cada sección está en su propio componente. Para modificar el contenido, edita el componente correspondiente en `src/components/`.

### Agregar Nuevas Secciones

1. Crear un nuevo componente en `src/components/`
2. Importarlo en `LandingPage.jsx`
3. Agregarlo al render del componente principal
4. Agregar estilos correspondientes en `styles.css`

## Responsive Design

La landing page está optimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: menos de 768px

## Componentes Principales

### Header
Muestra el título y subtítulo del proyecto con gradiente de fondo.

### ScrumMethodology
Presenta roles, eventos y artefactos de Scrum con justificación.

### DevelopmentProcess
Describe el flujo actual y los problemas identificados.

### OperationalChanges / TechnicalChanges
Grids de tarjetas con las mejoras propuestas.

### QualityPractices
Lista de buenas prácticas con checkmarks visuales.

### ChangeDocumentation
Documentación detallada del proceso de cambio.

### Componentes Reutilizables
- **ChangeCard**: Tarjeta individual para mostrar cambios
- **PracticeItem**: Item de práctica con ícono de verificación
- **DocSection**: Sección de documentación con título

## Contexto Académico

Este proyecto fue desarrollado como parte de una actividad académica sobre:
- Metodologías ágiles de desarrollo de software
- Mejora continua de procesos
- Buenas prácticas de ingeniería de software
- Calidad de software según ISO/IEC 25010

## Referencias

- [Guía oficial de Scrum](https://scrumguides.org/)
- [ISO/IEC 25010 - Calidad de Software](https://iso25000.com/index.php/normas-iso-25000/iso-25010)
- [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [DevOps Best Practices](https://www.atlassian.com/devops)

## Autor

Proyecto académico desarrollado para la presentación de mejoras en procesos de desarrollo de software.

## Licencia

Este proyecto es de uso académico.

## Contribuciones

Este es un proyecto académico, pero las sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar nueva mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

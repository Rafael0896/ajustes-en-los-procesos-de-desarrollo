import React from "react";
import Header from "./components/Header.jsx";
import ScrumMethodology from "./components/ScrumMethodology.jsx";
import DevelopmentProcess from "./components/DevelopmentProcess.jsx";
import OperationalChanges from "./components/OperationalChanges.jsx";
import TechnicalChanges from "./components/TechnicalChanges.jsx";
import QualityPractices from "./components/QualityPractices.jsx";
import ChangeDocumentation from "./components/ChangeDocumentation.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div>
            <Header />
            <main role={"main"}>
                <ScrumMethodology />
                <DevelopmentProcess />
                <OperationalChanges />
                <TechnicalChanges />
                <QualityPractices/>
                <ChangeDocumentation />
            </main>
            <Footer />
        </div>
    );
}
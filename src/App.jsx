import React from "react";
import Header from "./components/Header.jsx";
import ScrumMethodology from "./components/ScrumMethodology.jsx";
import DevelopmentProcess from "./components/DevelopmentProcess.jsx";
import OperationalChanges from "./components/OperationalChanges.jsx";

export default function App() {
    return (
        <div>
            <Header />
            <main role={"main"}>
                <ScrumMethodology />
                <DevelopmentProcess />
                <OperationalChanges />
            </main>
        </div>
    );
}
// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Solution from './Pages/Solution';
import UniversalDesign from './Pages/UniversalDesign';
import CommunityGovernance from './Pages/CommunityGovernance';
import TokenEconomy from './Pages/TokenEconomy';
import UDAccessibility from './Pages/UD_Accessibility';
import UDMixedIncome from './Pages/UD_MixedIncome';
import UDWalkableDesign from './Pages/UD_WalkableDesign';
import Governance from './Pages/Governance';
import Voting from './Pages/Voting';
import Budget from './Pages/Budget';
import Services from './Pages/Services';
import Tokens from './Pages/Tokens';
import Roadmap from './Pages/Roadmap';
import Impact from './Pages/Impact';
import Partner from './Pages/Partner';
import About from './Pages/About';
import GovTransparency from './Pages/Gov_Transparency';
import GovBudgetControl from './Pages/Gov_BudgetControl';
import GovServiceManagement from './Pages/Gov_ServiceManagement';
import './style.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/solution/universal-design" element={<UniversalDesign />} />
        <Route path="/solution/universal-design/accessibility" element={<UDAccessibility />} />
        <Route path="/solution/universal-design/mixed-income" element={<UDMixedIncome />} />
        <Route path="/solution/universal-design/walkable" element={<UDWalkableDesign />} />
        <Route path="/solution/governance" element={<CommunityGovernance />} />
        <Route path="/solution/tokens" element={<TokenEconomy />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/governance/transparency" element={<GovTransparency />} />
        <Route path="/governance/budget-control" element={<GovBudgetControl />} />
        <Route path="/governance/service-management" element={<GovServiceManagement />} />
        <Route path="/governance/voting" element={<Voting />} />
        <Route path="/governance/budget" element={<Budget />} />
        <Route path="/governance/services" element={<Services />} />
        <Route path="/tokens/*" element={<Tokens />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
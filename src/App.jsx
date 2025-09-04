import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import SecurityLanding from '@/components/SecurityLanding';

function App() {
  return (
    <>
      <Helmet>
        <title>InteliHomes - Soluciones Integrales de Seguridad</title>
        <meta name="description" content="Empresa líder en soluciones integrales de seguridad. Sistemas de alarmas, cámaras de vigilancia, control de acceso y monitoreo 24/7. Protege lo que más importa." />
        <meta property="og:title" content="InteliHomes - Soluciones Integrales de Seguridad" />
        <meta property="og:description" content="Empresa líder en soluciones integrales de seguridad. Sistemas de alarmas, cámaras de vigilancia, control de acceso y monitoreo 24/7. Protege lo que más importa." />
      </Helmet>
      <div className="min-h-screen">
        <SecurityLanding />
        <Toaster />
      </div>
    </>
  );
}

export default App;
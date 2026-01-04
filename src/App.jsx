import React, { useEffect } from 'react';
import InvoiceGenerator from './components/InvoiceGenerator';

function App() {
  const logoUrl = "https://res.cloudinary.com/dkmzveqce/image/upload/v1767100727/ChatGPT_Image_Dec_30_2025_03_08_48_PM_jppkez.png";

  useEffect(() => {
    // 1. Find the existing favicon link or create a new one
    let link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    // 2. Set the href to your MKH logo
    link.href = logoUrl;
    
    // Optional: Update document title to match portal name
    document.title = "MKH Management Portal";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-mkh-blue p-4 text-white shadow-md">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <img src={logoUrl} alt="Logo" className="w-8 h-8 rounded-full bg-white p-1" />
          <span className="font-bold text-xl uppercase tracking-tight">
            MKH Management Portal
          </span>
        </div>
      </nav>

      <main className="py-10">
        <InvoiceGenerator />
      </main>
    </div>
  );
}

export default App;
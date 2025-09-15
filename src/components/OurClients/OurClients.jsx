import React from 'react';
import './OurClients.css'

const OurClients = () => {
  // Array of 16 client data - replace with your actual client images
  const clients = [
    { id: 1, name: 'Client 1', logo: '/Private/Client/C1.png' },
    { id: 2, name: 'Client 2', logo: '/Private/Client/C2.png' },
    { id: 3, name: 'Client 3', logo: '/Private/Client/C3.png' },
    // { id: 4, name: 'Client 4', logo: '/Private/Client/C4.png' },
    { id: 5, name: 'Client 5', logo: '/Private/Client/C5.png' },
    { id: 6, name: 'Client 6', logo: '/Private/Client/C6.png' },
    { id: 7, name: 'Client 7', logo: '/Private/Client/C7.png' },
    { id: 8, name: 'Client 8', logo: '/Private/Client/C8.png' },
    { id: 9, name: 'Client 9', logo: '/Private/Client/C9.png' },
    { id: 10, name: 'Client 10', logo: '/Private/Client/C10.png' },
    { id: 11, name: 'Client 11', logo: '/Private/Client/C11.png' },
    { id: 12, name: 'Client 12', logo: '/Private/Client/C12.png' },
    { id: 13, name: 'Client 13', logo: '/Private/Client/C13.png' },
    { id: 14, name: 'Client 14', logo: '/Private/Client/C14.png' },
    { id: 15, name: 'Client 15', logo: '/Private/Client/C15.png' },
    { id: 16, name: 'Client 16', logo: '/Private/Client/C16.png' },
  ]

  return (
    <section id='ourclients' className="our-clients">
      <div className="clients-container">
        <h2 className="clients-title">Our <span className='g-text'>Clients</span></h2>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <img 
                src={client.logo} 
                alt={client.name}
                className="client-logo"
                onError={(e) => {
                  // Fallback for missing images
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
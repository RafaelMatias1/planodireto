import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      textAlign: 'center',
      color: 'white',
      marginBottom: '40px',
      animation: 'fadeInUp 0.8s ease-out'
    }}>
      <h1 style={{
        fontSize: '3em',
        marginBottom: '10px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        🚀 Plano Direto
      </h1>
      <p style={{
        fontSize: '1.2em',
        opacity: 0.9
      }}>
        Nutrição e Treino Personalizados em Segundos
      </p>
    </header>
  );
};

export default Header;
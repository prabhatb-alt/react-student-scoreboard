import './Header.css';

const Header = ({ isLightMode, toggleTheme }) => {
  return (
    <header className="app-header">
      <div className="header-top-row">
        <div className="header-eyebrow">
          <span className="line"></span>
          <span className="text">Made By Prabhat Bhatia</span>
        </div>
        
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          <span 
            className="emoji-icon" 
            key={isLightMode ? 'dark' : 'light'} >
            {isLightMode ? '🌙' : '☀️'}
          </span>
        </button>
      </div>
      
      <h1 className="header-title">
        STUDENT <span className="highlight">SCOREBOARD</span>
      </h1>
    </header>
  );
};

export default Header;
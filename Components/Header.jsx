import { useTheme } from "../Hooks/useTheme";

export default function Header() {
  
  const {
    isDarkModeOn,
    setIsDarkModeOn
  } = useTheme()

  return (
    <header className={`header-container ${isDarkModeOn ? 'dark':''}`} >
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the worlds?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          setIsDarkModeOn(prev => !prev)
          localStorage.setItem('isDarkMode', !isDarkModeOn)
        }}>
          <i className={`fa-solid fa-${isDarkModeOn ? 'sun' : 'moon'}`} />
          &nbsp;&nbsp;{`${isDarkModeOn ? 'Light' : 'Dark'} Mode`}
        </p>
      </div>
    </header>
  );
};


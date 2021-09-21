import { StyledToggleContainer, StyledSun, StyledThemeToggleCircle, StyledThemeToggle, StyledMoon } from './styled';
import {useState} from 'react';

enum siteThemes {
  DAY = "day",
  NIGHT = "night",
}
type IThemeType = `${siteThemes}`;


const ToggleContainer = () => {
  const [theme, setTheme] = useState<IThemeType>(siteThemes.DAY);
  const themeToggle = () => {
    setTheme(theme === siteThemes.DAY ? siteThemes.NIGHT : siteThemes.DAY );
  }
  return (
    <StyledToggleContainer onClick={themeToggle}>
      <StyledMoon className={theme}/>
      <StyledSun className={theme}/>
      <StyledThemeToggle className={theme}>
        <StyledThemeToggleCircle/>
      </StyledThemeToggle>
    </StyledToggleContainer>
  )
}

export default ToggleContainer;
import { HeaderContainer } from "./styles"
import igniteLogo from '../../assets/IgniteSimbol.png'
import { Scroll, Timer } from "phosphor-react"
import { NavLink } from "react-router-dom"



export const Header = () => {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="Logomarca da ignite"/>
      <nav>
        <NavLink to="/" title="Timer"><Timer size={24} /></NavLink>
        <NavLink to="/history" title="Histórico"><Scroll size={24} /></NavLink>
      </nav>
    </HeaderContainer>
  )
}

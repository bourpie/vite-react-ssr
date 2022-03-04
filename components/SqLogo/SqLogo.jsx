import { React } from "./index" 
import logo from '../../renderer/logo.svg';

function SqLogo() {
    return (
      <a href="/">
        <img src={logo} alt="Accueil Soquij" />
      </a>
    )
}

export { SqLogo };
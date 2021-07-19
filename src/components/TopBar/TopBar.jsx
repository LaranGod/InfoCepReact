import { Breadcrumbs, Typography, Box } from "@material-ui/core";
import "./TopBarStyle.css";

function TopBar() {
  return (
    <nav className="topBar">
      <h1 className="navTitle">INFOCEP</h1>
      <p className="navSubtitle">
        Consulta de dados utilizando a API do ViaCep
      </p>
    </nav>
  );
}

export default TopBar;

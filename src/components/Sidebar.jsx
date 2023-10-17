import UCL2 from "../images/UCL2.jpeg";
import LALIGA from "../images/LALIGA.jpeg";
import BU from "../images/BU.png";
import PL from "../images/PL.jpeg";
import UE from "../images/ubereats.png";
import ARG from "../images/ARG.jpeg";
import PLN from "../images/PLN.webp";
import POR from "../images/POR.jpeg";
import BR from "../images/BR.jpeg";
import UEL from "../images/UEL.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="homeSidebar">
      <div>
        <img src={UCL2} className="headerLogo" />
        <Link to="/euroCups/3?country=2">Champions League</Link>
      </div>
      <div>
        <img src={PL} className="headerLogo" />
        <Link to="/league/152?country=44">Premier League</Link>
      </div>
      <div>
        <img src={LALIGA} className="headerLogo" />
        <Link to="/league/302?country=27">La Liga</Link>
      </div>
      <div>
        <img src={BU} className="headerLogo" />
        <Link to="/league/175?country=4">Bundesliga</Link>
      </div>
      <div>
        <img src={UEL} className="headerLogo" />
        <Link to="/euroCups/4?country=2">Europe League</Link>
      </div>
      <div>
        <img src={UE} className="headerLogo" />
        <Link to="/league/168?country=3">Ligue 1</Link>
      </div>
      <div>
        <img src={ARG} className="headerLogo" />
        <Link to="/league/207?country=5">Seria A </Link>
      </div>
      <div>
        <img src={PLN} className="headerLogo" />
        <Link to="/league/244?country=82">Eredivisie</Link>
      </div>
      <div>
        <img src={POR} className="headerLogo" />
        <Link to="/league/266?country=92"> Primeira league</Link>
      </div>
      <div>
        <img src={BR} className="headerLogo" />
        <Link to="/league/99?country=27">brasileiro Serie A</Link>
      </div>
    </div>
  );
}

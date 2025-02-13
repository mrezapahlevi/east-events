import { CiInstagram } from "react-icons/ci";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer container" id="footer">
      <div className="footer-copyright">
        <span>EAST Media &copy;</span>
        <span>{new Date().getFullYear()}</span>
      </div>
      <div className="footer-nav">
        <ul>
          <li>
            <a href="#">Tentang Kami</a>
          </li>
          <li>
            <a href="#">Layanan</a>
          </li>
          <li>
            <a href="#">Kebijakan Privasi</a>
          </li>
          <li>
            <a href="#">Syarat & Ketentuan</a>
          </li>
        </ul>
      </div>
      <div className="footer-media">
        <ul>
          <li>
            <a href="#">
              <CiInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

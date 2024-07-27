import { Link } from "react-router-dom";
import "./footer.css";
import { FaEnvelope } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="container flex column gap-5 pt-4 h-full justify-between pb-2">
        <div
          className="columns  grid grid-cols-1  sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4 gap-3 "
        >
          <div className="flex column gap-2">
            <div>
              <Link>Home</Link>
            </div>
            <div>
              <Link>Products</Link>
            </div>
            <div>
              <Link>services</Link>
            </div>
            <div>
              <Link>Other</Link>
            </div>
          </div>
          <div className="flex column gap-2">
            <div>
              <Link>Home</Link>
            </div>
            <div>
              <Link>Products</Link>
            </div>
            <div>
              <Link>services</Link>
            </div>
            <div>
              <Link>Other</Link>
            </div>
          </div>
          <div className="flex column gap-2">
            <div>
              <Link>Home</Link>
            </div>
            <div>
              <Link>Products</Link>
            </div>
            <div>
              <Link>services</Link>
            </div>
            <div>
              <Link>Other</Link>
            </div>
          </div>
          <div className="flex column gap-2 text-white">
            <div className="flex gap-2 items-center ">
              <Link className="flex gap-2 items-center ">
                {" "}
                <FaEnvelope /> <span>hnd@gmail.com</span>
              </Link>
            </div>
            <div>
              <Link className="flex gap-2 items-center ">
                {" "}
                <FiInstagram /> <span>HNDstore</span>
              </Link>
            </div>
            <div className="">
              <Link className="flex gap-2 items-center ">
                <FaFacebookF /> <span>HND_online</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <small className="flex items-center justify-center gap-1">
            <span>&copy;</span> All rights reserved.{date}
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

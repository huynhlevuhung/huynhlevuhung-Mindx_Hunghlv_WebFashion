import { Link } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";

const Footer = () => {
  return (
    <footer className="px-4 pt-4 w-full flex bg-[#FF4800] border-t-4 border-[#000000] text-black lg:pb-40">
      <ContentWrapper>
        <aside>
          <div className="flex gap-52">
            <div>
              <p className="text-base md:text-lg font-light">
                Copyright © 2025 - Made With 🖤 by{" "}
                <a
                  className="font-bold capitalize hover:border-b-4 border-black"
                  href="https://github.com/vuhung.boy"
                  target="_blank"
                >
                  Huỳnh Hùng
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base md:text-xl font-semibold">Connect:</h2>
              <ul className="flex flex-col text-base md:text-lg font-medium">
                <Link to={"https://github.com/vuhung.boy"} target="_blank">
                  <li className="border-b-4 border-transparent hover:border-black w-fit">
                    GitHub: vuhung.boy@gmail.com
                  </li>
                </Link>
                <Link
                  to={"https://www.facebook.com/vuhung.boy/"}
                  target="_blank"
                >
                  <li className="border-b-4 border-transparent hover:border-black w-fit">
                    Facebook: vuhung.boy@gmail.com
                  </li>
                </Link>
                <Link
                  to={"https://www.instagram.com/neshuynh_6/?fbclid=IwY2xjawMRTOdleHRuA2FlbQIxMABicmlkETFnRnZYRmNJeDI4eE96b3l5AR7RjQNNnQRwubX-Q7ISSMdbh-dDTiKo6AWVjKj-bZwDxsiKMu7USIMnCkdCkw_aem_zwTPL_B57sCVU28iro8zPg#"}
                  target="_blank"
                >
                  <li className="hover:border-b-4 border-black w-fit">
                    Instagram: vuhung.boy@gmail.com
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </aside>
      </ContentWrapper>
    </footer>
  );
};
export default Footer;

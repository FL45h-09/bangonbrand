import LsideBar from "../components/layouts/LsideBar";
import { BannerSec } from "../components/BannerSec";
import { FetchData } from "../utils/FetchData";

const HomePage = () => {
  return (
    <LsideBar>
        <div className="pagebody">
          <BannerSec />
          <h1>Main Home with Right sideBar</h1>
          <FetchData />
        </div>
    </LsideBar>
  )
}

export default HomePage;
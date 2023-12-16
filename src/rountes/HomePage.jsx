import LsideBar from "../components/layouts/LsideBar";
import { BannerSec } from "../components/BannerSec";

const HomePage = () => {
  return (
    <LsideBar>
        <div className="pagebody">
          <BannerSec />
          <h1>Main Home with Right sideBar</h1>
        </div>
    </LsideBar>
  )
}

export default HomePage;
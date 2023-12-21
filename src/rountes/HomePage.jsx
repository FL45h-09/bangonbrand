import LsideBarLayout from "../components/layouts/LsideBarLayout";
import { BannerSec } from "../components/BannerSec";
import { FetchData } from "../utils/FetchData";

const HomePage = () => {
  return (
    <LsideBarLayout>
        <div className="pagebody">
          <BannerSec />
          <FetchData />
        </div>
    </LsideBarLayout>
  )
}

export default HomePage;
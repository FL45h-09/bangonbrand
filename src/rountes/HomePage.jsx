import { LsideBarLayout } from "../components/layouts/LsideBarLayout";
import { BannerSec } from "../components/BannerSec";
import { FetchData } from "../utils/FetchData";

const HomePage = () => {
  return (
    <LsideBarLayout>
        <div className="pagebody">
          <BannerSec />
          <div className="catheading"><h2><span>New </span> Products</h2></div>
          <FetchData />
        </div>
    </LsideBarLayout>
  )
}

export default HomePage;
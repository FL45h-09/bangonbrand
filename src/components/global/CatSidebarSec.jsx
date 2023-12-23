import { FetchCategories } from "../../utils/FetchCategories"

export const CatSidebarSec = () => {
  return (
    <div className="sidebarsec catsidebarsec">
      <div className="sidebarbox">
        <h3>Categories</h3>
        <FetchCategories />
      </div>
    </div>
  )
}



import { Link } from "react-router-dom";


const home = () => {
  return (
    <div className="home">
        <section></section>
        <div>
          <aside>
            <h1>Categories</h1>
          </aside>
            
        </div>
        <h1>
          Latest Products
          <Link to="/search" className="findmore">
            More
          </Link>
        </h1>
    </div>
  )
}

export default home
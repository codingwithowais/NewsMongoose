import React from 'react'
import { Link , useLocation} from 'react-router-dom'


const  Navbar= ()=> {
  const localtion = useLocation();
    return (
      <div className='sticky-top'>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark" style={{position:'sticky',top:'0px',left:'0px'}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMongoose</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${localtion.pathname==='/'?"active":""}`} aria-current="page" to='/'>Home</Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${localtion.pathname==='/business'?"active":""}`} to="/business">Business</Link>

                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${localtion.pathname==='/entertainment'?"active":""}`}to="/entertainment">Entertainment</Link>

                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${localtion.pathname==='/health'?"active":""}`} to="/health">Health</Link>

                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${localtion.pathname==='/science'?"active":""}`} to="/science">Science</Link>

                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${localtion.pathname==='/sports'?"active":""}`} to="/sports">Sports</Link>

                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${localtion.pathname==='/technology'?"active":""}`} to="/technology">Technology</Link>

                </li>


              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  
}
export default Navbar;

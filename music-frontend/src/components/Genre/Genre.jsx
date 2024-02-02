import './genre.css'
import { Link, Outlet } from 'react-router-dom'


const Genre = () => {    

  return (
    <>
        <div className="genre-container">
            <div className="headings">
                <h2 className="caption">Genres</h2>
                {/* <p className="seeAll"><a href="">View all</a></p> */}
            </div>

            <div className="genre-names">

                <div className="genre-name"> 
                    <p className="title">
                        <Link to="/discover/highlife">Burger-highlife</Link>
                    </p>
                </div>    

                <div className="genre-name">
                    <p className="title">
                        <Link to="/highlife">Highlife</Link>
                    </p>
                </div> 

                <div className="genre-name">  
                    <p className="title">
                        <Link to="highlife">Hiplife</Link>
                    </p>
                </div>    
                
                <div className="genre-name">
                    <p className="title">
                        <Link to="highlife">Afrobeats</Link>
                    </p>
                </div>      
                
                <div className="genre-name">
                    <p className="title">
                        <Link to="">Dancehall</Link>
                    </p>
                </div>    
                
                <div className="genre-name">
                    <p className="title">
                        <Link to="">Gospel</Link>
                    </p>
                </div>

            </div>

            {/* <Outlet /> */}

        </div>
    </>
  )
}

// only on click on a genre should all details be displayed

// a click on a music genre should display all music in that genre right below the list of genres
// write a function for the view all link so when clicked would show all genres
export default Genre
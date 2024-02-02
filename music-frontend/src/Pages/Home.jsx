import imageOne from '../assets/image1.jpg'
import '../components/styles/home.css'
import Search from '../components/Search/Search.jsx'



const Home = () => {
  return (
    <>
        <main>
            <div className="mainpage">

                <Search />

                <p className='try-one'>Or try one of these hits</p>

                <div className="musicContainer">
                    <div className="musicBox">
                        <img src={imageOne} alt="Music track" />
                        
                        <div className="overlay">
                            <div className="info">
                                <p className="artist">Jimmy Clare</p>
                                <p className="song">When you are here</p>
                            </div>
                        </div>

                    </div>

                    <div className="musicBox">
                        <img src={imageOne} alt="Music track" />

                        <div className="overlay">
                            <div className="info">
                                <p className="artist">Jimmy Clare</p>
                                <p className="song">When you are here</p>
                            </div>
                        </div>

                    </div> 

                    <div className="musicBox">
                        <img src={imageOne} alt="Music track" />

                        <div className="overlay">
                            <div className="info">
                                <p className="artist">Jimmy Clare</p>
                                <p className="song">When you are here</p>
                            </div>
                        </div>

                    </div> 

                    <div className="musicBox">
                        <img src={imageOne} alt="Music track" />

                        <div className="overlay">
                            <div className="info">
                                <p>Jimmy Clare</p>
                                <p>When you are here</p>
                            </div>
                        </div>

                    </div> 

                    
                </div>
            </div>
        </main>
    </>
  )
}



export default Home
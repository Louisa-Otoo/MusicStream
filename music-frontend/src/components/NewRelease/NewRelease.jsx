import React from 'react'
import BlackSherif from '../../assets/Black-Sherif.jpg'
import ResMan from '../../assets/res-man2.jpg'
import './newRelease.css'


const NewRelease = () => {
  return (
    <>
        <div className="newRelease">
            <h2 className="heading">New Releases</h2>

            <div className="allSongs">
                <div className="song">
                    <img src={ResMan} alt="Black Sherif" />
                    <p className='name'>Black Sherif</p>
                    <p className='track'>No one</p>
                </div>

                <div className="song">
                    <img src={BlackSherif} alt="Black Sherif" />
                    <p className='name'>Black Sherif</p>
                    <p className='track'>Alright</p>
                </div>

                <div className="song">
                    <img src={ResMan} alt="Black Sherif" />
                    <p className='name'>Black Sherif</p>
                    <p className='track'>My baby</p>
                </div>

                <div className="song">
                    <img src={BlackSherif} alt="Black Sherif" />
                    <p className='name'>Black Sherif</p>
                    <p className='track'>Fine things</p>
                </div>

                <div className="song">
                    <img src={ResMan} alt="Black Sherif" />
                    <p className='name'>Black Sherif</p>
                    <p className='track'>Fine tracks tracks track ytuy gj bjk</p>
                </div>
            </div>
        </div>
    </>
  )
}


// find how to use css to make paragraph contents to wrap onto the next line
export default NewRelease
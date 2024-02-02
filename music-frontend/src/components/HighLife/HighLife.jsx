import React from 'react'


const HighLife = () => {
  return (
    <>
        <div className="highlife">
            <h2>Everything you need to know about highlife page</h2>

                <div className="song">
                    {/* <img src={ResMan} alt="Black Sherif" /> */}
                    <p className='name'>Black Sherif</p>
                    <p className='track'>No one</p>
                </div>

                <div className="song">
                    {/* <img src={BlackSherif} alt="Black Sherif" /> */}
                    <p className='name'>Black Sherif</p>
                    <p className='track'>Alright</p>
                </div>
        </div>
    </>
  )
}


// implement a function where only a click should open a list of songs from that genre
export default HighLife
import React from 'react'
import Genre from '../components/Genre/Genre'
import NewRelease from '../components/NewRelease/NewRelease'
import { Outlet } from 'react-router-dom'
import Search from '../components/Search/Search'


const Discover = () => {
  return (
    <>
        <div>

            <Search />

            <Genre />

            <NewRelease /> 

        </div>
    </>
  )
}


export default Discover
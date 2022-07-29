import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components'
import { DCPage, HeroPage, MarvelPages, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPages />}></Route>
                <Route path="dc" element={<DCPage />}></Route>

                <Route path="search" element={<SearchPage />}></Route>
                <Route path="hero/:id" element={<HeroPage/>}></Route>

            </Routes>
        </div>
    </>
  )
}

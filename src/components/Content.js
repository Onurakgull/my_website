import React from 'react'
import ImageOne from '../image/my.jpg'
import ImageTwo from '../image/grid.jpg'
import ImageTree from '../image/ikon.jpg'

const Content = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-36">
            <img src={ImageOne} alt="profil" className="h-full rounded-xl mb-20 shadow"/>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Üniversite Yıllarım.</h2>
                <p className="mb-2">Gazi Üniversitesi</p>
                <span className="text-black opacity-40 -mt-3">Elektrik Elektronik Mühendisliği</span>
            </div>
        </div>
        <div className="flex flex-row py-30 justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono mr-4">
                <img src={ImageTwo} alt="profil" className="h-1/3 rounded-xl mb-20 shadow"/>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Grid Telekom <i>1.1.2020-1.1.2021</i></h2>
                    <p className="mb-2">Network Operation Center Engineer (Noc Engineer)</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono">
                <img src={ImageTree} alt="profil" className="h-1/3 rounded-xl mb-20 shadow"/>
                <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">İkon Telekom <i>1.1.2020-1.1.2021</i></h2>
                    <p className="mb-2">Teknical Support Engineer</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Content;

import React from 'react'
import star from '../../../assets/star.png'

import './style.scss'

const Home = () => {
    return (
        <div id="Home" className="home">
            <div className="home-container">
                <div className="home-content">
                    <section className="home-left">
                        <p className="home-slogan">Faut bien commencer quelque part !</p>
                        <img src={star} alt="" className="home-image" />
                    </section>
                    <section className="home-right">
                        <h2 className="home-title">Un Petit mot de Mouah</h2>
                        <p  className="home-text">Nulla dolore sunt do laboris aute sunt eiusmod tempor deserunt 
                        consequat pariatur quis id. Cupidatat veniam ipsum aliqua dolor amet ullamco ex nisi 
                        ckkkkkkkkkkuat. Magna enim et sit officia enim 
                        ipsum aute in labore veniam pariatur.<br/>
                        Commodo laborum elit do Lorem ullamco et incididunt sunt. Voluptate eu reprehenderit ea 
                        commodo magna est proident reprehenderit proident ad culpa dolor labore in. Sint eiusmod
                        </p>
                    </section>
                </div>
                <div className="home-foot">
                    <section className="home-scroll">
                        <span className="home-scroll-icon">
                            <span className="home-scroll-icon-out">
                                <span className="home-scroll-icon-in">
                                </span>
                        </span>
                        </span>
                        <h2 className="home-foot-text">La suite</h2>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import star from '../../../assets/star.png'

import './style.scss'

const Home = () => {
    return (
        <div id="Home" className="home">
            <div className="home-container">
                <div className="home-content">
                    <section className="home-left">
                        <p  className="home-slogan">Faut bien commencer quelque part !</p>
                        <img src={star} alt="" className="home-image" />
                    </section>
                    <section className="home-right">
                        <h2 className="home-title">Un Petit mot de Mouah</h2>
                        <p  className="home-text">Nulla dolore sunt do laboris aute sunt eiusmod tempor deserunt 
                        consequat pariatur quis id. Cupidatat veniam ipsum aliqua dolor amet ullamco ex nisi 
                        ckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkuat. Magna enim et sit officia enim 
                        ipsum aute in labore veniam pariatur.<br/>
                        Commodo laborum elit do Lorem ullamco et incididunt sunt. Voluptate eu reprehenderit ea 
                        commodo magna est proident reprehenderit proident ad culpa dolor labore in. Sint eiusmod 
                        sit incididunt laborum dolore deserunt. Pariatur laboris cillum incididunt sint ex nisi 
                        aliqua ut non ex velit exercitation sit. Sint minim deserunt cillum ut quis quis consequat
                        mollit occaecat incididunt incididunt. Deserunt in aliqua mollit aliqua. Minim ut ex quis
                        minim fugiat. Cillum minim occaecat cillum eu ex consequat et nisi nulla proident pariatur.
                        Voluptate adipisicing consectetur duis sit reprehenderit in ad sunt cupidatat exercitation nisi.
                        Quis et pariatur mollit fugiat fugiat dolore Lorem voluptate. Fugiat commodo duis deserunt 
                        excepteur labore sunt elit non cillum dolor Lorem.
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

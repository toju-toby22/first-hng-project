// import logo from './logo.svg';
import './App.css'
import React from 'react'
import avatarshare from "./icons-img/_Avatar share button.png"
import profilepic from "./icons-img/profile__img.png"

function App() {
     return (
          <div className="back">

          <div className="first-page">
  
              <div className="share-avatar">
                  <img className="avatar" src={avatarshare} alt="" />
              </div>
  
              <div className="picxusername">
                  <img id="profile__img" className="image" src={profilepic} alt="" />
              </div>
  
              <p id="twitter" className="twitterusername">Toju_toby</p>
              <p id="slack" className="twitterusername" style={{ display: "none" }}>Toju_tobiliscious</p>
  



  
              <div className="link">
                <div className="linktree">

                    <a id="btn__zuri" className="links" href="https://training.zuri.team/">Twitter Link</a>

                    <a id="btn__zuri" className="links" href="https://training.zuri.team/">Zuri Team</a>

                    <a id="books" className="links" href="http://books.zuri.team"
                        title="This is where you find books about design and coding">Zuri Books</a>

                    <a id="book__python" ref_id="Toju_tobiliscious" className="links" href="https://books.zuri.team/"
                        title="A Deatailed book about Python. Click get the perfect guide for your Python journey">Python Books</a>

                    <a id="pitch" className="links" href="https://background.zuri.team"
                        title="This is where you find books about design and coding">Background Check for Coders</a>


                    <a id="book__design" className="links" href="https://books.zuri.team/design-rules"
                        title="Free design book offered by Zuri. Very informative and detailed book that guides your steps in designing">Design Books</a>

                    <a id="book__design" className="links" href="https://books.zuri.team/design-rules"
                        title="Free design book offered by Zuri. Very informative and detailed book that guides your steps in designing">Design Books</a>
                </div>
            </div>
          </div>
  
      </div>
     );
}

export default App;

// echo "# HNG-internship-Stage-1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/toju-toby22/HNG-internship-Stage-1.git
// git push -u origin main
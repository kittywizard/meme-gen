import memesData from '../memeData';
import React from 'react';

export default function Meme(){


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });

    const [allMemeImages, setMemeImages] = React.useState(memesData);

    function handleClick() {
        const memeArray = allMemeImages.data.memes; //makes this less disgusting
        const randomNum = Math.floor((Math.random() * memeArray.length) + 1);

        setMeme(prevState => {
          return {
            ...prevState,
            randomImage: [memeArray[randomNum].url]
            }
        });

    }

    return (
        <main>
            <div className="meme--form">
                <input 
                    type="text" 
                    id="memeFirst" 
                    name="topText"
                    placeholder="Top Text"/>
                <input 
                    type="text" 
                    id="memeSecond" 
                    name="bottomText"
                    placeholder="Bottom Text"/>
                <button 
                    className="meme--btn" 
                    onClick={handleClick}>
                        Get a new meme image 🖼
                </button>
            </div>

            <div className="meme--div">
                <img src={meme.randomImage} className="meme--img"/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>

        </main>

    )
}
import memes from '../memeData';
import React from 'react';

export default function Meme(){

    const [url, setUrl] = React.useState('');

    function handleClick() {
        const memeArray = memes.data.memes; //makes this less disgusting
        const randomNum = Math.floor((Math.random() * memeArray.length) + 1);
        

        setUrl(memeArray[randomNum].url); //can just set it if prevState not needed
    }

    return (
        <main>
            <div className="meme--form">
                <input 
                    type="text" 
                    id="memeFirst" 
                    name="top-text"
                    placeholder="Top Text"/>
                <input 
                    type="text" 
                    id="memeSecond" 
                    name="bottom-text"
                    placeholder="Bottom Text"/>
                <button 
                    className="meme--btn" 
                    onClick={handleClick}>
                        Get a new meme image 🖼
                </button>
            </div>

            <div className="meme--div">
                <img src={url} className="meme--img"/>
                {
                    // probably should have this be hidden at first? so it doesn't show a broken link before you click for the first time.
                }
            </div>

        </main>

    )
}
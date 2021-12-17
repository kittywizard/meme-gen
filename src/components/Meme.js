import memesData from '../memeData';
import React from 'react';

export default function Meme(){
        /**

     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    

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
                {
                    console.log(meme)
                    // probably should have this be hidden at first? so it doesn't show a broken link before you click for the first time.
                }
            </div>

        </main>

    )
}
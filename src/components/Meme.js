import memes from '../memeData';

  /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

export default function Meme(){

    const [url, setUrl] = React.useState('');

    function handleClick() {
        const memeArray = memes.data.memes; //makes this less disgusting
        const randomNum = Math.floor((Math.random() * memeArray.length) + 1);
        // memeArray[randomNum]; 
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


        </main>

    )
}
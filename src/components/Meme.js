import memes from '../memeData';

export default function Meme(){

    function handleClick() {
        const memeArray = memes.data.memes; //makes this less disgusting
        const randomNum = Math.floor((Math.random() * memeArray.length) + 1);
        const {url} = memeArray[randomNum]; //makes it able to pull the url property from this array object automatically?? magic
        console.log(url)
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
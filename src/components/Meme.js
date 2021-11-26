export default function Meme(){
    return (
        <main>
            <form className="meme--form">
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
                <button className="meme--btn">Get a new meme image 🖼</button>
            </form>


        </main>

    )
}
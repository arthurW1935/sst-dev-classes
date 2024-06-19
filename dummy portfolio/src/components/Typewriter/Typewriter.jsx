import { useEffect, useState } from "react";

function Typewriter({
    textArray,
    typingSpeed = 100,
    deletingSpeed = 50,
    waitTime = 1000
}){

    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting){
                if (displayedText.length < textArray[index].length){
                    setDisplayedText((prev) =>  prev + textArray[index].charAt(prev.length));
                }
                else{
                    setTimeout(setIsDeleting(true), waitTime);
                }
            }
            else{
                if(displayedText.length>0){
                    setDisplayedText((prev) => prev.slice(0, -1));
                }
                else{
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % textArray.length);
                }
            }
        };

        const timeout = setTimeout(
            handleTyping, 
            isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, textArray, typingSpeed, deletingSpeed]);

    return (
        <div className="typewriter-effect">
            {displayedText}
            <span className="caret">|</span>
        </div>
    )

}

export default Typewriter;
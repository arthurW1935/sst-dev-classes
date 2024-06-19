import './ProgressBar.css'
import { useEffect, useState } from 'react';

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(progress => progress < 100 ? progress + 1 : 100);
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="progress-bar">
            <div className="progress" style={{width: `${progress}%`}}></div>
        </div>
    );
}

export default ProgressBar;
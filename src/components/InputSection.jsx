import '../styles/InputSection.css';
import { useState } from 'react';

function InputSection({title, children}) 
{
    const [open, setOpen] = useState(false);

    function handleClick()
    {
        setOpen(!open);
    }

    return !open ? (<div className="input-section" onClick={handleClick}>
        <h1>{title}</h1>
    </div>)
    :
    (<div className="input-section">
        <h1>{title}</h1>
        {children}
        <button onClick={handleClick}>Close</button>
    </div>)
}

export default InputSection;
import '../styles/InputSection.css';
import { useState } from 'react';

function InputSection({title, children}) 
{
    const [open, setOpen] = useState(false);

    function handleClick()
    {
        setOpen(!open);
    }

    return <div className="input-section">
        <div className='input-section-header' onClick={handleClick}><h1>{title}</h1></div>
        {open ? children : null}
    </div>
}

export default InputSection;
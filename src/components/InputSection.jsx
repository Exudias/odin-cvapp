import '../styles/InputSection.css';
import { useState } from 'react';

function InputSection({title, children}) 
{
    const [open, setOpen] = useState(true);

    function handleClick()
    {
        setOpen(!open);
    }

    return <div className="input-section">
        <div className='input-section-header' onClick={handleClick}><h1>{title}</h1><img src="chevron-down.svg" className={open ? 'input-open' : ''}/></div>
        {open ? children : null}
    </div>
}

export default InputSection;
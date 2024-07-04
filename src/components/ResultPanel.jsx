import '../styles/ResultPanel.css';

function ResultPanel({name, email, phone, education, experience}) 
{
    return <div id="result">
        <div>
            <h1>{name}</h1>
            <div className='result-contacts'>
                <span>{email}</span>
                <span>{phone}</span>
            </div>
        </div>
        <hr></hr>
        {education.length > 0 && 
        <>
        <div className="result-heading">
            <h1>Education</h1>
        </div>
        <hr></hr>
        <>{education.map((e, index) => 
            <div key={index} className='result-section'>
                <h3>{e.name}</h3>
                <h4>{e.title}</h4>
                <h4>{e.duration}</h4>
            </div>
        )}</>
        <hr></hr>
        </>}
        {experience.length > 0 &&
        <>
            <div className="result-heading">
                <h1>Experience</h1>
            </div>
            <hr></hr>
            <>{experience.map((e, index) => 
                <div key={index} className='result-section'>
                    <h3>{e.name}</h3>
                    <h4>{e.title}</h4>
                    <h4>{e.responsibilities}</h4>
                    <h4>{e.duration}</h4>
                </div>
            )}</>
        </>
        }
    </div>
}

export default ResultPanel;
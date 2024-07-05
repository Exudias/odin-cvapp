import '../styles/ResultPanel.css';

function ResultPanel({name, email, phone, education, experience}) 
{
    return <div id="result">
        <div className="result-general">
            <h1>{name}</h1>
            <div className='result-contacts'>
                {email && <a href={"mailto:" + email} tabIndex="-1">{email}</a>}
                {phone && <a href={"tel:" + phone} tabIndex='-1'>{phone}</a>}
            </div>
        </div>
        {education.length > 0 && 
        <>
        <div className="result-heading">
            <h1>Education</h1>
        </div>
        <hr></hr>
        <>{education.map((e, index) => 
            <div key={index} className='result-education-section'>
                <div className="result-edu-uni"><h3>{e.name} -&nbsp;</h3><h4> {e.title}</h4></div>
                <h4>{e.duration}</h4>
            </div>
        )}</>
        </>}
        {experience.length > 0 &&
        <>
            <div className="result-heading">
                <h1>Experience</h1>
            </div>
            <hr></hr>
            <>{experience.map((e, index) => 
                <div key={index} className='result-experience-section'>
                    <div className='result-exp-place'>
                        <h3>{e.name}</h3>
                        <h4>{e.duration}</h4>
                    </div>
                    <h4 className='result-experience-title'>{e.title}</h4>
                    <h4>Responsibilities: {e.responsibilities}</h4>
                </div>
            )}</>
        </>
        }
    </div>
}

export default ResultPanel;
import '../styles/ResultPanel.css';

function ResultPanel({name, email, phone, education, experience}) 
{
    return <div id="result">
        <h1>General</h1>
        <hr></hr>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{phone}</h1>
        <hr></hr>
        <h1>Education</h1>
        <hr></hr>
        <>{education.length > 0 && education.map((e, index) => 
            <div key={index}>
                <h3>{e.name}</h3>
                <h4>{e.title}</h4>
                <h4>{e.duration}</h4>
            </div>
        )}</>
        <hr></hr>
        <h1>Experience</h1>
        <hr></hr>
        <>{experience.length > 0 && experience.map((e, index) => 
            <div key={index}>
                <h3>{e.name}</h3>
                <h4>{e.title}</h4>
                <h4>{e.responsibilities}</h4>
                <h4>{e.duration}</h4>
            </div>
        )}</>
        <hr></hr>
    </div>
}

export default ResultPanel;
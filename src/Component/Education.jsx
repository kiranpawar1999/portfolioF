


function Education (props) {
    const  educationDetails = [
        {
            logo: "logo-arrow",
            degree: "B.Tech",
            institution: 'Astral Institute of Technology & Research, Indore.',
            grades: 'CGPA: 7.84',
            year: '[2024-passout]',
            desc: "I completed my B.Tech in Computer Science from Astral College, Indore, M>P, in 2024, with a CGPA of 7.84."
        },
        {
            logo: "logo-play",
            degree: "M.Tech",
            institution: 'Astral Institute of Technology & Research, Indore',
            grades: 'CGPA: 7.35',
            year: '[2026-Prasent]',
            desc: "I am currently pursuing a Master’s degree in Computer Science at Astral College, Indore, and currently hold a CGPA of 7.35."
        }
    ];
    return (
        <>
        <section id="education" className="py-4 px-4 text-white">
            <div className="container mx-auto px-4 py-12">
                <h3 className="text-4xl text-center font-semibold mb-1">
                    My <span className="text-cyan-600">Education</span>
                </h3>
                <p className="text-lg text-center font-normal">My educational details are as follows.</p>
                <hr className="border-gray-300 w-full mb-8"/>
                <div>
                    {educationDetails.map((edu, index) => (
  <div key={index} className="mb-6 p-4 bg-slate-800 rounded-lg">
    
    <div className="flex items-center mb-2">
      <ion-icon
        name={edu.logo}
        className="text-cyan-600 text-xl mr-2"
      ></ion-icon>

      <div className="text-lg font-medium text-gray-200">
        {edu.degree}
      </div>
    </div>

    <div className="ml-6">
      <div className="text-base text-gray-400">{edu.institution}</div>
      <div className="text-base text-gray-400">{edu.grades}</div>
      <div className="text-base text-gray-400">{edu.year}</div>
    </div>

    <p className="text-gray-300 mt-2 ml-6">{edu.desc}</p>
  </div>
))}
</div> 

            </div>
       
        </section>
        </>
    );
};

export default Education;
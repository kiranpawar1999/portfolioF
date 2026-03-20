function About() {
  const info = [
    { text: "Completed Projects", count: "02" },
    { text: "Working On", count: "01" },
  ];

 

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8 max-w-6xl mx-auto px-10">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>

        <p className="text-gray-400 my-3 text-lg">My Introduction</p>

        <p className="text-gray-300 text-justify leading-7 mt-6">
          I am currently pursuing an M.Tech in Computer Science. As a web
          developer, I specialize in building dynamic and responsive user
          interfaces, combining creativity with strong technical expertise.
        </p>

        <p className="text-gray-300 text-justify leading-7 mt-4">
           I have hands-on experience in developing projects using React.js, Tailwind CSS ,
           creating responsive and visually appealing web applications. I have also
            strong knowledge in Node.js, Express.js and JWT Authentication have experience
             working with backend development and APIs.
        </p>

        <p className="text-gray-300 text-justify leading-7 mt-4">
            My core skills include JavaScript, React.js, Node.js, MongoDB, and GitHub. I
            focus on building scalable full-stack applications with clean UI and a great
            user experience, and I am continuously learning and improving my development skills.
        </p>

        {/* STATS */}
        <div className="flex justify-center gap-10 mt-10">
          {info.map((item) => (
            <div key={item.text}>
              <h3 className="text-4xl font-semibold">
                {item.count}
                <span className="text-cyan-600">+</span>
              </h3>
              <p className="text-sm text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <a href="/KIRAN.pdf" download>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md w-full md:w-fit">
          Check Resume
        </button>
        </a>
      </div>
    </section>
  );
}

export default About;

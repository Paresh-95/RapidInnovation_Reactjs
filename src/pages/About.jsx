import {
  FaBook,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function About() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocKVFlyOzknXwxRpm6EljW6fGpX4M_FERO9MVe95VITsVeQ9KdU=s432-c-no"
              loading="lazy"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Paresh Prakash Bhamare
          </h1>
          <p className="text-xl  max-w-2xl mx-auto">
            Computer Engineering Student at R.C. Patel Instiute of
            Technology,Shirpur | Aspiring Web Developer
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold  mb-6">About Me</h2>
          <p className="mb-4">
            Hello, I'm Paresh Bhamare, a passionate Fullstack Web Developer
            currently studying Computer Science at R. C. Patel Institute of
            Technology with an expected graduation in 2025. My goal is to excel
            as a Software Development Engineer (SDE) and contribute meaningfully
            to the field of software engineering. Dedicated to creating
            effective solutions, I possess strong skills in web development,
            Data Structures, and Algorithms. I am committed to continuous
            learning, staying updated with the latest technologies to deliver
            high-quality results.
          </p>
          <p className="mb-4">
            I am eager to explore opportunities in software engineering where I
            can innovate and make valuable contributions. Let's connect and
            explore possibilities together!
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold  mb-6">Education</h2>
          <div className={theme==='light'?'bg-gray-800 text-white rounded-lg shadow-md p-6':'bg-[#F6F2F0] text-black rounded-lg shadow-md p-6'}>
            <div className="flex items-start">
              <FaGraduationCap className="h-7 w-7 mt-1 mr-4 text-violet-500" />
              <div>
                <h3 className="text-xl font-semibold ">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="">
                  R.C. Patel Instiute of Technology,Shirpur
                </p>
                <p className="">Expected Graduation: May 2025</p>
                <p className=" mt-2">Relevant Coursework:</p>
                <ul className="list-disc list-inside  ml-4">
                  <li>Data Structures and Algorithms</li>
                  <li>Web Development</li>
                  <li>Database Management Systems</li>
                  <li>Operating System</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Java",
              "C++",
              "JavaScript",
              "React",
              "Node.js",
              "MySQL",
              "MongoDB",
              "Git",
            ].map((skill, index) => (
              <div
                key={index}
                // className="bg-gray-800 y-500 rounded-lg shadow-md p-4 text-center"
                className={theme==='light'?'bg-gray-800 text-white rounded-lg shadow-md p-4':'bg-[#F6F2F0] text-black rounded-lg shadow-md p-4'}
              >
                <span className="font-bold">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold  mb-6">Experience</h2>
          <div className="space-y-6">
            {/* <div className="bg-gray-800 rounded-lg shadow-md p-6"> */}
            <div className={theme==='light'?'bg-gray-800 text-white rounded-lg shadow-md p-6':'bg-[#F6F2F0] text-black rounded-lg shadow-md p-6'}>
              
              <div className="flex items-start">
                <FaBriefcase className="h-6 w-6 mt-1 mr-4 text-violet-500" />
                <div>
                  <h3 className="text-xl font-bold ">
                    Java Intern
                  </h3>
                  <p className="">R3 System India Pvt Ltd</p>
                  <p className="">July 2023 - August 2023</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Completed internship and training in web appliaction
                      development with grade A+.
                    </li>
                    <li>
                      Developed and maintained 3 web applications using Java,
                      JSP, Servlet and SQL technology, improving the performance
                      and Scalability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="bg-gray-800 rounded-lg shadow-md p-6"> */}
            <div className={theme==='light'?'bg-gray-800 text-white rounded-lg shadow-md p-6':'bg-[#F6F2F0] text-black rounded-lg shadow-md p-6'}>
              <div className="flex items-start">
                <FaBriefcase className="h-6 w-6 mt-1 mr-4 text-violet-500" />
                <div>
                  <h3 className="text-xl font-bold ">
                    MERN Dev Internship
                  </h3>
                  <p className="">Oasis Infobyte</p>
                  <p className="">Feb 2023 - Mar 2023</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Acquired hands-on experience and skills in Full Stack
                      development, mastering HTML, CSS, JS, Tailwind Node.js,
                      Express.js, and MongoDB.
                    </li>
                    <li>
                      Developed 2 web applications enhancing the user
                      experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* <div className="text-black rounded-lg shadow-lg p-8 md:p-12"> */}
          <div className={theme==='light'?'bg-gray-800 text-white rounded-lg shadow-lg p-6 md:p-12':'bg-[#F6F2F0] text-black  shadow-lg p-6 md:p-12'}>
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <FaPhone className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p>+91 9284521255</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>bhamareparesh.rcpit@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p>Shirpur, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

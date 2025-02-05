import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"

// Define filters
export const filters = [
  { name: "All", id: "all" },
  { name: "Frontend Projects", id: "FP" },
  { name: "Web Projects", id: "WP" },
  { name: "MERN Projects", id: "MP" },
]

const ProjectCard = ({ project }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={project.image || "/placeholder.svg"}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <button
            onClick={() => window.open(project.live_demo_link, "_blank")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700"
          >
            Live Preview
          </button>
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={project.github || "/placeholder.svg"} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  const [selectedTag, setSelectedTag] = useState("all")
  const [projectData, setProjectData] = useState(projects)

  useEffect(() => {
    if (selectedTag === "all") {
      setProjectData(projects)
    } else {
      const filteredProjects = projects.filter((project) =>
        project.tags.some((t) => t.name.toLowerCase() === selectedTag.toLowerCase()),
      )
      setProjectData(filteredProjects)
    }
  }, [selectedTag])

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        className="flex justify-start gap-4 mb-8 mt-10 overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filters.map((item, index) => (
          <button
            key={index}
            className={`bg-tertiary rounded-lg py-2 px-4 text-[16px] cursor-pointer whitespace-nowrap ${
              selectedTag === item.id ? "bg-[#915EFF] text-white" : "text-secondary"
            }`}
            onClick={() => setSelectedTag(item.id)}
          >
            {item.name}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="mt-20 flex flex-wrap gap-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {projectData.length === 0 ? (
          <p className="text-white">No projects found for the selected filter.</p>
        ) : (
          projectData.map((project, index) => <ProjectCard key={`project-${index}`} project={project} />)
        )}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "work")


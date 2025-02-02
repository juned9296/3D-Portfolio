import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Define filters
export const filters = [
  { name: "All", id: "all" },
  { name: "Frontend Projects", id: "FP" },
  { name: "Web Projects", id: "WP" },
  { name: "MERN Projects", id: "MP" },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image || "/placeholder.svg"}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <button
            onClick={() => window.open(live_demo_link, "_blank")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700"
          >
            Live Preview
          </button>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github || "/placeholder.svg"} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [projectData, setProjectData] = useState(projects);

  const filterHandler = (tag) => {
    console.log(`Selected tag: ${tag}`); // Debugging: Check which tag is selected

    setSelectedTag(tag);

    // Handle the "all" case: show all projects
    if (tag === "all") {
      console.log("Showing all projects");
      setProjectData(projects);
    } else {
      // Filter projects by the selected tag
      const filteredProjects = projects.filter((project) =>
        project.tags.some((t) => t.name.toLowerCase() === tag.toLowerCase()) // Check if any tag matches
      );

      console.log(`Filtered projects count: ${filteredProjects.length}`); // Debugging: Log filtered projects count

      setProjectData(filteredProjects);
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Filter tags section */}
      <motion.div className="flex justify-start gap-4 mb-8 mt-10 overflow-x-auto">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`bg-tertiary rounded-lg py-2 px-4 text-[16px] cursor-pointer whitespace-nowrap ${
              selectedTag === item.id ? "bg-[#915EFF] text-white" : "text-secondary"
            }`}
            onClick={() => filterHandler(item.id)} // Call filter handler
          >
            {item.name}
          </button>
        ))}
      </motion.div>

      {/* Render filtered projects */}
      <motion.div className="mt-20 flex flex-wrap gap-7">
        {projectData.length === 0 ? (
          <p className="text-white">No projects found for the selected filter.</p>
        ) : (
          projectData.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        )}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");

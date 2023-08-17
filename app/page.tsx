import fs from "fs";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import "tailwindcss/tailwind.css";
import "../src/app/globals.css";

const getPortfolioProjectTitlesSortedByDate = () => {
  const directoryPath = "public/portfolio/";
  const folders = fs.readdirSync(directoryPath);
  const allProjects = new Array();
  folders.forEach((folder) => {
    const files = fs.readdirSync(path.join(directoryPath, folder));
    const project = {
      folder,
      name: "",
      projectNumber: 0,
      firstImageForCover: "",
    };
    files.forEach((file) => {
      const filePath = path.join(directoryPath, folder, file);
      if (file.endsWith(".md")) {
        const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
        let fileDataParsed = matter(fileContent);
        let fileName = file.slice(0, -3);
        project.name = fileName;
        project.projectNumber = fileDataParsed["data"]["Project Number"];
      } else {
        project.firstImageForCover = filePath;
      }
    });
    allProjects.push(project);
  });
  let sortedData = allProjects.sort(
    (prev, curr) => curr.projectNumber - prev.projectNumber
  );
  return sortedData;
};

const HomePage = () => {
  const portfolioProjectsMetaData = getPortfolioProjectTitlesSortedByDate();
  const portfolioProject = portfolioProjectsMetaData.map((project) => (
    <Link href={"projects/" + project.name}>
      <li className="font-bold xl:text-7xl lg:text-6xl md:text-5xl list-none hover:text-neon">
        {project.name.replaceAll("-", " ")}
      </li>
    </Link>
  ));
  return (
    <div className="flex flex-col h-full justify-center text-3xl lg:text-5xl py-14 lg:py-0">
      {portfolioProject}
    </div>
  );
};

export default HomePage;

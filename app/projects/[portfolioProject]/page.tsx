import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Carousel from "../../components/Carousel";
import Video from "../../components/Video";



const getProjectContent = (project: string) => {
  const directoryPath = path.join("public/portfolio/", project);
  const files = fs.readdirSync(directoryPath);
  const projectData = {
    title: "",
    subtitle: "",
    date: "",
    materials: "",
    content: "",
    images: [] as string[],
  };

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (file.endsWith(".md")) {
      const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
      let fileDataParsed = matter(fileContent);
      projectData.title = fileDataParsed.data.title;
      projectData.subtitle = fileDataParsed.data.subtitle;
      projectData.date = fileDataParsed.data.date;
      projectData.materials = fileDataParsed.data.materials;
      projectData.content = fileDataParsed.content;
    } else {
      projectData.images.push(file);
    }
  });
  return projectData;
};

const projectPage = (props: any) => {
  const project = props.params.portfolioProject;
  const content = getProjectContent(project);

  return (
    <div className="flex-1 flex-col h-full overflow-y-auto">
      <Link href="/" className="flex font-bold text-3xl pt-6">
        &#8592;
      </Link>
      {/* <div className="">
        <h1 className="flex font-bold text-5xl pt-12 py-6">{content.title}</h1>
        <h2 className="flex font-bold text-lg">{content.subtitle}</h2>
        <p className="flex font-bold text-lg">{content.date}</p>
        <p className="flex font-bold text-lg">Materials: {content.materials}</p>
      </div>
      <p className="py-8">{content.content}</p>
      <div className="">
        <Carousel project={project} images={content.images}></Carousel>
      </div>
      <div className="pt-12 xl:pt-24 ">
        <Video projecTitle={content.title}></Video>
      </div> */}
    </div>
  );
};


export default projectPage;



import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "/public/content/projects");

export type ProjectData  ={
  date:string;
  title: string;
  cover: string;
  github:string;
  external:string;
  tech: string[];
  folderName: string;
  content:string;
}

export const getProjectFolderNames = ():string[] => {
  return fs.readdirSync(projectsDirectory);
}

export const getProjectFiles = (filepath: string):string[] => {
  return fs.readdirSync(filepath);
}

export const getProjectData = (folderName:string, fileName:string):{ [p: string]: any; content: string } => {

  // remove file extension
  const projectSlug = fileName.replace(/\.md$/, "");

  // full file path
  const filePath = path.join(projectsDirectory, `${folderName}/${projectSlug}.md`);

  const fileContents = fs.readFileSync(filePath, "utf-8");

  // get metadata and content separately

  const {data, content} = matter(fileContents);

  return {
    ...data,
    folderName,
    content: content
  }

}

export const getAllProjects = ():{ [p: string]: any; content: string }[] => {
  return getProjectFolderNames().map(folderName => {

    const filename = getProjectFiles(path.join(projectsDirectory, folderName)).filter((filename)=>{
      return filename.includes(".md");
    })

    return getProjectData(folderName, filename[0]);

  })
}

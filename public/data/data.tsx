interface Data {
  email:string,
  navLinks:Array<{name:string, url:string}>,
  social:Array<{name:string, url:string}>
}

export const data:Data = {
  email:"xinyuec57@gmail.com",
  navLinks: [
    {
      name: "About",
      url: "/#About",
    },
    {
      name: "Skill",
      url: "/#About",
    },
    {
      name: "Project",
      url: "/#Project",
    },
    {
      name: "Contact",
      url: "/#Contact",
    },
  ],
  social: [
    {
      name: "Github",
      url: "https://github.com/Summer-luna"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/xinyue-chen-089700179/"
    },
  ]
};





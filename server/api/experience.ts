export default defineEventHandler(async () => {
  type resultType = {
    year: string;
    job: string;
    company: string;
    description: string;
    tags: string[];
    link: string;
  };

  const result: resultType[] = [
    {
      year: "2023 - Present",
      job: ".NET Developer",
      company: "Galva Galindra Multi Cipta",
      description: `Contributing on company's application migration and develop web application based on Functional Specification Design (FSD), creating RESTful API, make a test, and conduct user training program.`,
      tags: [
        "ASP.NET",
        "Vue.js",
        "JavaScript",
        "Ms. SQL Server",
        "Bootstrap",
        "Dev Express",
        "Bootstrap",
      ],
      link: "http://gtc.co.id/",
    },
    {
      year: "2022 - 2022",
      job: "Front-end Developer Internship",
      company: "Kawah Edukasi",
      description:
        "Develop educational website to provide online coding bootcamp, substituting frontend development internship mentor in daily scrum meeting for a month",
      tags: ["React.js", "Redux Saga", "Reactstrap", "Figma", "Postman"],
      link: "http://kawahedukasi.id/",
    },
    {
      year: "2019 - 2023",
      job: "Full-stack Developer",
      company: "Nocola IoT Solution",
      description: `Develop products, company's web applications and delivered to users in
          Indonesian power industry company. Build internal services to bridges
          company's web applications needs such as web services, Restful API,
          and etc.`,
      tags: [
        "ASP.NET",
        "Vue.js",
        "React.js",
        "Ms. SQL Server",
        "MySQL",
        "WebSocket",
        "Tailwind",
        "PHP",
        "Redux Saga",
      ],
      link: "https://nocola.co.id/",
    },
  ];

  return result;
});

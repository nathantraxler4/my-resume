const resume = {
    name: "Nathan Traxler",
    contact: {
      location: "San Francisco, CA",
      email: "nathan.traxler@gmail.com",
      phone: "+1 (630) 248-2091"
    },
    experience: [
      {
        company: "Apple",
        location: "Sunnyvale, CA",
        roles: [
          {
            title: "Technical Lead",
            dates: "April 2024 - Present",
            responsibilities: [
              "Lead an agile team responsible for Polaris: Deal Tracker, the entrypoint and hub for all Apple TV+ content through production greenlighting.",
              "Oversee and mentor 5 developers, guiding their work and performing code reviews.",
              "Drive projects focused on creating configurability of our application.",
              "Design and implement an admin tool and microservices for dynamic form layouts and notification configurations, eliminating developer involvement in routine updates and improving turnaround time."
            ]
          },
          {
            title: "Software Engineer",
            dates: "May 2023 - April 2024",
            responsibilities: [] // Same as above
          },
          {
            title: "ML Engineer",
            dates: "August 2022 - May 2023",
            responsibilities: [
              "Developed a Knowledge Graph linking Apple products to services, enabling multi-intent search results on apple.com.",
              "Fine-tuned a large language model (LLM) using Hugging Face for named entity recognition (NER) specific to Apple products and services.",
              "Explored LLMs for efficient extraction of KG triples to populate the Knowledge Graph."
            ]
          },
          {
            title: "Software Engineer Intern",
            dates: "June - September 2019 | June - September 2020",
            responsibilities: [
              "Leveraged MapKit, Indoor Mapping Data Format (IMDF), and React to display indoor maps of Apple data centers to onsite users.",
              "Integrated Apple TV+ content into Apple.com search."
            ]
          }
        ]
      }
    ],
    education: [
      {
        school: "Stanford University",
        degree: "Master of Science in Computer Science | Human Computer Interaction",
        dates: "2020-2021",
        gpa: 3.81
      },
      {
        school: "Stanford University",
        degree: "Bachelor of Science in Computer Science | Artificial Intelligence",
        dates: "2016-2020",
        gpa: 3.52
      }
    ],
    skills: [
        {
            category: "Programming Languages",
            items: ["Javascript", "Typescript", "Python", "Java"]
        },
        {
            category: "Machine Learning",
            items: ["LLMs", "Hugging Face", "NER"]
        },
        {
            category: "Frameworks/Tools",
            items: ["React", "VueJS", "MongoDB", "PostgreSQL", "ArangoDB", "Git", "Unix"]
        },
        {
            category: "Languages",
            items: ["Spanish - 5 years", "Japanese - 4 years"]
        }
    ]
  };

  export default resume;
  
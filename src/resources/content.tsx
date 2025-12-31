import { About, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Sargun",
  lastName: "Bhatti",
  name: `Sargun Singh Bhatti`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "bhatti@sargun.ca",
  location: "America/Toronto",
  languages: ["English", "Hindi", "Punjabi"],
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/TheFJcurve",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sargun-singh-bhatti/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/sargun.s.bhatti/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Creating elegant solutions to important problems.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Sargun, a Computer Science student at <Text as="span" size="xl" weight="strong">The University of Waterloo</Text>.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sargun is a student at The University of Waterloo, with a passion to create software that
        transforms lives of millions and helps people focus on what is important for them. He enjoys
        solving complex problems and building beautiful and elegant solutions. His work experiences
        has allowed him to deal with complex and stressful situations, while providing an output of
        high quality.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Paxos Health Inc.",
        timeframe: "September 2025 - December 2025",
        role: "Software Engineering Coop",
        achievements: [
          <>
            Managed AWS infrastructure and fullstack for an AI B2B SAAS Health startup, working with Kubernetes
            jobs and services. Created and managed AWS SQS, RDS and EKS services.
          </>,
          <>
            Used AI inferences to build strong appeal cases for clients filing for insurance claims. Assisted team in client
            meetings, code and infrastructure changes, product planning and improvements.
          </>,
          <>
            Maintained Python FastAPI project with NextJS frontend and PostgreSQL database, Helm for container
            management, using AWS Textract for text extraction and Vellum analysis chain for case analysis.
          </>,
        ],
        images: [],
      },
      {
        company: "Ford Motors Company of Canada",
        timeframe: "September 2024 - April 2025",
        role: "Software Developer Coop - Projection",
        achievements: [
          <>
            Managed phone connection, including: Bluetooth, Out of Band Connection, Wifi, CarPlay and Android Auto.
          </>,
          <>
            Upgrading the development environment from Soong to Gradle. Improved development time from over 5
            minutes to under 4 seconds. Increasing code coverage by writing new unit tests.
          </>,
          <>
            Implementing bug fixes and code quality improvement, including but not limited to quality refactoring,
            increased documentation and following newer Android code practices.
          </>,
          <>
            Discussing important future decisions with CarPlay Architectures. Pro-actively discussing ways to improve
            software quality by reaching out to other teams.
          </>,
          <>
            Worked on Android Open-Source Project (AOSP).
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Academics",
    institutions: [
      {
        name: "The University of Waterloo",
        description: <>Contender for Bachelors of Computer Science with Artificial Intelligence Specialization.</>,
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Software Development",
        description: (
          <>Languages and Frameworks to develop products and solutions.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Kotlin/Java",
            icon: "kotlin",
          },
          {
            name: "C++/C",
            icon: "c",
          },
          {
            name: "PostgreSQL",
            icon: "psql",
          },
          {
            name: "TypeScript/JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.JS",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "Developer Tools",
        description: (
          <>Tools and Software used to create and manage solutions.</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Postman",
            icon: "postman",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Git",
            icon: "git",
          },
        ],
        images: [],
      },
      {
        title: "Libraries & Packages",
        description: (
            <>Packages inside software used to solve a particular problem.</>
        ),
        tags: [
          {
            name: "Boto3",
            icon: "aws",
          },
          {
            name: "FastAPI",
            icon: "python",
          },
          {
            name: "Numpy",
            icon: "python",
          },
          {
            name: "Pandas",
            icon: "python",
          },
          {
            name: "Matplotlib",
            icon: "python",
          },
          {
            name: "PyTorch/TensorFlow",
            icon: "python",
          },
          {
            name: "Gradle",
            icon: "kotlin",
          },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects done by ${person.name}`,
};

const academics: Work = {
  path: "/academics",
  label: "Academics",
  title: `Academics – ${person.name}`,
  description: `Academic History of ${person.name}`,
};


const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-5.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, work, academics, gallery };

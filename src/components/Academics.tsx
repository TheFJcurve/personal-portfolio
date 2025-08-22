import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity } from "react-icons/fa";

const AcademicsUniIntro = () => {
  return (
    <Box display="flex" justifyContent="center" marginBottom={3}>
      <Card
        width={"100%"}
        borderRadius={20}
        borderColor={"styleColor.600"}
        variant={"outline"}
        transition={"all 0.3s ease-in-out"}
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <CardHeader>
          <Heading size={"md"}>The University of Waterloo</Heading>
          <Heading size={"sm"} marginTop={1}>
            Bachelors of Computer Science, Honours Co-Op
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>September 2022 - April 2027</Text>
          <Text>Artificial Intelligence Specialization</Text>
          <Text>Statistics Minor, Combinatorics and Optimization Minor</Text>
        </CardBody>
      </Card>
    </Box>
  );
};

interface Semister {
  semisterID: string;
  subjects: string[];
}

interface AcademicsTimelineProps {
  listOfSemisters: Semister[];
}

const AcademicsTimeline = ({ listOfSemisters }: AcademicsTimelineProps) => {
  const { colorMode } = useColorMode();
  return (
    <VerticalTimeline lineColor={"#C53030"}>
      {listOfSemisters.map((semister, index) => {
        return (
          <VerticalTimelineElement
            key={index}
            date={semister.semisterID}
            contentStyle={{
              background: colorMode == "dark" ? "black" : "white",
              borderWidth: 1,
              borderColor: "#C53030",
              borderRadius: 10,
            }}
            contentArrowStyle={{ borderRight: "10px solid #C53030" }}
            iconStyle={{
              background: colorMode == "dark" ? "black" : "white",
            }}
            icon={<FaUniversity />}
          >
            <SemisterSubjectBox subjects={semister.subjects} />
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

interface SemisterSubjectBoxProps {
  subjects: string[];
}

const SemisterSubjectBox = ({ subjects }: SemisterSubjectBoxProps) => {
  const courseColor: { [key: string]: string } = {
    CS: "blue",
    STAT: "teal",
    MATH: "purple",
    CO: "magenta",
    ENGL: "orange",
    BET: "skyblue",
    ECON: "green",
    PSYCH: "pink",
    COOP: "brown",
    ECE: "magenta",
    CHEM: "gray",
  };

  return (
    <Box>
      {subjects.map((subject, index) => {
        const subjectCode = subject.split(" ")[0];
        return (
          <Text
            key={index}
            margin={3}
            borderRadius={10}
            borderColor={courseColor[subjectCode]}
            borderWidth={2}
          >
            {subject}
          </Text>
        );
      })}
    </Box>
  );
};

const Academics = () => {
  const listOfSemisters: Semister[] = [
    {
      semisterID: "COOP 4: Paxos Health",
      subjects: ["ENGL 306A: Introduction to Linguistics"],
    },
    {
      semisterID: "3B",
      subjects: [
        "CS 341: Algorithms",
        "CS 350: Operating Systems",
        "CS 370: Numerical Computation",
        "CS 492: The Social Implications of Computing",
        "CLAS 104: Classical Mythology",
      ],
    },
    {
      semisterID: "COOP 3: Ford Motor Company of Canada Limited",
      subjects: ["STAT 341: Computational Statistics and Data Analysis"],
    },
    {
      semisterID: "COOP 2: Ford Motor Company of Canada Limited",
      subjects: ["CO 456: Introduction to Game Theory"],
    },
    {
      semisterID: "3A",
      subjects: [
        "CS 241: Foundations of Sequential Programs",
        "CS 240: Data Structures and Data Management",
        "ECE 457C: Reinforcement Learning",
        "STAT 337: Introduction to Biostatistics",
        "CHEM 120: General Chemistry 1",
      ],
    },
    {
      semisterID: "2B",
      subjects: [
        "CS 246: Object-Oriented Software Development",
        "STAT 333: Stochastic Processes",
        "STAT 332: Sampling and Experimental Design",
        "STAT 330: Mathematical Statistics",
        "ENGL 208B: Science Fiction",
      ],
    },
    {
      semisterID: "2A",
      subjects: [
        "CS 251: Computer Organization and Design",
        "CS 245: Logic and Computation",
        "CS 136L: Tools and Techniques for Software Development",
        "CO 250: Introduction to Optimization",
        "MATH 239: Introduction to Combinatorics",
        "MATH 237: Calculus 3 for Honours Mathematics",
      ],
    },
    {
      semisterID: "COOP 1: Sweat Free Apparel",
      subjects: ["STAT 231: Statistics"],
    },
    {
      semisterID: "1B",
      subjects: [
        "CS 136: Elementary Algorithm Design and Data Abstraction",
        "STAT 230: Probability",
        "MATH 138: Calculus 2 for Honours Mathematics",
        "MATH 136: Linear Algebra 1 for Honours Mathematics",
        "BET 100: Foundations of Entrepreneurial Practice",
        "ECON 102: Introduction to Macroeconomics",
      ],
    },
    {
      semisterID: "1A",
      subjects: [
        "CS 135: Designing Functional Programs",
        "MATH 137: Calculus 1 for Honours Mathematics",
        "MATH 135: Algebra for Honours Mathematics",
        "PSYCH 101: Introductory Psychology",
        "ENGL 109: Introduction to Academic Writing",
      ],
    },
  ];
  return (
    <Box>
      <Heading size={"md"}>Academic Journey</Heading>
      <Divider margin={2} />
      <AcademicsUniIntro />
      <AcademicsTimeline listOfSemisters={listOfSemisters} />
    </Box>
  );
};

export default Academics;

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

const AcademicsUniIntro = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Card
        margin={"20px"}
        borderRadius={"40px"}
        height={"200px"}
        width={"800px"}
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

interface AcadmicCourseCardProps {
  isOpen: boolean;
  fgColor: string;
  bgColor: string;
  subjects: string[];
}

const AcadmicCourseCard = ({
  isOpen,
  fgColor,
  bgColor,
  subjects,
}: AcadmicCourseCardProps) => {
  return (
    <Card
      width={isOpen ? "500px" : "0px"}
      height={"250px"}
      color={fgColor}
      backgroundColor={bgColor}
      borderRadius="40px"
      transition={"all 0.2s ease-in-out"}
    >
      <CardBody>
        {isOpen &&
          subjects.map((subject, index) => (
            <Box key={index} marginTop={2} marginBottom={2}>
              <Heading size={"sm"}>{subject}</Heading>
            </Box>
          ))}
      </CardBody>
    </Card>
  );
};

interface AcademicSemisterProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  fgColor: string;
  bgColor: string;
  semister: string;
}

const AcademicSemister = ({
  setIsOpen,
  isOpen,
  fgColor,
  bgColor,
  semister,
}: AcademicSemisterProps) => {
  return (
    <Box
      borderRadius={10}
      width={"70px"}
      height={"70px"}
      backgroundColor={bgColor}
      color={fgColor}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      onClick={() => setIsOpen(!isOpen)}
      cursor={"pointer"}
      _hover={{ transform: "scale(1.1)" }}
      transition={"all 0.3s ease-in-out"}
    >
      <Heading size={"md"}>{semister}</Heading>
    </Box>
  );
};

interface AcademicCardProps {
  orientation: "left" | "right";
  semister: string;
  subjects: string[];
}
const AcademicsCard = ({
  orientation,
  semister,
  subjects,
}: AcademicCardProps) => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(true);
  const fgColor = orientation === "left" ? "white" : "styleColor.600";
  const bgColor =
    colorMode === "dark"
      ? orientation === "left"
        ? "styleColor.600"
        : "black"
      : orientation === "left"
      ? "styleColor.600"
      : "white";

  return (
    <HStack
      gap={"200px"}
      display={"flex"}
      justifyContent={"center"}
      margin={10}
    >
      {orientation === "left" ? (
        <>
          <AcademicSemister
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            fgColor={fgColor}
            bgColor={bgColor}
            semister={semister}
          />
          <AcadmicCourseCard
            isOpen={isOpen}
            fgColor={fgColor}
            bgColor={bgColor}
            subjects={subjects}
          />
        </>
      ) : (
        <>
          <AcadmicCourseCard
            isOpen={isOpen}
            fgColor={fgColor}
            bgColor={bgColor}
            subjects={subjects}
          />
          <AcademicSemister
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            fgColor={fgColor}
            bgColor={bgColor}
            semister={semister}
          />
        </>
      )}
    </HStack>
  );
};

const Academics = () => {
  return (
    <>
      <Heading size={"md"}>Academic Journey</Heading>
      <Divider margin={2} />
      <AcademicsUniIntro />
      <AcademicsCard
        orientation={"right"}
        semister="2A"
        subjects={[
          "CS 251: Computer Organization and Design",
          "CS 245: Logic and Computation",
          "CS 136L: Tools and Techniques for Software Development",
          "CO 250: Introduction to Optimization",
          "MATH 239: Introduction to Combinatorics",
          "MATH 237: Calculus 3 for Honours Mathematics",
        ]}
      />
      <AcademicsCard
        orientation={"left"}
        semister="1C"
        subjects={["STAT 231: Statistics", "COOP 1"]}
      />
      <AcademicsCard
        orientation={"right"}
        semister="1B"
        subjects={[
          "CS 136: Elementary Algorithm Design and Data Abstraction",
          "CS 136L: Tools and Techniques for Software Development",
          "STAT 230: Probability",
          "MATH 138: Calculus 2 for Honours Mathematics",
          "MATH 136: Linear Algebra 1 for Honours Mathematics",
          "BET 100: Foundations of Entrepreneurial Practice",
          "ECON 102: Introduction to Macroeconomics",
        ]}
      />
      <AcademicsCard
        orientation={"left"}
        semister="1A"
        subjects={[
          "CS 135: Designing Functional Programs",
          "MATH 137: Calculus 1 for Honours Mathematics",
          "MATH 135: Algebra for Honours Mathematics",
          "PSYCH 101: Introductory Psychology",
          "ENGL 109: Introduction to Academic Writing",
        ]}
      />
    </>
  );
};

export default Academics;

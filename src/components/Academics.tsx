import { Divider, Heading } from "@chakra-ui/react";
import AcademicsCard from "./AcademicsCard";

const Academics = () => {
  return (
    <>
      <Heading size={"md"}>Academic Journey</Heading>
      <Divider margin={2} />
      <AcademicsCard
        bgColor={"black"}
        fgColor={"red.600"}
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
        bgColor={"red.600"}
        fgColor={"black"}
        orientation={"left"}
        semister="1C"
        subjects={["STAT 231: Statistics", "COOP 1"]}
      />
      <AcademicsCard
        bgColor={"black"}
        fgColor={"red.600"}
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
        bgColor={"red.600"}
        fgColor={"black"}
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

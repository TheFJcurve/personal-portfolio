import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  orientation: "left" | "right";
  semister: string;
  subjects: string[];
}

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

const AcademicsCard = ({ orientation, semister, subjects }: Props) => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(true);
  const fgColor =
    colorMode === "dark"
      ? orientation === "left"
        ? "black"
        : "red.600"
      : orientation === "left"
      ? "white"
      : "red.600";
  const bgColor =
    colorMode === "dark"
      ? orientation === "left"
        ? "red.600"
        : "black"
      : orientation === "left"
      ? "red.600"
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

export default AcademicsCard;

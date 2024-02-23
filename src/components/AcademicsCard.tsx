import { Box, Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  bgColor: string;
  fgColor: string;
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
            <Box
              key={index}
              margin={1}
              textAlign={{ row: "center", column: "left" }}
            >
              <Text>{subject}</Text>
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

const AcademicsCard = ({
  bgColor,
  fgColor,
  orientation,
  semister,
  subjects,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);
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

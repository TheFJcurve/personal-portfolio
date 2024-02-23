import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

const AcademicsUniIntro = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Card
        margin={"20px"}
        borderRadius={"40px"}
        height={"200px"}
        width={"800px"}
        borderColor={"red.600"}
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

export default AcademicsUniIntro;

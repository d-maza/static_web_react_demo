import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaRegEnvelope } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("rgb(231, 177, 10)")}
      color={useColorModeValue("gray.50", "gray.900")}
    >
      <Container
        as={Stack}
        maxW={"8xl"}
        py={1}
        spacing={8}
        justify={"center"}
        align={"center"}
      ></Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("rgb(231, 177, 10)")}
      >
        <Container
          boxSizing="content-box"
          as={Stack}
          maxW={"6xl"}
          py={1}
          direction={{ base: "column", md: "row" }}
          spacing={1}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text margin={{ mb: "20px" }}>
            © 2023 DiveCode™. www.codigoutil.com
          </Text>
          <Stack direction={"row"} spacing={1}>
            <SocialButton
              label={"Envelope"}
              href={
                "mailto:davidmazaborjabad@gmail.com?Subject=Más%20información%20sobre%20sus%20productos"
              }
            >
              <FaRegEnvelope />
            </SocialButton>
            <SocialButton label={"Github"} href={"https://github.com/d-maza"}>
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

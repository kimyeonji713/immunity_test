import { useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { useForm } from "react-hook-form";
import { PageTitle } from "../../components/PageTitle";
import { Box, Button, Container, Heading, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  useScrollTop();
  const { register, handleSubmit } = useForm();

  const [page, setPage] = useState(0);
  const [userName, setUserName] = useState("나");

  const mainImgUrl =
    "https://i.pinimg.com/564x/7e/f0/2a/7ef02aad7d4438c412fd9e2b39a5c66a.jpg";

  return (
    <>
      <PageTitle title={"Home"} />
      <Container
        maxW={"500px"}
        minxH={"100vh"}
        w={"100%"}
        h={"100vh"}
        mx={"auto"}
        bgColor={"#fff"}
        padding={"40px 10px"}
      >
        <Box marginTop={"40px"}>
          <Heading
            textAlign={"center"}
            fontSize={"55px"}
            fontWeight={"900"}
            color={"#008433"}
          >
            내 면역력은 <br />
            괜찮을까?
          </Heading>

          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"900"}
            color={"#333333"}
            marginTop={"20px"}
          >
            #면역력 테스트
          </Text>
          <Img w={"100%"} src={mainImgUrl} marginTop={"30px"} />
        </Box>

        <Link to={"/qna"}>
          <Button
            w={"150px"}
            h={"50px"}
            bgColor={"#008433"}
            color={"#fff"}
            marginLeft={"155px"}
            marginTop={"20px"}
            colorScheme="none"
          >
            테스트 시작!
          </Button>
        </Link>
      </Container>
    </>
  );
};

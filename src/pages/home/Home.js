import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { useForm } from "react-hook-form";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";

import {
  Box,
  Button,
  Container,
  Heading,
  Img,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { QnA } from "../QnA";

export const Home = () => {
  useScrollTop();

  const [page, setPage] = useState(0);

  console.log(page);

  const { colorMode } = useColorMode();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const mainImgUrl =
    "https://i.pinimg.com/736x/f4/3a/9c/f43a9cf020a2ebd2214dffea9e71ee63.jpg";

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"Home"} />
          {page === 0 ? (
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
                  color={"#008433"}
                >
                  내 면역력은 <br />
                  괜찮을까?
                </Heading>

                <Heading
                  textAlign={"center"}
                  fontSize={"30px"}
                  fontWeight={"900"}
                  color={"#333333"}
                  marginTop={"20px"}
                >
                  #면역력 테스트
                </Heading>
                <Img w={"95%"} src={mainImgUrl} marginTop={"20px"} />
              </Box>

              <Link to={"/qna"}>
                <Button
                  w={"150px"}
                  h={"50px"}
                  bgColor={"#008433"}
                  color={"#fff"}
                  marginLeft={"155px"}
                  marginTop={"40px"}
                  colorScheme="none"
                  cursor={"pointer"}
                >
                  테스트 시작!
                </Button>
              </Link>
            </Container>
          ) : (
            <QnA />
          )}
        </>
      )}
    </>
  );
};

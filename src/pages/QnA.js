import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Result } from "./Result";
import { Loading } from "../components/Loading";

export const QnA = () => {
  const [page, setPage] = useState(1);

  const questList = [
    {
      id: 0,
      q: ["아침에 일어나기 힘들다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 1,
      q: ["상처가 잘 낫지 않는다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 2,
      q: ["감기에 자주 걸리고, 잘 낫지 않는다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 3,
      q: ["스트레스가 자주 쌓인다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 4,
      q: ["입안이 헐거나 입 주위에 물집이 생긴다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 5,
      q: ["눈에 염증이 자주 생긴다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 6,
      q: ["쉽게 피곤하고 피로가 잘 풀리지 않는다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 7,
      q: ["체력이 급격히 떨어짐을 느낀다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 8,
      q: ["사소한 일에도 짜증이 난다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 9,
      q: ["다이어트를 자주한다."],
      a: [
        { text: "그렇다.", score: 1 },
        { text: "아니다.", score: 0 },
      ],
    },
    {
      id: 10,
      q: ["테스트가 모두 끝났어요!"],
      a: [{ text: "결과 보러 가기!", score: 0 }],
    },
  ];

  const [counts, setCounts] = useState({ score: 0 });

  const handleClick = (score, idx) => {
    let value = counts;
    value.score = value.score + score;

    setCounts(value);
    setPage(page + 1);

    if (idx + 1 === questList.length) {
      console.log("결과보기");
    }
  };

  console.log(counts);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container
            maxW={"500px"}
            minxH={"100vh"}
            w={"100%"}
            h={"100vh"}
            mx={"auto"}
            bgColor={"#fff"}
            padding={"40px 10px"}
          >
            {page <= questList.length ? (
              <Box padding={"40px 30px 0 30px"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  marginTop={"80px"}
                >
                  <Heading color={"#008433"} fontSize={"52px"} fontWeight={700}>
                    {`${page}`}
                  </Heading>
                  <Heading
                    fontSize={"16px"}
                    fontWeight={700}
                    color={"#999999"}
                    margin={"25px 0px 0px 15px"}
                  >
                    /
                  </Heading>
                  <Heading
                    fontSize={"16px"}
                    fontWeight={700}
                    color={"#999999"}
                    margin={"25px 0px 0px 15px"}
                  >
                    {`${questList.length}`}
                  </Heading>
                </Box>
                {questList?.map((data, idx) => (
                  <Box
                    key={data.id}
                    display={"flex"}
                    flexDirection={"column"}
                    style={{ display: page === idx + 1 ? "flex" : "none" }}
                  >
                    <Box margin={"40px 0"}>
                      <Heading
                        textAlign={"center"}
                        margin={"40px 0"}
                        fontSize={"30px"}
                        fontWeight={"700"}
                        color={"#333333"}
                      >
                        {data.q}
                      </Heading>
                    </Box>
                    <Box>
                      {data?.a?.map((aData, aidx) => (
                        <Button
                          key={aData.id}
                          padding={"30px"}
                          width={"100%"}
                          marginBottom={"20px"}
                          bgColor={"#319357"}
                          color={"#fff"}
                          onClick={() => handleClick(aData.score, aidx)}
                        >
                          {aData.text}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : (
              <Result counts={counts} />
            )}
          </Container>
        </>
      )}
    </>
  );
};

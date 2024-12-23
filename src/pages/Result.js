import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Img,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const resultBox = [
  {
    title: "내가 이 구역의 면역왕",
    img: "https://i.pinimg.com/736x/82/b7/0c/82b70c6f269abfbe49039d11572c50a2.jpg",
    tag1: "#내_몸은",
    tag2: "#내가_지킨다!",
    text1: "잘하고 있어요! 이대로 계속해요😆",
  },
  {
    title: "면역 관리 끝판왕!",
    img: "https://i.pinimg.com/736x/95/b7/f3/95b7f321f67232a36b25a66bf76579f7.jpg",
    tag1: "#이제는_영양제",
    tag2: "#운동이_필요한_시간",
    text1: "좋아요! 영양제나 운동을 더하면",
    text2: "완벽할 같아요😊",
  },
  {
    title: "면역 관리 끝판왕!",
    img: "https://i.pinimg.com/736x/9c/37/62/9c3762112f063a1a146950073da95254.jpg",
    tag1: "#무슨_소리_안들리세요?",
    tag2: "#몸이_보내는_SOS_소리",
    text1: "이런! 올바른 생활과 운동이 필요해요!",
    text2: "오늘 산책 어떠세요?😃",
  },
  {
    title: "바쁘다 바빠, 현대사회인!",
    img: "https://i.pinimg.com/736x/02/b8/50/02b850fcc321beaa87d8459daa6509de.jpg",
    tag1: "#멈..멈춰_!",
    tag2: "#건강_검진_필요해요!",
    text1: "면역력이 매우 떨어져있는 상태예요!",
    text2: "우리 몸이 위협 당하고 있어요!😫",
  },
];

export const Result = ({ counts }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [contents, setContents] = useState([]);

  const resultValue = () => {
    if (counts?.score <= 2) {
      setContents(resultBox[0]);
    } else if (counts?.score <= 4) {
      setContents(resultBox[1]);
    } else if (counts?.score <= 6) {
      setContents(resultBox[2]);
    } else if (counts?.score <= 10) {
      setContents(resultBox[3]);
    }
  };

  useEffect(() => {
    resultValue();
    setIsLoading(false);
  }, [contents]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <VStack padding={"20px"}>
            <Heading marginTop={"30px"} color={"#008433"} fontSize={"45px"}>
              {contents?.title}
            </Heading>
            <Img marginTop={"30px"} src={contents?.img} w={"100%"} />
            <Box marginTop={"30px"} color={"#008433"} textAlign={"center"}>
              <Heading fontSize={"25px"}> {contents?.tag1}</Heading>
              <Heading fontSize={"25px"}>{contents?.tag2}</Heading>
            </Box>
            <Box
              marginTop={"30px"}
              textAlign={"center"}
              padding={"0 70px"}
              fontSize={"16px"}
              fontWeight={"600"}
              color={"#777"}
            >
              <Text>
                {contents?.text1}
                <br />
                {contents?.text2}
              </Text>
            </Box>
            <Link to={"/"}>
              <Button
                w={"150px"}
                h={"50px"}
                bgColor={"#008433"}
                color={"#fff"}
                marginTop={"25px"}
                colorScheme="none"
                cursor={"pointer"}
              >
                다시해보기
              </Button>
            </Link>
          </VStack>
        </>
      )}
    </>
  );
};

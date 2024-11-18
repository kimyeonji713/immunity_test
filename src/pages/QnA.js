export const QnA = ({ page, setPage, colorMode, userName }) => {
  const questList = [
    {
      q: ["아침에 일어나기 힘들다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["상처가 잘 낫지 않는다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["감기에 자주 걸리고, 잘 낫지 않는다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["스트레스가 자주 쌓인다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["입안이 헐거나 입 주위에 물집이 생긴다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["눈에 염증이 자주 생긴다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["쉽게 피곤하고 피로가 잘 풀리지 않는다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["체력이 급격히 떨어짐을 느낀다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["사소한 일에도 짜증이 난다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["다이어트를 자주한다."],
      a: [
        { text: "그렇다.", score: 0 },
        { text: "아니다.", score: 1 },
      ],
    },
    {
      q: ["테스트가 모두 끝났어요!"],
      a: [{ text: "결과 보러 가기!", score: 0 }],
    },
  ];

  const [counts, setCounts] = useState({ score: 0 });
  return <div>QnA</div>;
};

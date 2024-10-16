import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>면역력 테스트 | {title}</title>
    </Helmet>
  );
};

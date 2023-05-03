import { BaseProps } from "types";

type IContentProps = {
  title: string;
} & BaseProps;

const Content = ({ children, title }: IContentProps) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Content;

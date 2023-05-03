import Content from "components/shared/Content";
import Counter from "features/ReactComponentLifeCycle/components/Counter";

const ComponentLifeCyclePage = () => {
  return (
    <>
      <Content title="Button counter">
        <p>This is basic implementation react state update</p>
      </Content>
      <Counter />
    </>
  );
};

export default ComponentLifeCyclePage;

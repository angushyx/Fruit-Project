import Card from "../UI/Card";
import { Warp } from "./Meal";
import { useSelector } from "react-redux";
import { Container, Section, Title } from "../UI/Public";

const Meal = () => {
  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;

  const mealList = commodityList.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
      category={item.category}
      amount={item.amount}
    />
  ));

  return (
    <>
      <Section higher>
        <Container widther>
          <Title>熱門餐點</Title>
          <Warp> {mealList}</Warp>
        </Container>
      </Section>
    </>
  );
};

export default Meal;

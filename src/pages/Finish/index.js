import purchaseCompletedImage from "../../assets/completedPurchase.svg";
import { Container, Content } from "./layout";
import { MessageCard } from "../../components/MessageCard";
const Finish = () => {
  return (
    <>
      <Container>
        <Content>
          <MessageCard
            title="Compra realizada com sucesso!"
            hasDivider={false}
            image={purchaseCompletedImage}
          ></MessageCard>
        </Content>
      </Container>
    </>
  );
};

export default Finish;

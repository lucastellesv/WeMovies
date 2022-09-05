import { Button } from "../Button";
import divider from "../../assets/divider.svg";
import { Title, Container } from "./styles";
import { useNavigate } from "react-router-dom";
export function MessageCard(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  };
  return (
    <Container>
      <Title>{props.title}</Title>
      <img src={props.image}></img>
      {props.hasDivider && <img src={divider}></img>}
      <Button clicked={back} btnText="Voltar"></Button>
    </Container>
  );
}

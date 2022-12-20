import { StyledDiv } from "./style";
import icon from "../../imgs/icon.png";

export function BurguerInfo() {
  return (
    <StyledDiv>
      <h1 className="heading1">
        Burguer <span className="heading2">Kenzie</span>
      </h1>
      <div>
        <figure>
          <img src={icon} alt="Register Icon" />
        </figure>
        <p className="body">
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes.
        </p>
      </div>
    </StyledDiv>
  );
}

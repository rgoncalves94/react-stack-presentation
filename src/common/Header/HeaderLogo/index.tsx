import { FunctionComponent } from "react";
import { DefaultLogoSquare, LogoContainer } from "./styles";

interface Props {
  alt?: string;
}

const HeaderLogo: FunctionComponent<Props> = ({ alt = "logo image" }) => {
  return (
    <LogoContainer>
      <div role="img" aria-label={alt}>
        <DefaultLogoSquare order="first" /> <DefaultLogoSquare order="second" />
      </div>
    </LogoContainer>
  );
};

export { HeaderLogo };

// Title component for display logo
import { LOGO_URL } from "../utils/constants";

const Title = () => (
    <a href="/">
      <img className="logo" src={LOGO_URL} alt="Food Fire Logo" />
    </a>
  );

  export default Title;
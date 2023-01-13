import { GoBell, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>
        <Button
          secondary
          rounded
          outline
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>See Deal</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Start
        </Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
    </div>
  );
}

export default ButtonPage;

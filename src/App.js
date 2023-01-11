import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
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
        <Button secondary rounded>
          Start
        </Button>
      </div>
      <div>
        <Button>Delete</Button>
      </div>
    </div>
  );
}

export default App;

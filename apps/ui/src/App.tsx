import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-bold">Hackathon Starter Project</h1>
      <div className="p-4">
        <Button
          onClick={() => {
            alert("Success");
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default App;

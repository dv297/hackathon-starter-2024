import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

function App() {
  const query = useQuery({
    queryKey: ["healthcheck"],
    queryFn: async () => {
      // All fetch calls made to the /api path will be directed to localhost:3000
      const response = await fetch("/api");
      const data = await response.json();
      return data;
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-bold text-2xl">Hackathon Starter Project</h1>
      {query?.data?.message && (
        <span className="font-semibold mt-4">
          API Health Check: {query?.data?.message}
        </span>
      )}
      <div className="p-4">
        <Button asChild>
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  );
}

export default App;

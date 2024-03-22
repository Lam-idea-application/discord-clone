import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  let state = true;
  return <div>
    <h1 className="text-indigo-500 text-2xl">Welcome to discord
    </h1>
    <Button className={cn("bg-red-500", state && "bg-indigo-500")}>
      Click me
    </Button>
  </div>;
}

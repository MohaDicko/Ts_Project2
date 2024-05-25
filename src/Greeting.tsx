import React from "react";

// Define props type for the Greeting component
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

import React from "react";
import Card from "./Card/Card";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-8">Car Expo 🚗</h1>
      <div className="flex gap-10 w-full justify-center items-center min-h-screen flex-wrap p-8">
        <Card
          title="Porsche 911"
          image="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg"
          description="A legendary sports car known for its performance and timeless design."
          price="$120,000"
        />

        <Card
          title="Ferrari F8 Tributo"
          image="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg"
          description="An exotic supercar delivering thrilling speed and precision handling."
          price="$280,000"
        />

        <Card
          title="Chevrolet Camaro"
          image="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
          description="A muscular coupe with aggressive styling and powerful performance."
          price="$45,000"
        />

        <Card
          title="Nissan GT-R"
          image="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
          description="A high-performance machine famous for its speed and technology."
          price="$115,000"
        />

        <Card
          title="Toyota Supra"
          image="https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg"
          description="A sporty coupe that blends power, agility, and iconic heritage."
          price="$55,000"
        />

        <Card
          title="McLaren 720S"
          image="https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg"
          description="A lightweight supercar engineered for exceptional performance."
          price="$310,000"
        />

        <Card
          title="Rolls-Royce Phantom"
          image="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
          description="The ultimate luxury sedan offering unmatched comfort and prestige."
          price="$460,000"
        />

        <Card
          title="Range Rover Sport"
          image="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
          description="A premium SUV combining luxury, power, and off-road capability."
          price="$95,000"
        />

        <Card
          title="Bugatti Chiron"
          image="https://images.pexels.com/photos/12351384/pexels-photo-12351384.jpeg"
          description="One of the fastest hypercars in the world with extraordinary engineering."
          price="$3,000,000"
        />

        <Card
          title="Aston Martin DB11"
          image="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
          description="A grand tourer that balances luxury, elegance, and performance."
          price="$220,000"
        />
      </div>
    </>
  );
}

export default App;

import FloatingButton from "@/components/floatingButton";
import Card from "@/components/card";

const Page = () => {
  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <FloatingButton />
    </main>
  );
};

export default Page;

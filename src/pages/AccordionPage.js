import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "asda",
      label: "React?",
      content: "You can use React",
    },
    {
      id: "sfdsf",
      label: "Javascript?",
      content: "You can use Javascript",
    },
    {
      id: "sdsg",
      label: "CSS?",
      content: "You can use CSS",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;

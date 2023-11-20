import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({data}) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);  /**state has been lifted to the closest parent as it's there we need to know which one is open */
  
  return <div className="accordion">{data.map( (el, i) => (
  <AccordionItem 
    currentlyOpen= {currentlyOpen} 
    onOpen={setCurrentlyOpen} 
    title={el.title} 
    num={i}>
    {el.text}
  </AccordionItem>
    ))}</div>;
}

const AccordionItem = ({num, title, currentlyOpen, onOpen, children}) => {
  const isOpen = num === currentlyOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num)
  };

  return <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
    <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
    <p className="title">{title}</p>
    <p className="icon">{isOpen ? "-" : "+"}</p>
    {isOpen && <div className="content-box">{children}</div>}
    
  </div>
};
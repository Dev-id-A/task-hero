import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"

function NormalTaskAccordion() {
  return (
    <Accordion type="single" collapsible>
        <AccordionItem value="normal-tasks">
            <AccordionTrigger>Prueba</AccordionTrigger>
            <AccordionContent>Test</AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}

export default NormalTaskAccordion
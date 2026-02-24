// Material
import { Button } from "@mui/material";

// Xml-js
import { js2xml } from "xml-js";

// Types
import type { CustomerListQuery } from "../../types/customer";

export function exportCustomersXML(data: CustomerListQuery[]) {
  const xmlObj = {
    Customers: {
      Customer: data.map(cus => ({
        Name: { _text: cus.name },
        Address: { _text: cus.address },
        Email: { _text: cus.email },
        Phone: { _text: cus.phone },
        Iban: { _text: cus.iban },
        CustomerCategory: {
          Code: { _text: cus.customerCategory?.code ?? "" },
          Description: { _text: cus.customerCategory?.description ?? "" },
        },
      })),
    },
  };

  const xml = js2xml(xmlObj, { compact: true, spaces: 2 });   // Converte l'oggetto JS in stringa XML formattata

  const blob = new Blob([xml], { type: "application/xml" });  // Crea un file XML in memoria
  const url = URL.createObjectURL(blob);                      // Genera un URL temporaneo per il file

  const link = document.createElement("a");                   // Crea un link temporaneo
  link.href = url;                                            // Collega il file al link
  link.download = "customers.xml";                            // Imposta il nome del file
  document.body.appendChild(link);                            // Aggiunge il link al DOM
  link.click();                                               // Avvia il download
  document.body.removeChild(link);                            // Rimuove il link dal DOM
}

interface CustomerButtonExportProps {
  data: CustomerListQuery[];
}

export default function CustomerButtonExport({ data }: CustomerButtonExportProps) {
  return (
    <Button
      variant="contained"
      onClick={() => exportCustomersXML(data)}
    >
      Export XML
    </Button>
  );
}
// Xml-js
import { js2xml } from "xml-js";

// Types
import type { SupplierListQuery } from "../types/supplier";

export function exportSuppliersXML(data: SupplierListQuery[]) {
  const xmlObj = {
    Suppliers: {
      Supplier: data.map(sup => ({
        Name: { _text: sup.name },
        Address: { _text: sup.address },
        Email: { _text: sup.email },
        Phone: { _text: sup.phone },
      })),
    },
  };

  const xml = js2xml(xmlObj, { compact: true, spaces: 2 });   // Converte l'oggetto JS in stringa XML formattata

  const blob = new Blob([xml], { type: "application/xml" });  // Crea un file XML in memoria
  const url = URL.createObjectURL(blob);                      // Genera un URL temporaneo per il file

  const link = document.createElement("a");                   // Crea un link temporaneo
  link.href = url;                                            // Collega il file al link
  link.download = "suppliers.xml";                            // Imposta il nome del file
  document.body.appendChild(link);                            // Aggiunge il link al DOM
  link.click();                                               // Avvia il download
  document.body.removeChild(link);                            // Rimuove il link dal DOM
}
import { CRDTDocument } from "./document";
import { createInsert } from "./operations";

const doc = new CRDTDocument();

const h = createInsert("ROOT", "H");
doc.applyInsert(h);


const e = createInsert(h.charId, "e");
doc.applyInsert(e);


const l = createInsert(e.charId, "l");
doc.applyInsert(l);

console.log(doc.chars);

console.log(doc.toText());

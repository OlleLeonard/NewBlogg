import { createContext, useState } from "react";
import get from "../Pictures/get.jpg";
import eyes from "../Pictures/eyes.jpg";
import korre from "../Pictures/korre.jpg";
import blobb from "../Pictures/blobb.jpg";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [post, setProducts] = useState([
    {
      id: 1,
      name: "Bob",
      picture: get,
      BloggTitle: "För kort Tax",
      BloggText:
        "Min hund heter Ladan och är en 2 årig brun Tax. Jag tycker att min tax dock är lite för kort. Kan jag förlänga den på något sätt?",
      comments: [
        {
          BobComments1: "Mata den med linjaler",
          BobComments2:
            "Taxar kan bli upp mot 80cm långa. Hur lång är din Tax?",
          BobComments3: "Du ska INTE mata den linjaler!!!",
        },
      ],
    },
    {
      id: 2,
      name: "Charlie",
      picture: eyes,
      BloggTitle: "Kräsen Kanin",
      BloggText:
        "  Min kanin är så kräsen i maten och äter bara Mâche sallad. Hur kan jag få honom att äta vanlig sallad?",
      comments: [
        {
          CharlieComments1: "Min sköldpadda harald äter också bara sallad",
          CharlieComments2:
            "Man ska faktiskt inte ge sallad till kaniner! Ge dem morötter i stället",
          CharlieComments3: "Äää Kaniner kan äta allt!",
        },
      ],
    },
    {
      id: 3,
      name: "Maria",
      picture: korre,
      BloggTitle: "BananKatt",
      BloggText:
        "   Min katt älskar att äta banan. Äter era katter något konstigt?",
      comments: [
        {
          MariaComments1: "Min katt äter plast!",
          MariaComments2: "Kurre äter det mesta utom gurka",
        },
      ],
    },
    {
      id: 4,
      name: "Fred",
      picture: blobb,
      BloggTitle: "HÄST",
      BloggText:
        " Jag älskar hästar och skulle vilja öppna en ny kattegori där vi bara pratar häst. Vad tycker ni?",
      comments: [
        {
          FredComments1: "Häst är bäst",
          FredComments2: "Jag skulle hellre se en forumdel om getter",
          FredComments3:
            "Äää du får väll skriva i Övrigt som alla andra som vill parata havremopeder!",
        },
      ],
    },
  ]);

  return (
    <ProductContext.Provider value={{ post }}>
      {props.children}
    </ProductContext.Provider>
  );
};

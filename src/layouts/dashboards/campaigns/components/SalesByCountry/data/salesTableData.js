import sent from "assets/images/status/sent.png";
import draft from "assets/images/status/draft.png";
import trash from "assets/images/icons/dl.png";
import copy from "assets/images/icons/dd.png";
import uniqueClicks from "assets/images/icons/clicks.svg";
import uniqueOpens from "assets/images/icons/opens.svg"; 


const salesTableData = [
  {
    status: "campaign",
    paragraph: "",
    recipients: "recipients", 
    sent: "sent",
    uniqueOpen: "Unique Opens",
    uniqueClicks: "Unique Clicks ",

    dublicate: "copy",
    delete:"delete"
  },
  {
    status: [draft],
    paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
    recipients: "-",
    sent: "-",
    uniqueOpen: "-",
    uniqueClicks: "-",

    dublicate: [copy],
    delete:[trash]
  },
  {
    status: [sent],
    paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
    recipients: "195,549",
    sent: "3weeks ago",
    uniqueOpen: [uniqueOpens, "2,113 opened"],
    uniqueClicks: [uniqueClicks, "88 clicks"],

    dublicate: [copy],
    delete:[trash]
  },
  {
    status: [draft],
    paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
    recipients: "-",
    sent: "-",
    uniqueOpen: "-",
    uniqueClicks: "-",

    dublicate: [copy],
    delete:[trash]
  },
  {
    status: [draft],
    paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
    recipients: "-",
    sent: "-",
    uniqueOpen: "-",
    uniqueClicks: "-",

    dublicate: [copy],
    delete:[trash]
  },
  {
    status: [sent],
    paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
    recipients: "195,549",
    sent: "3weeks ago",
    uniqueOpen: [uniqueOpens, "2,113 opened"] ,
    uniqueClicks: [uniqueClicks, "88 clicks"],
  

    dublicate: [copy],
    delete:[trash]
  },
  {
    status: [sent],
    paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
    recipients: "195,549",
    sent: "3weeks ago",
    uniqueOpen: [uniqueOpens, "2,113 opened"],
    uniqueClicks: [uniqueClicks, "88 clicks"],
  

    dublicate: [copy],
    delete:[trash]
  },
];

export default salesTableData;

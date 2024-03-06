import draft from "assets/images/status/draft.png";
import trash from "assets/images/icons/dl.png";
import Icon from "@mui/material/Icon";
import zero from "assets/images/icons/zero.svg";
import greenZero from  "assets/images/icons/Green_zero.svg";
import zeroPercent from "assets/images/icons/zero_percent.svg";
import ActiveCode from "assets/images/icons/758.svg";
import Segs32 from "assets/images/icons/32.svg"


const subscribersTableData = [
  {
    ID: "ID",
    List: "list",
    Status: "Active", 
    Segs: "Segs",
    ARs: "ARs",
    Unsubscribed: "Unsubscribed ",
    Bounced: "Bounced",


    hide: "Hide",
    edit: "Edit",
    delete:"delete"
  },
  {
    ID: [draft],
    List: "OPENERS_2024",
    Status: [greenZero], 
    Segs: [zero],
    ARs: [zero],
    Unsubscribed: [zeroPercent, "0"],
    Bounced:[zeroPercent, "0"],


    hide: "Hide",
    edit: [Icon],
    delete: [trash],
  },
  
  {
    ID: [draft],
    List: "Innonde Master List",
    Status: [ActiveCode], 
    Segs: [Segs32],
    ARs: [zero],
    Unsubscribed:  [zeroPercent, "110"],
    Bounced:  [zeroPercent, "0"],

    
    hide: "Hide",
    edit: [Icon],
    delete: [trash],
  }
];

export default subscribersTableData;

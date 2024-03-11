import hide from "assets/images/icons/eye-slash.svg";
import edit from "assets/images/icons/edit.svg";
import trash from "assets/images/icons/trash.svg";


const rows = [
  {
    ID: "H6Xqt",
    List: "OPENERS_2024",
    Active: 0,
    Segs: 0,
    ARs: 24,
    Unsubscribed:[ "0%"],
    Bounced: 90,
    Hide: [<img key={hide} src={hide} alt="hide"/>],
    Edit: [<img key={edit} src={edit} alt="edit"/>],
    Delete: [<img key={trash} src={trash} alt="trash"/>],
  },
  {
    ID: "H6Xqt1",
    List: "OPENERS_2024",
    Active: 0,
    Segs: 0,
    ARs: 24,
    Unsubscribed: ["0%"],
    Bounced: 90,
    Hide: [<img key={hide} src={hide} alt="hide"/>],
    Edit: [<img key={edit} src={edit} alt="edit"/>],
    Delete:[<img key={trash} src={trash} alt="trash"/>],
  },
];

export default rows;

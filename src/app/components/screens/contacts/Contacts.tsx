import Data from "./DataContact";
import { ContactCard } from "./contactcard/ContactCard";
import { locationD } from "../location/location";

import style from "./Contacts.module.scss";

export const Contacts = () => {
  const contactCard = Data.map((el) => {
    return <ContactCard {...el} />;
  });

  return (
    <div className={style.wapc}>
      <div className={style.contw}>{contactCard}</div>
    </div>
  );
};

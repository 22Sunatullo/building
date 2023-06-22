import Data from "./DataContact";
import { ContactCard } from "./contactcard/ContactCard";
import { LocationD } from "../location/location";

import style from "./Contacts.module.scss";

export const Contacts = () => {
  const contactCard = Data.map((el) => {
    return <ContactCard key={el.id} {...el} />;
  });

  return (
    <div className={style.wapc}>
      <div className={style.contw}>{contactCard}</div>
      <div className={style.location}>
      <LocationD/>
      </div>
    </div>
  );
};

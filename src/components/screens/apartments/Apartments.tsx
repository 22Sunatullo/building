import { FC } from "react";

import styles from "./Apartments.module.scss";
import ApartmentButton from "../apartmentbutton/ApartmentButton";
import { Wrapper } from "../wraper/Wraper";

const Apartments: FC = () => {
  return (
    <div className={styles.apart}>
      <Wrapper>
        <div>
          <ApartmentButton />
        </div>
      </Wrapper>
    </div>
  );
};

export default Apartments;

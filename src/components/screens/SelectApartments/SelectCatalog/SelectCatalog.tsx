import { SelectCard } from '../SelectCard/SelectCard';
import style from './SelectCatalog.module.scss'

export const SelectCatalog= () => {
  return (
    <div className={style.Catalog}>
      <SelectCard/>
      <SelectCard/>
      <SelectCard/>
      <SelectCard/>
    </div>
  );
};

import { SelectCard } from '../SelectCard/SelectCard';
import { SelectData } from '../SelectData';
import style from './SelectCatalog.module.scss'

export const SelectCatalog= () => {
  return (
    <div className={style.Catalog}>
      {
        SelectData.map(el =>  <SelectCard key={el.id} {...el}/>)
      }
    </div>
  );
};

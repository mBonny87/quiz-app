import { removeDuplicatesByProperty } from '../../../utils/utils';
import { Checkbox, CheckboxProps } from '../../atoms/checkbox';

type FilterProps = {
  list: CheckboxProps[];
};

export const Filter: React.FC<FilterProps> = ({ list }) => {
  const renderedFilters = removeDuplicatesByProperty(list, 'label').map(
    (item: CheckboxProps, index: number) => (
      <Checkbox
        key={index}
        label={item.label}
        onChange={item.onChange}
      ></Checkbox>
    )
  );
  return <>{renderedFilters}</>;
};

import { FC, ChangeEvent, useState, ReactElement } from 'react';
import { SelectInput } from 'vcc-ui';
import { ICarLiting } from '../../types/Listing';

interface IFilterProps {
  carListings: ICarLiting[];
  filterCarListingsByBodyType: (bodyType: string) => void;
  loading: boolean;
}

const Filter: FC<IFilterProps> = ({
  carListings,
  filterCarListingsByBodyType,
  loading,
}): ReactElement => {
  const [filterBodyTypeValue, setFilterBodyTypeValue] = useState('');

  const filterOptions = carListings
    .filter(
      (carListing, index, self) =>
        index === self.findIndex((car) => car.bodyType === carListing.bodyType)
    )
    .map((filteredCarListings) => filteredCarListings.bodyType);

  const handleFilterBodyTypeValueChange = (
    evt: ChangeEvent<HTMLSelectElement>
  ) => {
    filterCarListingsByBodyType(evt.target.value);
    setFilterBodyTypeValue(evt.target.value);
  };

  return (
    <SelectInput
      value={filterBodyTypeValue}
      onChange={handleFilterBodyTypeValueChange}
      loading={loading}
    >
      {filterOptions.map((bodyType) => (
        <option value={bodyType} key={bodyType}>
          {bodyType}
        </option>
      ))}
    </SelectInput>
  );
};

export default Filter;

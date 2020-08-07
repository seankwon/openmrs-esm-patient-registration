import React from 'react';
import { TextInput } from '../basic-input/text-input.component';
import styles from './../input.css';

interface AddressInputProps {
  address1Name: string;
  address2Name: string;
  cityVillageName: string;
  stateProvinceName: string;
  countryName: string;
  postalCodeName: string;
}

export const AddressInput: React.FC<AddressInputProps> = ({
  address1Name,
  address2Name,
  cityVillageName,
  stateProvinceName,
  countryName,
  postalCodeName,
}) => {
  return (
    <main>
      <section className={styles.fieldRow}>
        <TextInput label="Adress 1" placeholder="First line of address" name={address1Name} showLabel={true} />
        <TextInput label="Address 2" placeholder="Second line of address" name={address2Name} showLabel={true} />
      </section>
      <section className={styles.fieldRow}>
        <TextInput label="City/Village" placeholder="City/Village" name={cityVillageName} showLabel={true} />
        <TextInput label="State/Province" placeholder="State/province" name={stateProvinceName} showLabel={true} />
      </section>
      <section className={styles.fieldRow}>
        <TextInput label="Country" placeholder="Country" name={countryName} showLabel={true} />
        <TextInput label="Postal Code" placeholder="Postal code" name={postalCodeName} showLabel={true} />
      </section>
    </main>
  );
};

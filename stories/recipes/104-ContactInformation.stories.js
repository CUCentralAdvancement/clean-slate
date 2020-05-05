import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Divider, Text, Grid, Heading } from 'theme-ui';
import Radio from '../../src/components/Radio';
import BaseButton from '../../src/components/BaseButton';
import TextInput from '../../src/components/TextInput';
import SelectInput from '../../src/components/SelectInput';
import Checkbox from '../../src/components/Checkbox';

export default {
  title: 'Recipes/Contact Information',
};

export const ContactInformation = () => {
  const [title, setTitle] = useState('');
  const [addressType, setAddressType] = useState('');
  const [includeSpouse, setIncludeSpouse] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm();

  const addressTypeOptions = [
    { value: 'home', label: 'Home' },
    { value: 'work', label: 'Work' },
    { value: 'other', label: 'Other' },
  ];

  const titleOptions = [
    { value: 'mr', label: 'Mr.' },
    { value: 'mrs', label: 'Mrs.' },
    { value: 'other', label: "Don't put me in a box!" },
  ];

  function submitHandler(data) {
    alert(JSON.stringify(data));
  }

  useEffect(() => {
    register({ name: 'individual-company' });
    register({ name: 'companyName' });
    register({ name: 'title' });
    register({ name: 'firstName' });
    register({ name: 'lastName' });
    register({ name: 'addressType' });
    register({ name: 'includeSpouse' });
    register({ name: 'spouseName' });
  }, [register]);

  const type = watch('individual-company');

  return (
    <Box sx={{ bg: '#EBEDED', maxWidth: 960, mx: 'auto', p: 4 }}>
      <Heading pb="3">Contact Information</Heading>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid gap={3}>
          <Box>
            <Text>I am giving as an:</Text>
            <Text variant="italic">To list a spouse or partner on this gift, please use the comments box below.</Text>
          </Box>
          <Box>
            <Grid gap={2} columns={[2, '1fr 4fr']} sx={{ mb: 2 }}>
              <Radio
                name="individual-company"
                label="Individual"
                value="individual"
                defaultChecked={true}
                onChange={(e) => setValue('individual-company', e.target.value)}
                sx={{ color: '#fff', bg: '#fff' }}
              />
              <Radio
                name="individual-company"
                label="Company/Organization"
                value="company"
                onChange={(e) => setValue('individual-company', e.target.value)}
                sx={{ color: '#fff', bg: '#fff' }}
              />
            </Grid>

            {type === 'company' && (
              <TextInput
                name="companyName"
                placeholder="Name of Organization or Company"
                onChange={(e) => setValue('companyName', e.target.value)}
              />
            )}
          </Box>
          <Grid gap={2} columns={[1, 2, 3]}>
            <Box sx={{ mt: 1 }}>
              <SelectInput
                name="title"
                label="Title"
                value={title}
                options={titleOptions}
                onChange={(selectedOption) => {
                  setValue('title', selectedOption.value);
                  setTitle(selectedOption);
                }}
              />
            </Box>
            <TextInput name="firstName" label="First Name" onChange={(e) => setValue('firstName', e.target.value)} />
            <TextInput name="lastName" label="Last Name" onChange={(e) => setValue('lastName', e.target.value)} />
          </Grid>
          <SelectInput
            name="addressType"
            label="Address Type"
            value={addressType}
            options={addressTypeOptions}
            onChange={(selectedOption) => {
              setValue('addressType', selectedOption.value);
              setAddressType(selectedOption);
            }}
          />
          <Divider />
          <Checkbox
            name="includeSpouse"
            label="Include Spouse/Partner in your gift?"
            checked={includeSpouse}
            onChange={(e) => {
              setValue('includeSpouse', !includeSpouse);
              setIncludeSpouse(!includeSpouse);
            }}
            sx={{ color: '#fff', bg: '#fff' }}
          />
          {includeSpouse && (
            <TextInput
              name="spouseName"
              placeholder="Full name of spouse/partner"
              onChange={(e) => setValue('spouseName', e.target.value)}
            />
          )}
          <BaseButton variant="button.secondary" type="submit" sx={{ maxWidth: ['100%', '25%'] }}>
            Continue to next step
          </BaseButton>
        </Grid>
      </form>
    </Box>
  );
};

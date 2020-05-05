import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Flex, Text, Grid, Heading } from 'theme-ui';
import Radio from '../../src/components/Radio';
import BaseButton from '../../src/components/BaseButton';
import TextInput from '../../src/components/TextInput';
import SelectInput from '../../src/components/SelectInput';

export default {
  title: 'Recipes/Contact Information',
};

export const ContactInformation = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      'individual-company': 'true',
    },
  });

  function submitHandler(data) {
    alert(JSON.stringify(data));
  }

  React.useEffect(() => {
    register({ name: 'individual-company' });
    register({ name: 'companyName' });
  }, [register]);

  const type = watch('individual-company');

  const handleSelect = (e, name) => {
    setValue(name, e.target.value);
    console.log(name, e.target.value);
  };

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
                onChange={(e) => handleSelect(e, 'individual-company')}
              />

              <Radio
                name="individual-company"
                label="Company/Organization"
                value="company"
                onChange={(e) => handleSelect(e, 'individual-company')}
              />
            </Grid>

            {type === 'company' && (
              <TextInput
                name="companyName"
                placeholder="Name of Organization or Company"
                onChange={(e) => handleSelect(e, 'companyName')}
              />
            )}
          </Box>
          <Grid gap={2} columns={[1, 2, 3]} sx={{}}>
            <SelectInput name="title" label="Title" onChange={(e) => handleSelect(e, 'campus')}>
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="other">Don't put me in a box!</option>
            </SelectInput>
            <TextInput name="firstName" label="First Name" onChange={(e) => setValue('firstName', e.target.value)} />
            <TextInput name="lastName" label="Last Name" onChange={(e) => setValue('lastName', e.target.value)} />
          </Grid>
          <BaseButton variant="button.secondary" type="submit" sx={{ maxWidth: ['100%', '25%'] }}>
            Continue to next step
          </BaseButton>
        </Grid>
      </form>
    </Box>
  );
};

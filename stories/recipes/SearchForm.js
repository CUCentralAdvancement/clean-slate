import React, { useEffect, useState } from 'react';
import { Flex, Box } from 'theme-ui';
import { useForm } from 'react-hook-form';

import TextInput from '../../src/components/TextInput';
import BaseButton from '../../src/components/BaseButton';
import SelectInput from '../../src/components/SelectInput';

export default function SearchForm({ submitHandler, resetHandler }) {
  const { register, handleSubmit, setValue } = useForm();
  const [campus, setCampus] = useState({ value: 'All', label: 'All Campuses' });
  const [interest, setInterest] = useState({ value: 'All', label: 'All Campuses' });
  const [fundType, setFundType] = useState({ value: 'All', label: 'All Campuses' });

  useEffect(() => {
    register({ name: 'campus' });
    register({ name: 'interest' });
    register({ name: 'fundType' });
    register({ name: 'search' });
  }, [register]);

  const campusOptions = [
    { value: 'All', label: 'All Campuses' },
    { value: '1046', label: 'CU Anschutz' },
    { value: '904', label: 'CU Boulder' },
    { value: '1100', label: 'CU Denver' },
    { value: '1134', label: 'UCCS' },
    { value: '1150', label: 'CU System' },
  ];

  const interestsOptions = [
    { value: 'All', label: 'All Interests' },
    { value: '950', label: 'Alumni Programs' },
    { value: '917', label: 'Arts &amp; Culture' },
    { value: '953', label: 'Athletics &amp; Recreation' },
    { value: '958', label: 'Community &amp; Society' },
    { value: '983', label: 'Enterprise &amp; Entrepreneurship' },
    { value: '971', label: 'Health &amp; Wellness' },
    { value: '907', label: 'Scholarships &amp; Student Success' },
    { value: '910', label: 'Science, Research &amp; Innovation' },
  ];

  const fundTypeOptions = [
    { value: 'All', label: 'Fund Type' },
    { value: '908', label: 'Academic Program Funds' },
    { value: '1043', label: 'Endowed Funds' },
    { value: '946', label: 'Memorial Funds' },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Flex sx={{ mx: -2, mb: [0, 3, 3], flexDirection: ['column', 'row', 'row'] }}>
          <Box sx={{ width: '100%', px: 2, pt: 2 }}>
            <SelectInput
              name="campus"
              value={campus}
              options={campusOptions}
              onChange={(selectedOption) => {
                console.log(selectedOption);
                setValue('campus', selectedOption.value);
                setCampus(selectedOption);
              }}
            />
          </Box>
          <Box sx={{ width: '100%', px: 2, pt: 2 }}>
            <SelectInput
              name="interest"
              value={interest}
              options={interestsOptions}
              onChange={(selectedOption) => {
                setValue('interest', selectedOption.value);
                setInterest(selectedOption);
              }}
            />
          </Box>
          <Box sx={{ width: '100%', px: 2, pt: 2 }}>
            <SelectInput
              name="fundType"
              value={fundType}
              options={fundTypeOptions}
              onChange={(selectedOption) => {
                setValue('fundType', selectedOption.value);
                setFundType(selectedOption);
              }}
            />
          </Box>
        </Flex>
        <Flex sx={{ mx: -2, mb: 3, flexDirection: ['column', 'row', 'row'] }}>
          <Box sx={{ width: ['100%', '70%'], px: 2, pt: [2, 0, 0] }}>
            <TextInput
              autofocus="true"
              name="search"
              type="text"
              onChange={(e) => setValue('search', e.target.value)}
            />
          </Box>
          <Box sx={{ width: ['100%', '30%'], px: 2, pt: [2, 0, 0] }}>
            <BaseButton variant="button.secondary" type="submit" mr={2}>
              Search
            </BaseButton>
            <BaseButton
              variant="button.secondary"
              type="reset"
              onClick={() => {
                resetHandler();
              }}
            >
              Reset
            </BaseButton>
          </Box>
        </Flex>
      </form>
    </>
  );
}

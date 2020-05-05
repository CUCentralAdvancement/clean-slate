import React from 'react';
import { Flex, Box } from 'theme-ui';
import { useForm } from 'react-hook-form';

import TextInput from '../../src/components/TextInput';
import BaseButton from '../../src/components/BaseButton';
import SelectInput from '../../src/components/SelectInput';

export default function SearchForm({ submitHandler, resetHandler }) {
  const { register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    register({ name: 'campus' });
    register({ name: 'interest' });
    register({ name: 'fundType' });
    register({ name: 'search' });
  }, [register]);

  const handleSelect = (e, name) => {
    setValue(name, e.target.value);
  };

  const handleTextInput = (e, name) => {
    setValue(name, e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Flex sx={{ mx: -2, mb: [0, 3, 3], flexDirection: ['column', 'row', 'row'] }}>
          <Box sx={{ width: '100%', px: 2, pt: 2 }}>
            <SelectInput name="campus" onChange={(e) => handleSelect(e, 'campus')}>
              <option value="All">All Campuses</option>
              <option value="1046">CU Anschutz</option>
              <option value="904">CU Boulder</option>
              <option value="1100">CU Denver</option>
              <option value="1134">UCCS</option>
              <option value="1150">CU System</option>
            </SelectInput>
          </Box>
          <Box sx={{ width: '100%', px: 2, pt: 2 }}>
            <SelectInput name="interest" onChange={(e) => handleSelect(e, 'interest')}>
              <option value="All">All Interests</option>
              <option value="950">Alumni Programs</option>
              <option value="917">Arts &amp; Culture</option>
              <option value="953">Athletics &amp; Recreation</option>
              <option value="958">Community &amp; Society</option>
              <option value="983">Enterprise &amp; Entrepreneurship</option>
              <option value="971">Health &amp; Wellness</option>
              <option value="907">Scholarships &amp; Student Success</option>
              <option value="910">Science, Research &amp; Innovation</option>
            </SelectInput>
          </Box>
          <Box sx={{ width: '100%', px: 2, pt: 2 }}>
            <SelectInput name="fundType" onChange={(e) => handleSelect(e, 'fundType')}>
              <option value="All">Fund Type</option>
              <option value="908">Academic Program Funds</option>
              <option value="1043">Endowed Funds</option>
              <option value="946">Memorial Funds</option>
            </SelectInput>
          </Box>
        </Flex>
        <Flex sx={{ mx: -2, mb: 3, flexDirection: ['column', 'row', 'row'] }}>
          <Box sx={{ width: ['100%', '70%'], px: 2, pt: [2, 0, 0] }}>
            <TextInput name="search" type="text" onChange={(e) => handleTextInput(e, 'search')} />
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

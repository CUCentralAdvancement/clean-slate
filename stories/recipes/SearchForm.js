import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Flex, Box } from 'rebass';

import TextInput from '../../src/components/TextInput';
import BaseButton from '../../src/components/BaseButton';
import SelectInput from '../../src/components/SelectInput';

export default function SearchForm({ submitHandler, resetHandler, ...props }) {
  return (
    <>
      <Formik
        initialValues={{
          search: '',
          campus: 'All',
          interest: 'All',
          fundType: 'All',
        }}
        validationSchema={Yup.object({
          search: Yup.string()
            .min(3, 'Search query must be at least 3 characters long')
            .required('Search query is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          submitHandler(values);
          setSubmitting(false);
        }}
      >
        {({ resetForm, values }) => (
          <Form>
            <Flex mx={-2} mb={3} flexDirection={['column', 'row', 'row']}>
              <Box width={[1, 1, 1 / 3]} px={2}>
                <SelectInput name="campus">
                  <option value="All">All Campuses</option>
                  <option value="1046">CU Anschutz</option>
                  <option value="904">CU Boulder</option>
                  <option value="1100">CU Denver</option>
                  <option value="1134">UCCS</option>
                  <option value="1150">CU System</option>
                </SelectInput>
              </Box>
              <Box width={[1, 1, 1 / 3]} px={2}>
                <SelectInput name="interest">
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
              <Box width={[1, 1, 1 / 3]} px={2}>
                <SelectInput name="fundType">
                  <option value="All">Fund Type</option>
                  <option value="908">Academic Program Funds</option>
                  <option value="1043">Endowed Funds</option>
                  <option value="946">Memorial Funds</option>
                </SelectInput>
              </Box>
            </Flex>
            <Flex mx={-2} mb={3} flexDirection={['column', 'row', 'row']}>
              <Box width={[1, 1, 3 / 4]} px={2}>
                <TextInput name="search" type="text" />
              </Box>
              <Box width={[1, 1, 1 / 4]} px={2} pt={[2, 0, 0]}>
                <BaseButton variant="button.secondary" type="submit" mr={2}>
                  Search
                </BaseButton>
                <BaseButton
                  variant="button.secondary"
                  type="reset"
                  onClick={() => {
                    resetHandler();
                    resetForm();
                  }}
                >
                  Reset
                </BaseButton>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
}
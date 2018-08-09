// @flow

import React from "react";
import { Button, Form, Input, Grid, Message, Icon } from "semantic-ui-react";

const SearchFormView = ({
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}: FormicViewType) => (
  <Grid centered padded width="equal">
    <Grid.Row centered columns={3}>
      <Grid.Column>
        <Form
          error={!!errors.submission}
          loading={isSubmitting}
          onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              inline
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateFrom}
              error={!!(touched.dateFrom && errors.dateFrom)}
              control={Input}
              type="date"
              name="dateFrom"
              label="Date From"
            />
            <Form.Field
              fluid
              inline
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateTo}
              error={!!(touched.dateTo && errors.dateTo)}
              control={Input}
              type="date"
              name="dateTo"
              label="Date To"
            />
            <Form.Button
              style={{ margin: "1em" }}
              fluid
              inline
              control={Button}
              size="large"
              type="submit"
              animated="fade">
              <Button.Content visible>Submit</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Form.Button>
          </Form.Group>
          <Message
            error
            header="Submission Error"
            content={errors.submission}
          />
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default SearchFormView;

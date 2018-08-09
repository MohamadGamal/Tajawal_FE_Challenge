// @flow
import React from "react";
import { Header, Grid, Card, Button, Input } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";

const DashboardView = (
  { nights }: { nights: number },
  {
    getMinPrice,
    getMaxPrice,
    getHotelsToBeRendered,
    handlePriceChange,
    handleNameChange,
    handleSortChange,
    values,
  }: {
    getMinPrice: Function,
    getMaxPrice: Function,
    getHotelsToBeRendered: Function,
    handlePriceChange: Function,
    handleNameChange: Function,
    handleSortChange: Function,
    values: { name: string, price: number },
  },
) => (
  <Grid columns={3} divided padded relaxed style={{ padding: "2rem" }}>
    <Grid.Row columns={6}>
      <Grid.Column width={6} />
      <Grid.Column verticalAlign="middle" width={4}>
        <Header as="h3">
          Total Nights : <span className="nights">{nights}</span>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Button
          fluid
          onClick={() =>
            handleSortChange((hotelA, hotelB) =>
              hotelA.name.localeCompare(hotelB.name),
            )
          }>
          Sort By Name
        </Button>
      </Grid.Column>
      <Grid.Column>
        <Button
          fluid
          onClick={() =>
            handleSortChange((hotelA, hotelB) => hotelA.price - hotelB.price)
          }>
          Sort By Price
        </Button>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4}>
        <Input
          fluid
          icon="search"
          value={values.name}
          onChange={e => handleNameChange(e.target.value)}
          placeholder="Hotel Name"
        />
        <br />
        <p> Price : {values.price}</p>
        <Slider
          color="grey"
          settings={{
            min: getMinPrice(),
            max: getMaxPrice(),
            value: values.price,

            onChange: handlePriceChange,
            step: 1,
          }}
        />
      </Grid.Column>
      <Grid.Column width={12} style={{ height: "50vh", overflow: "auto" }}>
        <Grid padded columns={2}>
          {getHotelsToBeRendered().map(h => (
            <Grid.Column key={`${h.name}-${h.city}`}>
              <Card fluid>
                <Card.Content>
                  <Card.Header content={h.name} />
                  <Card.Meta content={h.city} />
                  <Card.Description content={`Price : ${h.price}`} />
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default DashboardView;

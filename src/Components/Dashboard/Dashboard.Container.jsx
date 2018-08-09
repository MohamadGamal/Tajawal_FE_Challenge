// @flow
import { PureComponent } from "react";
import {
  get as _get,
  maxBy as _max,
  minBy as _min,
  pick as _pick,
} from "lodash";
import { compose, sort, filter } from "ramda";

class DashboardContainer extends PureComponent<
  { children: Function },
  {
    hotels: Array<HoteType>,
    name: string,
    sortFunction: Function,
    price: number,
  },
> {
  constructor() {
    super();
    this.state = {
      hotels: [],
      name: "",
      sortFunction: () => 0,
      price: 0,
    };
  }

  componentDidMount() {
    console.log(
      this.props,
      this.getHotels(),
      _max(this.getHotels(), hotel => hotel.price) || 10,
    );
    this.setState({ price: this.getMinPrice() });
  }

  getHotels() {
    return _get(this.props, "location.state.hotels", []);
  }

  getNights() {
    return _get(this.props, "location.state.nights", []);
  }

  getMinPrice = () =>
    Math.floor(_get(_min(this.getHotels(), hotel => hotel.price), "price", 0));

  getMaxPrice = () =>
    Math.floor(_get(_max(this.getHotels(), hotel => hotel.price), "price", 10));

  getHotelsToBeRendered = () =>
    this.sortAndFilter(this.state)(this.getHotels());

  sortAndFilter = (bag: {
    name: string,
    sortFunction: Function,
    price: number,
  }) => {
    const { sortFunction, name, price } = bag;
    return compose(
      sort(sortFunction),
      filter(h => h.name.toLowerCase().match(name.toLowerCase())),
      filter(h => h.price >= price),
    );
  };

  handleStateChanges = (field: string) => (value: string) =>
    this.setState({ [field]: value });

  render() {
    const { children } = this.props;

    return children(
      { nights: this.getNights() },
      {
        getMinPrice: this.getMinPrice,
        getMaxPrice: this.getMaxPrice,
        values: _pick(this.state, ["name", "price", "sortFunction"]),
        getHotelsToBeRendered: this.getHotelsToBeRendered,
        handlePriceChange: this.handleStateChanges("price"),
        handleNameChange: this.handleStateChanges("name"),
        handleSortChange: this.handleStateChanges("sortFunction"),
      },
    );
  }
}

export default DashboardContainer;

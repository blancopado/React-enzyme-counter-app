import React from "react";
import { configure, shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "../App";
import { findByTestAttr } from "./helpers";

configure({ adapter: new EnzymeAdapter() });

describe("App", () => {
  const appWrapper = shallow(<App />);

  beforeEach(() => {
    appWrapper.setState({ counter: 0 });
  });

  it("should display the App component", () => {
    const appElement = findByTestAttr(appWrapper, "component-app");
    expect(appElement.length).toEqual(1);
  });
  it("should display a increment button", () => {
    const incButtonElement = findByTestAttr(appWrapper, "increment-button");
    expect(incButtonElement.length).toEqual(1);
  });
  it("should display a counter", () => {
    const counterElement = findByTestAttr(appWrapper, "counter-display");
    expect(counterElement.length).toEqual(1);
  });
  it("should have an initial state of 0", () => {
    expect(appWrapper.state("counter")).toBe(0);
  });
  it("should increment the counter when clicking the increment button", () => {
    const incButtonElement = findByTestAttr(appWrapper, "increment-button");
    incButtonElement.simulate("click");
    const counterDisplay = findByTestAttr(appWrapper, "counter-display");
    expect(counterDisplay.text()).toContain(1);
  });
  it("should display a decrement button", () => {
    appWrapper.setState({ counter: 5 });
    const decButtonElement = findByTestAttr(appWrapper, "decrement-button");
    decButtonElement.simulate("click");
    const counterDisplay = findByTestAttr(appWrapper, "counter-display");
    expect(counterDisplay.text()).toContain(4);
  });
  it("should not allow to decrease the counter under 0", () => {
    const decButtonElement = findByTestAttr(appWrapper, "decrement-button");
    decButtonElement.simulate("click");
    const counterDisplay = findByTestAttr(appWrapper, "counter-display");
    expect(counterDisplay.text()).toContain(0);
  });
});

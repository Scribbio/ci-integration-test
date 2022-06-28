import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StoreList from "../components/StoreList/StoreList";

describe("<StoreList/>", () => {
  // If you have some work you need to do repeatedly for many tests,
  // you can use beforeEach and afterEach.
  // cleanup unmounts React components once test is finish
  // essentially cleans up 'virtualised' DOM
  afterEach(cleanup);

  it("should render a button", () => {
    // renders the component to 'virtualised DOM' providing access to
    // testing library functions
    render(<StoreList stores={[]} sale={true} loadData={jest.fn()} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should apply a class of sale based on sale prop", () => {
    // deconstruct the container from the render method
    const { container } = render(
      <StoreList stores={[]} sale={true} loadData={jest.fn()} />
    );
    // find the correct div and the presence of the class
    expect(container.firstChild.classList.contains("sale")).toBe(true);
  });

  it("should render a list of StoreCards based on the stores prop", () => {
    // length = 3
    const stores = [
      { id: 1, address: "abc123" },
      { id: 2, address: "abc123" },
      { id: 3, address: "abc123" },
    ];

    render(<StoreList stores={stores} sale={false} loadData={jest.fn()} />);

    expect(screen.getAllByText(/abc123/i).length).toEqual(stores.length);
  });

  it("should call loadData prop when button is clicked", () => {
    const mockLoadData = jest.fn();

    render(<StoreList stores={[]} sale={true} loadData={mockLoadData} />);

    const button = screen.getByRole(`button`);

    userEvent.click(button);

    expect(mockLoadData).toBeCalled();
  });

  it("should match the snapshot", () => {
    const snapShot = render(
      <StoreList stores={[]} sale={true} loadData={jest.fn()} />
    );

    expect(snapShot).toMatchSnapshot();
  });
});

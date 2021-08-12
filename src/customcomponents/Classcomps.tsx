import react, { Component } from "react";

type MyProps = {
  // using `interface` is also ok
  message: string;
};

type MyState = {
  count: number;
};

class Classcomps extends Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    return (
      <div onClick={() => this.increment(1)}>
        {this.props.message} {this.state.count}
      </div>
    );
  }

  increment = (amt: number) => {
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };
}

export default Classcomps;

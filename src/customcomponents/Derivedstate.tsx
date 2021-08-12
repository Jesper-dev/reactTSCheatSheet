import { Component, PureComponent } from "react";
import { isEqual } from "lodash";

// class Derivedstate extends Component<Props, State> {
//     static getDerivedStateFromProps(
//         props: Props,
//         state: State,
//     ): Partial<State> | null {
//         //
//     }
// }

// When you want the function's return value to determine your state.
// class Comp extends React.Component<
//   Props,
//   ReturnType<typeof Comp["getDerivedStateFromProps"]>
// > {
//   static getDerivedStateFromProps(props: Props) {}
// }

//When you want derived state with other state fields and memoization

type CustomValue = any;

interface Props {
  PropA: CustomValue;
}

interface DefinedState {
  otherStateField: string;
}

type State = DefinedState & ReturnType<typeof transformPropsToState>;
function transformPropsToState(props: Props) {
  return {
    savedPropA: props.PropA, // save for memoization
    derivedState: props.PropA,
  };
}

class Comp extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      otherStateField: "123",
      ...transformPropsToState(props),
    };
  }
  static getDerivedStateFromProps(props: Props, state: State) {
    if (isEqual(props.PropA, state.savedPropA)) return null;
    return transformPropsToState(props);
  }
}

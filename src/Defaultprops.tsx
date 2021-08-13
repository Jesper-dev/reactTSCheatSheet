//A component with defaultProps may seem to have some required props that actually aren't.

import React, { ComponentProps, ComponentType, Component } from "react";

/*******************
This solution is wrong
*******************/
// interface IProps {
//   name: string;
// }

// const defaultProps = {
//   age: 25,
// };

// export const GreetComponent = ({ name, age }: IProps & typeof defaultProps) => {
//   <div>{`Hello my name is ${name}, ${age}`}</div>;
// };

// GreetComponent.defaultProps = defaultProps;

// const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
//     return <h1>Hej</h1>
// }

// // Property 'age' is missing in type '{ name: string; }' but required in type '{ age: number; }'
// const el = <TestComponent name="foo" />;

/*******************
Do this instaed
*******************/

// type ComponentProps<T> = T extends ComponentType<infer P> | Component<infer P>
//   ? JSX.LibraryManagedAttributes<T, P>
//   : never;

// const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
//     return <h1>Hej</h1>
// }

// No Error
// const el = <TestComponent name="foo" />

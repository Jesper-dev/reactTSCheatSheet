// Declare types of props
type AppProps = {
  message: string;
}; // use 'interface' if exporting so that consumers can extend

// Easiest way to declare a function component: Return type is inferred.
export const CompOne = ({ message }: AppProps) => <div>{message}</div>;

//You can also choose to annotate the return type so an error is raised if you accidentally return some other type
export const CompTwo = ({ message }: AppProps): JSX.Element => (
  <div>{message}</div>
);

//You can also choose to inline the type declaration; eliminates naming the prop types, but looks repetitive
export const CompThree = ({ message }: { message: string }) => (
  <div>{message}</div>
);

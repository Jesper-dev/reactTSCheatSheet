import { useState } from "react";

const [val, toggle] = useState(false);
// 'val' is inferred to be a boolean
// 'toggle' only tales booleans

const [user, setUser] = useState<string | null>(null);

const newUser = "";
//later
setUser(newUser);

// const [user, setUser] = React.useState<IUser>({} as IUser);

// // later...
// setUser(newUser);

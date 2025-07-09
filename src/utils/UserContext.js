import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "User Name",
})

export default UserContext;

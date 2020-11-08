import { createContext, useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "./types";

const AlertContext = createContext();

const reducer = (state, action) => {
    return action.type === SET_ALERT
        ? action.payload
        : action.type === REMOVE_ALERT
        ? null
        : state;
};

export const AlertProvider = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(reducer, initialState);

    const setAlert = (msg, type) => {
        dispatch({ type: SET_ALERT, payload: { msg, type } });
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 4000);
    };

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertContext;

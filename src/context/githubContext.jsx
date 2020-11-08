import { createContext, useReducer } from "react";
import axios from "axios";
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
} from "./types";

let githubClientID;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
    githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientID = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubContext = createContext();

const reducer = (state, action) =>
    action.type === SEARCH_USERS
        ? { ...state, users: action.payload, loading: false }
        : action.type === GET_USER
        ? { ...state, user: action.payload, loading: false }
        : action.type === CLEAR_USERS
        ? { ...state, users: [], loading: false }
        : action.type === GET_REPOS
        ? { ...state, repos: action.payload, loading: false }
        : action.type === SET_LOADING
        ? { ...state, loading: true }
        : state;

export const GithubProvider = props => {
    const initialState = {
        users: [],
        user: [],
        repos: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const setloading = () => dispatch({ type: SET_LOADING });

    const searchUsers = query => {
        setloading();
        try {
            (async () => {
                const res = await axios.get(
                    `https://api.github.com/search/users`,
                    {
                        params: {
                            q: query,
                            client_id: githubClientID,
                            client_secret: githubClientSecret,
                        },
                    }
                );
                dispatch({ type: SEARCH_USERS, payload: res.data.items });
            })();
        } catch (error) {
            console.log(`Fuckin Error :")`, error);
        }
    };

    const getUser = username => {
        setloading();
        try {
            (async () => {
                const res = await axios.get(
                    `https://api.github.com/users/${username}`,
                    {
                        params: {
                            client_id: githubClientID,
                            client_secret: githubClientSecret,
                        },
                    }
                );
                dispatch({ type: GET_USER, payload: res.data });
            })();
        } catch (error) {
            console.log(`Fuckin Error :")`, error);
        }
    };

    const getUserRepos = username => {
        setloading();
        try {
            (async () => {
                const res = await axios.get(
                    `https://api.github.com/users/${username}/repos`,
                    {
                        params: {
                            per_page: 5,
                            sort: "created",
                            client_id: githubClientID,
                            client_secret: githubClientSecret,
                        },
                    }
                );
                dispatch({ type: GET_REPOS, payload: res.data });
            })();
        } catch (error) {
            console.log(`Fuckin Error :")`, error);
        }
    };

    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                getUser,
                getUserRepos,
                clearUsers,
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubContext;

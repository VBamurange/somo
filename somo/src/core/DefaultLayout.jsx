import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import axiosClient from "../axios.jsx";
import { useEffect } from "react";


export default function DefaultLayout() {
    const { user, token, setUser, setToken, notification } = useStateContext();

     if (!token) {
       return <Navigate to="/login"/>
     }

    const onLogout = ev => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        axiosClient.get('/dashboard')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])

    return (
        <div id="defaultLayout">
            <div className="content">
                <header>
                    <div>
                        <Link to="/dashboard" className="Link">Dashboard</Link>
                    </div>
                    <div>
                        <Link to="/courses" className="Link">Courses</Link>

                    </div>
                    <div>
                        <Link to="/guidance" className="Link">Career Guidance</Link>

                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
                {notification &&
                    <div className="notification">
                        {notification}
                    </div>
                }
            </div>
        </div>
    )
}
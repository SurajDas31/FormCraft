
import { useEffect, useState } from "react";
import logo from "../images/logo.png"
import { auth } from "../firebase-config/firebase-config";
import { Avatar, Dropdown } from "flowbite-react";
import HomePageBody from "./HomePageBody";
import Auth from "../auth/Auth";
import Dashboard from "../DashBoard/Dashboard";

const Home = () => {

    const [dashboardOpen, setDashboardOpen] = useState(false)

    const [signInOpen, setsignInOpen] = useState(false)

    useEffect(() => {
        // setUser(auth.currentUser)
        console.log(dashboardOpen)
    },[dashboardOpen, signInOpen])

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">FormCraft</span>
                            <img
                                className="h-9 w-auto"
                                src={logo}
                                alt="FormCraft"
                            />
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                        {
                            (auth.currentUser === null || auth.currentUser === undefined) ?
                                <button onClick={() => setsignInOpen(true)} className="text-sm font-semibold leading-6 text-gray-900">
                                    Log in <span aria-hidden="true">&rarr;</span>
                                </button> :
                                <Dropdown
                                    label={<Avatar img={auth.currentUser.photoURL} alt={auth.currentUser.displayName} rounded />}
                                    arrowIcon={false}
                                    inline
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">{auth.currentUser.displayName}</span>
                                        <span className="block truncate text-sm font-medium">{auth.currentUser.email}</span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item>Settings</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => auth.signOut()}>Sign out</Dropdown.Item>
                                </Dropdown>
                        }
                    </div>
                </nav>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                {dashboardOpen ?
                    <Dashboard dashboardOpen={dashboardOpen} setDashboardOpen={() => { setDashboardOpen(false) }} /> :
                    <HomePageBody setOpen={(params) => { setsignInOpen(params) }} setDashboardOpen={() => { setDashboardOpen(true) }} />}
                <div
                    className="absolute inset-x-0 top-[calc(20%)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100% - 40em)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            <Auth open={signInOpen} setOpen={() => { setsignInOpen(false) }} />
        </div>

    );
}

export default Home;
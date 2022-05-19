import React, {useEffect} from 'react';
import Wrapper from "../../Ui/Form/Wrapper";
import creatingFeed from "../../../Media/icons/creating-feed.svg";
import {ReactSVG} from "react-svg";
import plus from "../../../Media/icons/plus.svg";
import chevronRight from "../../../Media/icons/chevron-right.svg";
import menuBars from "../../../Media/icons/menu-bars.svg";
import home from "../../../Media/icons/home.svg";
import score from "../../../Media/icons/score.svg";
import heart from "../../../Media/icons/heart.svg";
import fan from "../../../Media/icons/fan.svg";
import DarkButton from "../../Ui/Buttons/DarkButton";
import PageMainNavigation from "../../Ui/PageMainNavigation";
import {
    GAMES_FORM_PATH,
    LOCAL_STORAGE_AUTH_USER,
    ROSTERS_EDIT_PATH,
    ROSTERS_PATH,
    TEAMS_PATH
} from "../../../state/constants/Constans";
import Footer from "../../Ui/Footer";
import PageHeader from "../../Ui/PageHeader";
import {useNavigate} from "react-router-dom";
import {capitalizeFirstLetter} from "../../../Services/Helper";

const TeamsView = ({getGamesRequest, games}) => {
    const {user} = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_AUTH_USER));

    const navigate = useNavigate();

    useEffect(() => {
        getGamesRequest(user.profile.id || null, navigate)
    }, [])

    return (
        <Wrapper>
            <PageHeader
                title={user?.profile?.name || null}
                subTitle="Cavemen"
                description={(user?.profile?.school?.name || '') + ', ' + (user?.profile?.school?.state || '')}
            />

            <div className="mx-2">

                <nav className="bg-grey-light rounded-md w-full breadcrumbs my-2">
                    <ol className="list-reset flex items-center">
                        <li>
                            <a href="#" className="text-blue-600 hover:text-blue-700">
                                Home
                            </a>
                        </li>
                        <li>
                            <ReactSVG src={chevronRight}/>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600 hover:text-blue-700">
                                Library
                            </a>
                        </li>
                        <li>
                            <ReactSVG src={chevronRight}/>
                        </li>
                        <li className="text-secondary-light">Data</li>
                    </ol>
                </nav>

                <PageMainNavigation
                    heading="Teams"
                />


                <div className="grid lg:grid-cols-2 my-5 gap-10">

                    <div className="w-full">
                        {
                            games?.map((game, i) => <div key={i} className="bg-light rounded-xl p-4 my-2">
                                <div className="flex justify-between font-sans font-semibold text-secondary-light ">
                                    <p>{capitalizeFirstLetter(game?.team1?.gender || '')} {capitalizeFirstLetter(game?.sport?.name || '')}</p>
                                    <p>FINAL</p>
                                </div>

                                <div className="flex justify-between items-center my-2">
                                    <div className="flex items-center gap-5">
                                        <div className="rounded-full h-20 w-20 bg-white"></div>
                                        <p className="text-2xl font-bold text-secondary-light">{capitalizeFirstLetter(game?.team1?.name || '')}</p>
                                    </div>
                                    <p className="font-bold text-secondary-light text-2xl">64</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-5">
                                        <div className="rounded-full h-20 w-20 bg-white"></div>
                                        <p className="text-2xl  text-secondary-light">{capitalizeFirstLetter(game?.team2?.name || '')}</p>
                                    </div>
                                    <p className=" text-secondary-light text-2xl">41</p>
                                </div>
                            </div>)
                        }
                    </div>


                    <div className="">
                        <DarkButton
                            label="Start Game"
                            className="w-full text-2xl py-5"
                        />
                        <DarkButton
                            label="Add Game"
                            className="w-full text-2xl my-2 py-5"
                            clickEvent={() => navigate(GAMES_FORM_PATH)}
                        />
                        <DarkButton
                            label="Add Roster"
                            className="w-full text-2xl py-5"
                            clickEvent={() => navigate(ROSTERS_EDIT_PATH)}
                        />
                    </div>
                </div>
            </div>


            <Footer/>

        </Wrapper>
    )
}

export default TeamsView;
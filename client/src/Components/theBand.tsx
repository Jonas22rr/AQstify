import React from "react";
import Header from "./Header";
import "./theBand.css";
import ThorstenBott from "./pictures/Thorsten_Bott.jpeg";
import NikHuber from "./pictures/Nik_Huber.jpg";
import GeroSteigerwald from "./pictures/Gero_Steigerwald.jpg";

class TheBand extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Header id="theBand" header="Die Band" />
                <div className="Container">
                    <div>
                        AQstify ist der Name einer Band, die ausgewählte Songs
                        in einer einzigartigen Formation mit 3 Gitarren und 3
                        Stimmen interpretiert und ausführt. AQstify ist für jede
                        Feierlichkeit mit Genuss- und Chillfaktor die richtige
                        Wahl. Zu einem Cocktail, angenehmen Gesprächen mit
                        Kollegen und Freunden fehlt nur noch der richtige
                        Geist!! AQstify nimmt das Publikum mit auf eine
                        kurzweilige Reise durch die Musikgeschichte. Einfach die
                        Seele baumeln lassen und in schönem Ambiente tollen
                        Melodien und Stimmen lauschen. Nik Huber, Thorsten Bott
                        und Gero Steigerwald haben sich zur Aufgabe gemacht,
                        Menschen mit ihrem Reportoire zu begeistern. Mit großer
                        Live- und Bühnenerfahrung fügen die Musiker 18
                        Gitarrensaiten stimmgewaltig zum eigenen Sound zusammen.
                        AQstify gibt es auch in einer 4er Formation! Ja nach
                        Anlass und Wunsch unserer Auftraggeber. Marcus Becker
                        /Percussion ergänzt die Band perfekt mit zusätzlichem
                        Rhythmus und Emotion.
                    </div>
                    <div className="bandMembers">
                        <div className="bandMember">
                            <span className="theBand-names">Thorsten Bott</span>
                            <img
                                className="memberPic"
                                src={ThorstenBott}
                                alt="Thorsten Bott"
                            ></img>
                        </div>
                        <div className="bandMember">
                            <span className="theBand-names">Nik Huber</span>
                            <img
                                className="memberPic"
                                src={NikHuber}
                                alt="Nik Huber"
                            ></img>
                        </div>
                        <div className="bandMember">
                            <span className="theBand-names">
                                Gero Steigerwanl
                            </span>
                            <img
                                className="memberPic"
                                src={GeroSteigerwald}
                                alt="Gerol Steigerwald"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TheBand;

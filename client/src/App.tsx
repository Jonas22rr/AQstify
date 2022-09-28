import "./App.css";
import NavigationBar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Impressum from "./Components/Impressum";
import Homepage from "./Components/Homepage";
import DataPrivacy from "./Components/dataPrivacy";
import Photogallery from "./Components/Photogallery";
import Login from "./Components/Login";
import React, { useState, SetStateAction, Suspense, useEffect } from "react";
import { AppState as State } from "./types/types";
import i18n_de from "./i18n/i18n_de.json";
import i18n_en from "./i18n/i18n_en.json";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        de: { translation: i18n_de },
        en: { translation: i18n_en },
    },
    lng: "de",
    fallbackLng: "de",
    interpolation: { escapeValue: false },
});

function App() {
    const { t } = useTranslation();

    let [login, setLogin] = useState<State>({
        login: false,
    });

    let [language, setLanguage] = useState<State>({
        language: "",
    });

    useEffect(() => {
        if (language) {
            i18n.changeLanguage(language.toString());
            sessionStorage.setItem("language", language as string);
        }
    }, [language]);

    function getLogin(): boolean {
        const password = sessionStorage.getItem("password");
        return password === "2412";
    }

    // prettier-ignore
    //@ts-ignore
    return ( getLogin() || login === "2412" ? 
        <Suspense fallback="Loading...">
            <BrowserRouter>
                <div id="App" className="App">
                    <div className="App">
                        <NavigationBar
                            Nav1={t('home')}
                            Nav2={t("theBand")}
                            Nav3={t("references")}
                            Nav4={t("contactUs")}
                            Nav5={t("photogalery")}
                            Nav6={t("watch")}
                            language={(language: SetStateAction<State>) => setLanguage(language)}
                        />
                        <h1 className="App-CB">&nbsp;</h1>
                        <Routes>
                            <Route path="/" element={<Homepage/>}/>
                            <Route path="/impressum" element={<Impressum />} />
                            <Route path="/dataPrivacy" element={<DataPrivacy />} />
                            <Route
                                path="/photogallery"
                                element={<Photogallery />}
                            />
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "1rem" }}>
                                        <p>
                                            {t("pageNotFound")}
                                        </p>
                                    </main>
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Suspense>
     : 
        <Login userLogin={(login: SetStateAction<State>)=> setLogin(login) }/>
    );
}

export default App;

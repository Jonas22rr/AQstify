import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import "./dataPrivacy.css";

const DataPrivacy: FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1>{t("dataPrivacy.dataPrivacy")}</h1>
            <br />
            <h2>{t("dataPrivacy.dPOnFirstLook")}</h2>
            <h4>{t("dataPrivacy.general")}</h4>
            <p>{t("dataPrivacy.generalText")}</p>
            <h4>{t("dataPrivacy.dataCollectionOnOurWebsite")}</h4>
            <h6>
                <strong>
                    {t("dataPrivacy.whoIsResponsibleForTheCollectionOfData")}
                </strong>
            </h6>
            <p>{t("dataPrivacy.whoIsResponsibleForTheCollectionOfDataText")}</p>
            <h6>
                <strong>{t("dataPrivacy.howDoWeCollectYourData")}</strong>
            </h6>
            <p>{t("dataPrivacy.howDoWeCollectYourDataText")}</p>
            <h6>
                <strong>{t("dataPrivacy.whyDoWeCollectYourData")}</strong>
            </h6>
            <p>{t("dataPrivacy.whyDoWeCollectYourDataText")}</p>
            <h6>
                <strong>
                    {t("dataPrivacy.whichRightsDoYouHaveRegardingYourData")}
                </strong>
            </h6>
            <p>{t("dataPrivacy.whichRightsDoYouHaveRegardingYourDataText")}</p>
            <h4>
                {t("dataPrivacy.analyticalToolsAndToolsThirdPartyProviders")}
            </h4>
            <p>
                {t(
                    "dataPrivacy.analyticalToolsAndToolsThirdPartyProvidersText"
                )}
            </p>
            <p>
                {t(
                    "dataPrivacy.analyticalToolsAndToolsThirdPartyProvidersText2"
                )}
            </p>
            <p>
                {t(
                    "dataPrivacy.analyticalToolsAndToolsThirdPartyProvidersText3"
                )}
            </p>
            <br />
            <h2>
                {t("dataPrivacy.generalInformationAndMandatoryInformation")}
            </h2>
            <h4>{t("dataPrivacy.dataProtection")}</h4>
            <p>{t("dataPrivacy.dataProtectionText")}</p>
            <p>{t("dataPrivacy.dataProtectionText2")}</p>
            <p>{t("dataPrivacy.dataProtectionText3")}</p>
            <h4>
                {t(
                    "dataPrivacy.noticeConcerningThePartyResponsibleForThisWebsite"
                )}
            </h4>
            <p>
                {t(
                    "dataPrivacy.noticeConcerningThePartyResponsibleForThisWebsiteText"
                )}
            </p>
            <p>
                <span>{t("imprint.text1")}</span>
                <br />
                <span>
                    {t("dataPrivacy.contactPerson")}:&nbsp;
                    {t("gs")}
                </span>
                <br />
                <span>{t("imprint.text2")}</span>
                <br />
                <span>{t("imprint.text3")}</span>
            </p>
            <p>
                <span>{t("dataPrivacy.phoneNumber")}</span>
                <br />
                <span>{t("dataPrivacy.mail")}</span>
            </p>
            <p>
                {t(
                    "dataPrivacy.noticeConcerningThePartyResponsibleForThisWebsiteText2"
                )}
            </p>
            <h4>{t("dataPrivacy.recallOfYourRightsAsDataSubject")}</h4>
            <p>{t("dataPrivacy.recallOfYourRightsAsDataSubjectText")}</p>
            <h4>{t("dataPrivacy.complaindect")}</h4>
            <p>{t("dataPrivacy.complaindectText")}</p>
            <h4>{t("dataPrivacy.rightToDataPortability")}</h4>
            <p>{t("dataPrivacy.rightToDataPortabilityText")}</p>
            <h4>{t("dataPrivacy.encryption")}</h4>
            <p>{t("dataPrivacy.encryptionText")}</p>
            <h4>{t("dataPrivacy.informationBlockingDeletion")}</h4>
            <p>{t("dataPrivacy.informationBlockingDeletionText")}</p>
            <h4>{t("dataPrivacy.oppositionAdvertisingMails")}</h4>
            <p>{t("dataPrivacy.oppositionAdvertisingMailsText")}</p>
            <br />
            <h2>{t("dataPrivacy.dataCollection")}</h2>
            <h4>{t("dataPrivacy.cookies")}</h4>
            <p>{t("dataPrivacy.cookiesText")}</p>
            <p>{t("dataPrivacy.cookiesText2")}</p>
            <p>{t("dataPrivacy.cookiesText3")}</p>
            <p>{t("dataPrivacy.cookiesText4")}</p>
            <h4>{t("dataPrivacy.serverLogFiles")}</h4>
            <p>{t("dataPrivacy.serverLogFilesText")}</p>
            <ul>
                <li>{t("dataPrivacy.serverLogFilesText2")}</li>
                <li>{t("dataPrivacy.serverLogFilesText3")}</li>
                <li>{t("dataPrivacy.serverLogFilesText4")}</li>
                <li>{t("dataPrivacy.serverLogFilesText5")}</li>
                <li>{t("dataPrivacy.serverLogFilesText6")}</li>
                <li>{t("dataPrivacy.serverLogFilesText7")}</li>
            </ul>
            <p>{t("dataPrivacy.serverLogFilesText8")}</p>
            <p>{t("dataPrivacy.serverLogFilesText9")}</p>
            <h4>{t("dataPrivacy.dataProcessing")}</h4>
            <p>{t("dataPrivacy.dataProcessingText")}</p>
            <p>{t("dataPrivacy.dataProcessingText2")}</p>
            <br />
            <h2>{t("dataPrivacy.sozialMedia")}</h2>
            <p>{t("dataPrivacy.sozialMediaText")}</p>
            <br />
            <h2>{t("dataPrivacy.analytics")}</h2>
            <p>{t("dataPrivacy.analyticsText")}</p>
            <br />
            <h2>{t("dataPrivacy.plugins")}</h2>
            <h4>{t("dataPrivacy.icons")}</h4>
            <p>{t("dataPrivacy.iconsText")}</p>
        </div>
    );
};

export default DataPrivacy;

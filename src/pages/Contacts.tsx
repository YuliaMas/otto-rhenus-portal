import {
    // Phone,
    // PhoneCall,
    Building2,
    // Smartphone,
    Clock,
    // ShieldAlert
} from "lucide-react";

import {
    coordinators,
    officeInfo
} from "../data/contacts";
import {useTranslation} from "react-i18next";

export default function Contacts() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-slate-100">

            <div className="mx-auto max-w-7xl px-4 py-8">

                <h1 className="mb-8 text-4xl font-bold text-[#002b87]">
                    📞 {t("contacts")}
                </h1>

                {/* Координатори */}

                <div className="mb-8">

                    <h2 className="mb-4 text-2xl font-bold">
                        {t("coordinatorsTitle")}
                    </h2>

                    <div className="grid gap-4 md:grid-cols-3">

                        {coordinators.map(
                            (person) => (

                                <div
                                    key={person.name}
                                    className="
                                        rounded-2xl
                                        bg-white
                                        p-6
                                        shadow
                                    "
                                >

                                    <h3
                                        className="
                                            mb-3
                                            text-xl
                                            font-semibold
                                        "
                                    >
                                        {person.name}
                                    </h3>

                                    <p className="mb-4">
                                        {person.phone}
                                    </p>

                                    <div className="flex gap-2">

                                        <a
                                            href={`tel:${person.phone}`}
                                            className="
                                                rounded-lg
                                                bg-[#002b87]
                                                px-3
                                                py-2
                                                text-white
                                            "
                                        >
                                            {t("callButton")}
                                        </a>

                                        <a
                                            href={`https://wa.me/${person.phone.replace(
                                                "+"
                                                ,
                                                ""
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                rounded-lg
                                                bg-green-500
                                                px-3
                                                py-2
                                                text-white
                                            "
                                        >
                                            WhatsApp
                                        </a>

                                        <a
                                            href={`viber://chat?number=${person.phone}`}
                                            className="
                                                  rounded-lg
                                                  bg-purple-600
                                                  px-3
                                                  py-2
                                                  text-white
                                                "
                                        >
                                            Viber
                                        </a>
                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>

                {/* Години роботи */}

                <div
                    className="
                        mb-8
                        rounded-2xl
                        bg-white
                        p-6
                        shadow
                    "
                >

                    <div className="flex gap-3">

                        <Clock />

                        <div>

                            <h2
                                className="
                                    mb-2
                                    text-xl
                                    font-bold
                                "
                            >
                                {t("officeTitle")}
                            </h2>

                            <p>
                                {t("officeHours")}
                            </p>

                            <p>
                                {officeInfo.hours}
                            </p>
                            <p>
                                <a
                                    href="mailto:poznan@ottoworkforce.eu"
                                >
                                    📧  poznan@ottoworkforce.eu
                                </a>
                            </p>

                            <p className="mt-3">
                                <a
                                    href={`tel:${officeInfo.phone}`}
                                >
                                    ☎ {officeInfo.phone}
                                </a>
                                <br/>
                                <span>{t("officeAutoReply")}</span>
                            </p>

                        </div>

                    </div>

                </div>

                {/* Adres */}

                <div
                    className="
                        mb-8
                        rounded-2xl
                        bg-white
                        p-6
                        shadow
                    "
                >
                    <div className="flex gap-3">
                    <Building2/>
                        <div>
                    <h2
                        className="
                                    mb-2
                                    text-xl
                                    font-bold
                                "
                    >
                        {t("officeAddress")}
                    </h2>

                        <p>ul. Głogowska 47
                            60-738 Poznań</p>
                        </div>
                    </div>
                </div>

                <iframe
                    title="OTTO Office"
                    src="https://maps.google.com/maps?q=Glogowska%2047%20Poznan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="
                    mt-5
                    h-72
                    w-full
                    rounded-xl
                    "
                />

                {/* Гаряча лінія */}

                <div
                    className="
                        mb-8
                        rounded-2xl
                        bg-orange-50
                        p-6
                        mt-8
                        p-6
                        shadow
                        flex  items-center justify-center flex-col
                    "
                >

                    <h2 className="mb-3 text-xl font-bold">

                        {t("hotlineTitle")}

                    </h2>
                    <ul>
                        <li>
                        <a
                            href="tel:+48122133144"
                            className="
                            text-2xl
                            font-bold
                            text-[#002b87]
                        "
                        >
                            ☎️  +48 122 133 144
                        </a>
                        </li>
                    </ul>

                </div>

                {/*/!* Робочі зміни *!/*/}

                {/*<div*/}
                {/*    className="*/}
                {/*        mb-8*/}
                {/*        rounded-2xl*/}
                {/*        bg-white*/}
                {/*        p-6*/}
                {/*        shadow*/}
                {/*    "*/}
                {/*>*/}

                {/*    <h2 className="mb-4 text-xl font-bold">*/}
                {/*        Робочі зміни*/}
                {/*    </h2>*/}

                {/*    <div className="grid gap-3 md:grid-cols-3">*/}

                {/*        <div>I: 06:00 - 14:00</div>*/}
                {/*        <div>II: 14:00 - 22:00</div>*/}
                {/*        <div>III: 22:00 - 06:00</div>*/}

                {/*    </div>*/}

                {/*</div>*/}

                {/*/!* myOTTO *!/*/}

                {/*<div*/}
                {/*    className="*/}
                {/*        rounded-2xl*/}
                {/*        bg-white*/}
                {/*        p-6*/}
                {/*        shadow*/}
                {/*    "*/}
                {/*>*/}

                {/*    <h2 className="mb-3 text-xl font-bold">*/}
                {/*        📱 myOTTO*/}
                {/*    </h2>*/}

                {/*    <p className="mb-4">*/}
                {/*        Перевірка зарплати,*/}
                {/*        документів та повідомлень.*/}
                {/*    </p>*/}

                {/*    <a*/}
                {/*        href="https://www.myotto.pl"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        className="*/}
                {/*            rounded-lg*/}
                {/*            bg-[#002b87]*/}
                {/*            px-4*/}
                {/*            py-2*/}
                {/*            text-white*/}
                {/*        "*/}
                {/*    >*/}
                {/*        Відкрити myOTTO*/}
                {/*    </a>*/}

                {/*</div>*/}

            </div>

        </div>
    );
}

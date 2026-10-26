import TransportLayout from "../components/transport/TransportLayout";
import { transportRoutesWrzesnia } from "../data/transportRoutesWrzesnia";

// export default function TransportWrzesnia() {
//     return (
//         <TransportLayout
//             title="🚌 Transport Września i okolice"
//             routes={transportRoutesWrzesnia}
//         />
//     );
// }
// import { useTranslation } from "react-i18next";
//
// export default function TransportWrzesnia() {
//
//     const { t } = useTranslation();
//
//     return (
//         <TransportLayout
//             title={`🚌 ${t("transportWrzesniaTitle")}`}
//             routes={transportRoutesWrzesnia}
//         />
//     );
// }
import { useTranslation } from "react-i18next";

export default function TransportWrzesnia() {

    const { t } = useTranslation();

    return (
        <TransportLayout
            title={`🚌 ${t("transportWrzesniaTitle")}`}
            routes={transportRoutesWrzesnia}
        />
    );
}

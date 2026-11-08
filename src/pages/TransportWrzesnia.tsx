import TransportLayout from "../components/transport/TransportLayout";
import { transportRoutesWrzesnia } from "../data/transportRoutesWrzesnia";
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

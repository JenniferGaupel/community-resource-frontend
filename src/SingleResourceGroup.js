import { useEffect, useState } from "react";
import SubmitResourceLink from "./SubmitResourceButton";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const SingleResourceGroup = () => {
  const { id } = useParams();
  const [resourceGroup, setResourceGroup] = useState([]);
  const [howToGiveOrGet, setHowToGiveOrGet] = useState("");
  const [notes, setNotes] = useState("");
  const [venmo, setVenmo] = useState("");
  const [paypal, setPaypal] = useState("");
  const [cashApp, setCashApp] = useState("");
  const [zelle, setZelle] = useState("");
  useEffect(() => {
    requestResourceGroup();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestResourceGroup() {
    const res = await fetch(`http://172.23.0.3/api/v1/resource-groups/${id}`);
    const json = await res.json();
    setResourceGroup(json);
  }
  function showReceiverResources() {
    setHowToGiveOrGet(
      "How to find Resources: " + resourceGroup.how_to_receive_resources
    );
    if (resourceGroup.notes_for_receiver) {
      setNotes("Notes: " + resourceGroup.notes_for_receiver);
    } else {
      setNotes("");
    }
    setVenmo("");
    setPaypal("");
    setCashApp("");
    setZelle("");
  }
  function showDonatorResources() {
    setHowToGiveOrGet(
      "How to donate Resources:" + resourceGroup.how_to_donate_resources
    );

    if (resourceGroup.notes_for_donator) {
      setNotes("Notes: " + resourceGroup.notes_for_donator);
    } else {
      setNotes("");
    }

    if (resourceGroup.venmo) {
      setVenmo("Venmo: " + resourceGroup.venmo);
    } else {
      setVenmo("");
    }

    if (resourceGroup.paypal) {
      setPaypal("PayPal: " + resourceGroup.paypal);
    } else {
      setPaypal("");
    }

    if (resourceGroup.cash_app) {
      setCashApp("Cash App: " + resourceGroup.cash_app);
    } else {
      setCashApp("");
    }

    if (resourceGroup.zelle) {
      setZelle("Zelle: " + resourceGroup.zelle);
    } else {
      setZelle("");
    }
  }
  return (
    <div className="mt-5">
      <div className="text-center">
        <ul className="list-none">
          <li>{resourceGroup.resource_name}</li>
          <li>Mission/About: {resourceGroup.resource_description}</li>
          <li>Contacts:</li>
          {resourceGroup.business_address_1 && (
            <li>
              Bussiness Address:
              {resourceGroup.business_address_1} {resourceGroup.business_city},
              {resourceGroup.business_state}
              {resourceGroup.business_zip_code}
            </li>
          )}
          {resourceGroup.physical_address_1 && (
            <li>
              Location:
              {resourceGroup.physical_address_1}{" "}
              {resourceGroup.physical_address_2}
              {resourceGroup.physical_city},{resourceGroup.physical_state}
              {resourceGroup.physical_zip_code}
            </li>
          )}
          {resourceGroup.website && (
            <li>
              Website:
              {resourceGroup.website}
            </li>
          )}
          {resourceGroup.phone_number && (
            <li>
              Phone Number:
              {resourceGroup.phone_number}
            </li>
          )}
          {resourceGroup.email && (
            <li>
              Email Address:
              {resourceGroup.email}
            </li>
          )}
          {resourceGroup.instagram && (
            <li>
              Instagram:
              {resourceGroup.instagram}
            </li>
          )}
          {resourceGroup.twitter && (
            <li>
              Twitter:
              {resourceGroup.twitter}
            </li>
          )}
          {resourceGroup.facebook && (
            <li>
              Facebook:
              {resourceGroup.facebook}
            </li>
          )}
          {resourceGroup.additional_contacts && (
            <li>
              Addtional Contacts:
              {resourceGroup.additional_contacts}
            </li>
          )}
        </ul>
      </div>
      <div className="text-center mt-5">
        <button
          className="bg-transparent py-2 px-4 border border-black rounded mr-5"
          // variant="outlined"
          onClick={showReceiverResources}
        >
          I am looking for resources
        </button>
        <button
          className="bg-transparent py-2 px-4 border border-black rounded"
          // variant="outlined"
          onClick={showDonatorResources}
        >
          I want to donate resources
        </button>
        <ul className="list-none mt-5">
          <li>{howToGiveOrGet}</li>
          <li>{notes}</li>
          <li>
            {venmo}
            {paypal}
            {cashApp}
            {zelle}
          </li>
        </ul>
      </div>
      <SubmitResourceLink />
    </div>
  );
};

export default SingleResourceGroup;

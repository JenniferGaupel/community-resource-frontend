import { useEffect, useState } from "react";
import SubmitResourceLink from "./SubmitResourceLink";
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
    <div>
      <h1>{resourceGroup.resource_name}</h1>
      <p>Mission/About: {resourceGroup.resource_description}</p>
      <p>Contacts:</p>
      {resourceGroup.business_address_1 && (
        <p>
          Bussiness Address:
          {resourceGroup.business_address_1} {resourceGroup.business_city},
          {resourceGroup.business_state}
          {resourceGroup.business_zip_code}
        </p>
      )}
      {resourceGroup.physical_address_1 && (
        <p>
          Location:
          {resourceGroup.physical_address_1} {resourceGroup.physical_address_2}
          {resourceGroup.physical_city},{resourceGroup.physical_state}
          {resourceGroup.physical_zip_code}
        </p>
      )}
      {resourceGroup.website && (
        <p>
          Website:
          {resourceGroup.website}
        </p>
      )}
      {resourceGroup.phone_number && (
        <p>
          Phone Number:
          {resourceGroup.phone_number}
        </p>
      )}
      {resourceGroup.email && (
        <p>
          Email Address:
          {resourceGroup.email}
        </p>
      )}
      {resourceGroup.instagram && (
        <p>
          Instagram:
          {resourceGroup.instagram}
        </p>
      )}
      {resourceGroup.twitter && (
        <p>
          Twitter:
          {resourceGroup.twitter}
        </p>
      )}
      {resourceGroup.facebook && (
        <p>
          Facebook:
          {resourceGroup.facebook}
        </p>
      )}
      {resourceGroup.additional_contacts && (
        <p>
          Addtional Contacts:
          {resourceGroup.additional_contacts}
        </p>
      )}
      <Button
        variant="outlined"
        id="show-receiver-resources"
        onClick={showReceiverResources}
      >
        I am looking for resources
      </Button>
      <Button
        variant="outlined"
        id="show-donator-resources"
        onClick={showDonatorResources}
      >
        I want to donate resources
      </Button>
      <p>{howToGiveOrGet}</p>
      <p>{notes}</p>
      <p>
        {venmo}
        {paypal}
        {cashApp}
        {zelle}
      </p>
      <SubmitResourceLink />
    </div>
  );
};

export default SingleResourceGroup;

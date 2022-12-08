import { useEffect, useState } from "react";
import SubmitResourceButton from "./SubmitResourceButton";
import { useParams } from "react-router-dom";

const SingleResourceGroup = () => {
  const { id } = useParams();
  const [resourceGroup, setResourceGroup] = useState([]);
  const [howToGiveOrGet, setHowToGiveOrGet] = useState("");
  const [notes, setNotes] = useState("");
  useEffect(() => {
    requestResourceGroup();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestResourceGroup() {
    const res = await fetch(`http://172.23.0.3/api/v1/resource-groups/${id}`);
    const json = await res.json();
    setResourceGroup(json);
  }
  function showReceiverResources() {
    setHowToGiveOrGet("Looking for resources");
    setNotes("notes for receiver");
  }
  function showDonatorResources() {
    setHowToGiveOrGet("Looking to donate");
    setNotes("notes for donator");
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
      <button id="show-receiver-resources" onClick={showReceiverResources}>
        I am looking for resources
      </button>
      <button id="show-donator-resources" onClick={showDonatorResources}>
        I want to donate resources
      </button>
      <p>{howToGiveOrGet}</p>
      <p>{notes}</p>
      <SubmitResourceButton />
    </div>
  );
};

export default SingleResourceGroup;

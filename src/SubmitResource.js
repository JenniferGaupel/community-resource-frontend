import { useEffect, useState } from "react";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";

const SubmitResource = () => {
  const [message, setMessage] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");
  const [businessAddress1, setBusinessAddress1] = useState("");
  const [businessAddress2, setBusinessAddress2] = useState("");
  const [businessCity, setBusinessCity] = useState("");
  const [businessState, setBusinessState] = useState("");
  const [businessZipCode, setBusinessZipCode] = useState("");
  const [physicalAddress1, setPhysicalAddress1] = useState("");
  const [physicalAddress2, setPhysicalAddress2] = useState("");
  const [physicalCity, setPhysicalCity] = useState("");
  const [physicalState, setPhysicalState] = useState("");
  const [physicalZipCode, setPhysicalZipCode] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [venmo, setVenmo] = useState("");
  const [paypal, setPaypal] = useState("");
  const [cashApp, setCashApp] = useState("");
  const [zelle, setZelle] = useState("");
  const [additionalContacts, setAdditionalContacts] = useState("");
  const [resourcesAvailable, setResourcesAvailable] = useState("");

  async function createResource() {
    const res = await fetch(
      `http://172.23.0.3/api/v1/resource-groups/submit-resource`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resource_name: resourceName,
          resource_description: resourceDescription,
          business_address_1: businessAddress1,
          business_address_2: businessAddress2,
          business_city: businessCity,
          business_state: businessState,
          business_zip_code: businessZipCode,
          physical_address_1: physicalAddress1,
          physical_address_2: physicalAddress2,
          physical_city: physicalCity,
          physical_state: physicalState,
          physical_zip_code: physicalZipCode,
          website: website,
          phone_number: phoneNumber,
          email: email,
          instagram: instagram,
          twitter: twitter,
          facebook: facebook,
          venmo: venmo,
          paypal: paypal,
          cash_app: cashApp,
          zelle: zelle,
          additional_contacts: additionalContacts,
          unapproved_resource_list: resourcesAvailable,
        }),
      }
    );
    const json = await res.json();
    const resStatus = res.status;
    if (resStatus === 201) {
      console.log(json.resource_name + json.resource_description);
      document.getElementById("new-resource-form").reset();
      setMessage(
        "Resource group " + json.resource_name + " was successfully submitted!"
      );
    } else if (resStatus === 400) {
      console.log(json.Message);
      setMessage("Resource group name is required.");
    } else if (resStatus === 409) {
      console.log(json.Message);
      setMessage(
        "A resource group by that name already exists or has already been submitted."
      );
    } else {
      console.log(json.Message);
      setMessage(
        "Something went wrong. Please check the form and try submitting again. If this error continues please contact me."
      );
    }
    scrollToTop();
  }

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="bg-gray-50 ">
      <div className="w-2/4 m-auto text-center">
        <div className="my-5">
          <h1>
            Please fill out this form to submit a new resource.
            <br /> Resource Name is the only required field.
            <br />
            All resources are manually reviewed. Contact me with any questions!
          </h1>
          <p className="mt-1 text-red-600">{message}</p>
        </div>
        <form
          id="new-resource-form"
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            createResource();
          }}
        >
          <label htmlFor="resource-name">Resource Name:</label>
          <br />
          <input
            type="text"
            id="resource-name"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setResourceName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="resource-description">Resource Description:</label>
          <br />
          <input
            type="text"
            id="resource-description"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setResourceDescription(e.target.value);
            }}
          />
          <br />
          <label htmlFor="resources-available">Resources Availble:</label>
          <br />
          <input
            type="text"
            id="resources-available"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setResourcesAvailable(e.target.value);
            }}
          />
          <br />
          <label htmlFor="business-address-1">Business Address Line 1:</label>
          <br />
          <input
            type="text"
            id="business-address-1"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setBusinessAddress1(e.target.value);
            }}
          />
          <br />
          <label htmlFor="business-address-2">Business Address Line 2:</label>
          <br />
          <input
            type="text"
            id="business-address-2"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setBusinessAddress2(e.target.value);
            }}
          />
          <br />
          <label htmlFor="business-city">Business City:</label>
          <br />
          <input
            type="text"
            id="business-city"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setBusinessCity(e.target.value);
            }}
          />
          <br />
          <label htmlFor="business-state">Business State:</label>
          <br />
          <input
            type="text"
            id="business-state"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setBusinessState(e.target.value);
            }}
          />
          <br />
          <label htmlFor="business-zip-code">Business Zip Code:</label>
          <br />
          <input
            type="text"
            id="business-zip-code"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setBusinessZipCode(e.target.value);
            }}
          />
          <br />
          <label htmlFor="physical-address-1">Physical Address 1:</label>
          <br />
          <input
            type="text"
            id="physical-address-1"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setPhysicalAddress1(e.target.value);
            }}
          />
          <br />
          <label htmlFor="physical-address-2">Physical Address 2:</label>
          <br />
          <input
            type="text"
            id="physical-address-2"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setPhysicalAddress2(e.target.value);
            }}
          />
          <br />
          <label htmlFor="physical-city">Physical City:</label>
          <br />
          <input
            type="text"
            id="physical-city"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setPhysicalCity(e.target.value);
            }}
          />
          <br />
          <label htmlFor="physical-state">Physical State:</label>
          <br />
          <input
            type="text"
            id="physical-state"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setPhysicalState(e.target.value);
            }}
          />
          <br />
          <label htmlFor="physical-zip-code">Physical Zip Code:</label>
          <br />
          <input
            type="text"
            id="physical-zip-code"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setPhysicalZipCode(e.target.value);
            }}
          />
          <br />
          <label htmlFor="phone-number">Phone Number:</label>
          <br />
          <input
            type="text"
            id="phone-number"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <br />
          <label htmlFor="email">Email Address:</label>
          <br />
          <input
            type="text"
            id="email"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="website">Website:</label>
          <br />
          <input
            type="text"
            id="website"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
          />
          <br />
          <label htmlFor="twitter">Twitter:</label>
          <br />
          <input
            type="text"
            id="twitter"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setTwitter(e.target.value);
            }}
          />
          <br />
          <label htmlFor="facebook">Facebook:</label>
          <br />
          <input
            type="text"
            id="facebook"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setFacebook(e.target.value);
            }}
          />
          <br />
          <label htmlFor="instagram">Instagram:</label>
          <br />
          <input
            type="text"
            id="instagram"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setInstagram(e.target.value);
            }}
          />
          <br />
          <label htmlFor="additional-contact">Additional Contact:</label>
          <br />
          <input
            type="text"
            id="additional-contact"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setAdditionalContacts(e.target.value);
            }}
          />
          <br />
          <label htmlFor="venmo">Venmo:</label>
          <br />
          <input
            type="text"
            id="venmo"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setVenmo(e.target.value);
            }}
          />
          <br />
          <label htmlFor="paypal">Paypal:</label>
          <br />
          <input
            type="text"
            id="paypal"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setPaypal(e.target.value);
            }}
          />
          <br />
          <label htmlFor="cash-app">Cash App:</label>
          <br />
          <input
            type="text"
            id="cash-app"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setCashApp(e.target.value);
            }}
          />
          <br />
          <label htmlFor="zelle">Zelle:</label>
          <br />
          <input
            type="text"
            id="zelle"
            className="border border-black bg-gray-50 mb-1 rounded"
            onChange={(e) => {
              setZelle(e.target.value);
            }}
          />
          <br />
          <button className="bg-transparent py-2 px-4 border border-black rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitResource;

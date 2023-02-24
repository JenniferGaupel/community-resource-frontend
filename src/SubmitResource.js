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
      setMessage("Resource group name is required!");
    } else if (resStatus === 409) {
      console.log(json.Message);
      setMessage(
        "A resource group by that name already exists or has already been submitted. Please contact me if you have any qusetions!"
      );
    } else {
      console.log(json.Message);
      setMessage(
        "Something went wrong. Please check the form and try submitting again. If this error continues please contact me!"
      );
    }
  }

  return (
    <div className="bg-gray-50">
      <div>
        <h1>Blaj blah how to fill out the form</h1>
        <p>{message}</p>
      </div>
      <form
        id="new-resource-form"
        onSubmit={(e) => {
          e.preventDefault();
          createResource();
        }}
      >
        <FormControl>
          <FormLabel htmlFor="resource-name">
            Resource Name
            <TextField
              size="small"
              id="resource-name"
              onChange={(e) => {
                setResourceName(e.target.value);
              }}
            />
          </FormLabel>
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>          */}
          <FormLabel htmlFor="resource-description">
            Resource Description or Mission
            <TextField
              size="small"
              id="resource-description"
              onChange={(e) => {
                setResourceDescription(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="resources-available">
            Types of resources available
            <TextField
              size="small"
              id="resources-available"
              onChange={(e) => {
                setResourcesAvailable(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="business-address-1">
            Business address line 1
            <TextField
              size="small"
              id="business-address-1"
              onChange={(e) => {
                setBusinessAddress1(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="business-address-2">
            Business address line 2
            <TextField
              size="small"
              id="business-address-2"
              onChange={(e) => {
                setBusinessAddress2(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="business-city">
            Business city
            <TextField
              size="small"
              id="business-city"
              onChange={(e) => {
                setBusinessCity(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="business-state">
            Business state
            <TextField
              size="small"
              id="business-state"
              onChange={(e) => {
                setBusinessState(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="business-zip-code">
            Business zip code
            <TextField
              size="small"
              id="business-zip-code"
              onChange={(e) => {
                setBusinessZipCode(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="physical-address-1">
            Physical address line 1
            <TextField
              size="small"
              id="physical-address-1"
              onChange={(e) => {
                setPhysicalAddress1(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="physical-address-2">
            Physical address line 2
            <TextField
              size="small"
              id="physical-address-2"
              onChange={(e) => {
                setPhysicalAddress2(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="physical-city">
            Physical city
            <TextField
              size="small"
              id="physical-city"
              onChange={(e) => {
                setPhysicalCity(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="physical-state">
            Physcial state
            <TextField
              size="small"
              id="physical-state"
              onChange={(e) => {
                setPhysicalState(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="physical-zip-code">
            Pyshical zip code
            <TextField
              size="small"
              id="physical-zip-code"
              onChange={(e) => {
                setPhysicalZipCode(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="phone-number">
            Phone number
            <TextField
              size="small"
              id="phone-number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="email">
            Email address
            <TextField
              size="small"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="website">
            Website
            <TextField
              size="small"
              id="website"
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="twitter">
            Twitter
            <TextField
              size="small"
              id="twitter"
              onChange={(e) => {
                setTwitter(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="facebook">
            Facebook
            <TextField
              size="small"
              id="facebook"
              onChange={(e) => {
                setFacebook(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="instagram">
            Instagram
            <TextField
              size="small"
              id="instagram"
              onChange={(e) => {
                setInstagram(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="additional-contact">
            Additional contacts
            <TextField
              size="small"
              id="additional-contact"
              onChange={(e) => {
                setAdditionalContacts(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="venmo">
            Venmo
            <TextField
              size="small"
              id="venmo"
              onChange={(e) => {
                setVenmo(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="paypal">
            Paypal
            <TextField
              size="small"
              id="paypal"
              onChange={(e) => {
                setPaypal(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="cash-app">
            Cash app
            <TextField
              size="small"
              id="cash-app"
              onChange={(e) => {
                setCashApp(e.target.value);
              }}
            />
          </FormLabel>
          <FormLabel htmlFor="zelle">
            Zelle
            <TextField
              size="small"
              id="zelle"
              onChange={(e) => {
                setZelle(e.target.value);
              }}
            />
          </FormLabel>
          <button>Submit</button>
        </FormControl>
      </form>
    </div>
  );
};

export default SubmitResource;

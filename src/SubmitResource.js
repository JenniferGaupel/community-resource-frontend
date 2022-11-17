import { useEffect, useState } from 'react';
import { FormControl, FormLabel, TextField, Button} from '@mui/material';

const SubmitResource = () => {  
    const [resourceName, setResourceName] = useState("");

    async function createResource () {
        const res = await fetch(
            `http://172.23.0.3/api/v1/resource-groups`, {method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify({ resource_name: 'React Hooks POST Request Example' })}
        );
    }

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createResource();
                }}            
            >
                <FormControl>
                    <FormLabel htmlFor="resource-name">
                        Resource Name
                        <TextField size="small"
                            id="resource-name"
                        />                               
                    </FormLabel>
                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>          */}
                    <FormLabel htmlFor="resource-description">
                        Resource Description or Mission
                        <TextField size="small"
                            id="resource-description"
                        />
                    </FormLabel>        
                    <FormLabel htmlFor="resources-available">
                        Types of resources available
                        <TextField size="small"
                            id="resources-available"
                        />
                    </FormLabel>                     
                    <FormLabel htmlFor="donations-accepted">
                        Donations accepted yes or no?
                        <TextField size="small"
                            id="donations-accepted"
                        />
                    </FormLabel>                       
                    <FormLabel htmlFor="business-address-1">
                        Business address line 1
                        <TextField size="small"
                            id="business-address-1"
                        />
                    </FormLabel>  
                    <FormLabel htmlFor="business-address-2">
                        Business address line 2
                        <TextField size="small"
                            id="business-address-2"
                        />
                    </FormLabel>  
                    <FormLabel htmlFor="business-city">
                        Business city
                        <TextField size="small"
                            id="business-city"
                        />
                    </FormLabel>  
                    <FormLabel htmlFor="business-state">
                        Business state
                        <TextField size="small"
                            id="business-state"
                        />
                    </FormLabel>  
                    <FormLabel htmlFor="business-zip-code">
                        Business zip code
                        <TextField size="small"
                            id="business-zip-code"
                        />
                    </FormLabel>
                    <FormLabel htmlFor="physical-address-1">
                        Physical address line 1
                        <TextField size="small"
                            id="physical-address-1"
                        />
                    </FormLabel>  
                    <FormLabel htmlFor="physical-address-2">
                        Physical address line 2
                        <TextField size="small"
                            id="physical-address-2"
                        />
                    </FormLabel>  
                    <FormLabel htmlFor="physical-city">
                        Physical city
                        <TextField size="small"
                            id="physical-city"
                        />
                    </FormLabel>  
                    <FormLabel htmlFor="physical-state">
                        Physcial state
                        <TextField size="small"
                            id="physical-state"
                        />
                    </FormLabel>  
                    <FormLabel htmlFor="physical-zip-code">
                        Pyshical zip code
                        <TextField size="small"
                            id="physical-zip-code"
                        />
                    </FormLabel>                                                                                                           
                    <FormLabel htmlFor="phone-number">
                        Phone number
                        <TextField size="small"
                            id="phone-number"
                        />
                    </FormLabel>    
                    <FormLabel htmlFor="email">
                        Email address
                        <TextField size="small"
                            id="email"
                        />
                    </FormLabel>                    
                    <FormLabel htmlFor="website">
                        Website
                        <TextField size="small"
                            id="website"
                        />
                    </FormLabel>                         
                    <FormLabel htmlFor="twitter">
                        Twitter
                        <TextField size="small"
                            id="twitter"
                        />
                    </FormLabel>                           
                    <FormLabel htmlFor="facebook">
                        Facebook
                        <TextField size="small"
                            id="facebook"
                        />
                    </FormLabel>                            
                    <FormLabel htmlFor="instagram">
                        Instagram
                        <TextField size="small"
                            id="instagram"
                        />
                    </FormLabel>              
                    <FormLabel htmlFor="additional-contact">
                        Additional contacts
                        <TextField size="small"
                            id="additional-contact"
                        />
                    </FormLabel>                      
                    <FormLabel htmlFor="venmo">
                        Venmo
                        <TextField size="small"
                            id="venmo"
                        />
                    </FormLabel>   
                    <FormLabel htmlFor="paypal">
                        Paypal
                        <TextField size="small"
                            id="paypal"
                        />
                    </FormLabel>   
                    <FormLabel htmlFor="cash-app">
                        Cash app
                        <TextField size="small"
                            id="cash-app"
                        />
                    </FormLabel>   
                    <FormLabel htmlFor="zelle">
                        Zelle
                        <TextField size="small"
                            id="zelle"
                        />
                    </FormLabel>                                                                                         
                    <button>Submit</button>
                </FormControl>
            </form>
        </div>
    );
};

export default SubmitResource
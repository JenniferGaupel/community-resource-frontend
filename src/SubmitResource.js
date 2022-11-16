import { FormControl, InputLabel, Input, FormLabel, TextField } from '@mui/material';

const SubmitResource = () => {  

    return (
        <div>
            <FormControl>
                <FormLabel htmlFor="resource-name">
                    Resource Name
                    <TextField size="small"
                        id="resource-name"
                    />
                </FormLabel>
                <FormLabel htmlFor="resource-description">
                    Resource Description or Mission
                    <TextField
                        id="resource-description"
                    />
                </FormLabel>        
                {/* <InputLabel htmlFor="resources-available">
                    Types of resources available
                    <Input
                        id="resources-available"
                    />
                </InputLabel>                     
                <InputLabel htmlFor="donations-accepted">
                    Donations accepted yes or no?
                    <Input
                        id="donations-accepted"
                    />
                </InputLabel>                       
                <InputLabel htmlFor="business-address-1">
                    Business address line 1
                    <Input
                        id="business-address-1"
                    />
                </InputLabel>  
                <InputLabel htmlFor="business-address-2">
                    Business address line 2
                    <Input
                        id="business-address-2"
                    />
                </InputLabel>  
                <InputLabel htmlFor="business-city">
                    Business city
                    <Input
                        id="business-city"
                    />
                </InputLabel>  
                <InputLabel htmlFor="business-state">
                    Business state
                    <Input
                        id="business-state"
                    />
                </InputLabel>  
                <InputLabel htmlFor="business-zip-code">
                    Business zip code
                    <Input
                        id="business-zip-code"
                    />
                </InputLabel>
                <InputLabel htmlFor="physical-address-1">
                    Physical address line 1
                    <Input
                        id="physical-address-1"
                    />
                </InputLabel>  
                <InputLabel htmlFor="physical-address-2">
                    Physical address line 2
                    <Input
                        id="physical-address-2"
                    />
                </InputLabel>  
                <InputLabel htmlFor="physical-city">
                    Physical city
                    <Input
                        id="physical-city"
                    />
                </InputLabel>  
                <InputLabel htmlFor="physical-state">
                    Physcial state
                    <Input
                        id="physical-state"
                    />
                </InputLabel>  
                <InputLabel htmlFor="physical-zip-code">
                    Pyshical zip code
                    <Input
                        id="physical-zip-code"
                    />
                </InputLabel>                                                                                                           
                <InputLabel htmlFor="phone-number">
                    Phone number
                    <Input
                        id="phone-number"
                    />
                </InputLabel>    
                <InputLabel htmlFor="email">
                    Email address
                    <Input
                        id="email"
                    />
                </InputLabel>                    
                <InputLabel htmlFor="website">
                    Website
                    <Input
                        id="website"
                    />
                </InputLabel>                         
                <InputLabel htmlFor="twitter">
                    Twitter
                    <Input
                        id="twitter"
                    />
                </InputLabel>                           
                <InputLabel htmlFor="facebook">
                    Facebook
                    <Input
                        id="facebook"
                    />
                </InputLabel>                            
                <InputLabel htmlFor="instagram">
                    Instagram
                    <Input
                        id="instagram"
                    />
                </InputLabel>              
                <InputLabel htmlFor="additional-contact">
                    Additional contacts
                    <Input
                        id="additional-contact"
                    />
                </InputLabel>                      
                <InputLabel htmlFor="venmo">
                    Venmo
                    <Input
                        id="venmo"
                    />
                </InputLabel>   
                <InputLabel htmlFor="paypal">
                    Paypal
                    <Input
                        id="paypal"
                    />
                </InputLabel>   
                <InputLabel htmlFor="cash-app">
                    Cash app
                    <Input
                        id="cash-app"
                    />
                </InputLabel>   
                <InputLabel htmlFor="zelle">
                    Zelle
                    <Input
                        id="zelle"
                    />
                </InputLabel>                                                                                          */}
                <button>Submit</button>
            </FormControl>
        </div>
    );
};

export default SubmitResource
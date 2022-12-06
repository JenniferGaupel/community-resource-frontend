import { useEffect, useState } from 'react';
import SubmitResourceButton from './SubmitResourceButton';
import { useParams } from 'react-router-dom';

const SingleResourceGroup = () => {  
    const {id} = useParams();
    const [resourceGroup, setResourceGroup] = useState([]);
    useEffect(() => {
        requestResourceGroup();
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
        async function requestResourceGroup() {
        const res = await fetch(
            `http://172.23.0.3/api/v1/resource-groups/${id}`
        );
        const json = await res.json();
        console.log(json);
        setResourceGroup(json);
    }
    
    return (      
        <div>
            {resourceGroup.resource_name}
            <SubmitResourceButton/>
        </div>        
      );
};

export default SingleResourceGroup;
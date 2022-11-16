import { useEffect, useState } from 'react';

const SingleResourceGroup = ({id}) => {  
    const [resourceGroup, setResourceGroup] = useState([]);
    useEffect(() => {
        requestResourceGroup();
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
        id = 1
        async function requestResourceGroup() {
        const res = await fetch(
            `http://172.23.0.3/api/v1/resource-groups/${id}`
        );
        const json = await res.json();
        
        setResourceGroup(json);
    }
    
    return (      
        <div>
            {resourceGroup.resource_name}
        </div>
      );
};

export default SingleResourceGroup
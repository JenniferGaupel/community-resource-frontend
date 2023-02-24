import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SubmitResourceButton from "./SubmitResourceButton";
import { useNavigate } from "react-router-dom";

const ResourceGroupList = () => {
  const [resourceGroups, setResourceGroups] = useState([]);
  const navigate = useNavigate();
  var rows = [];

  resourceGroups.map((rg) =>
    rows.push({
      id: rg.id,
      col1: rg.resource_name,
      col2: rg.resource_description,
      col3: rg.main_resources,
      col4: rg.location,
    })
  );
  const columns = [
    { field: "col1", headerName: "Name", width: 150 },
    { field: "col2", headerName: "Description", width: 150 },
    { field: "col3", headerName: "Resources", width: 150 },
    { field: "col4", headerName: "Location", width: 150 },
  ];

  useEffect(() => {
    requestResourceGroups();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestResourceGroups() {
    const res = await fetch(`http://172.23.0.3/api/v1/resource-groups`);
    const json = await res.json();

    setResourceGroups(json.resource_groups);
  }

  const navigateToResourceDetails: GridEventListener<"rowClick"> = (
    params,
    event,
    details
  ) => {
    var id = params.row.id;
    navigate(`/resource/${id}`);
  };

  return (
    <div id="resource-grid" className="flex items-center justify-center mt-5">
      <div style={{ height: 500, width: "50%" }}>
        <div className="text-center">List of Resources:</div>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={navigateToResourceDetails}
        />
        <SubmitResourceButton />
      </div>
    </div>
  );
};

export default ResourceGroupList;

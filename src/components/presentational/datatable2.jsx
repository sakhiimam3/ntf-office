import DataTable from "react-data-table-component";

const Datatable2 = () => {
    //   const [datalist,setDatalist]=useState([])
    // const Api="https://jsonplaceholder.typicode.com/users";

  const Data = [
    {
      id: 1,
      name: "sakhidad",
      email: "sakhiiimam3411@gmail.com",
      city: "Karachi",
      country: "pakistan",
    },

    {
      id: 2,
      name: "noman",
      email: "nomii@gmail.com",
      city: "Karachi",
      country: "England",
    },
    {
      id: 3,
      name: "Noor",
      email: "Norr@gmail.com",
      city: "istambol",
      country: "Turkey",
    },
    {
      id: 4,
      name: "sikander",
      email: "sikaner@gmail.com",
      city: "dheli",
      country: "India",
    },
    {
      id: 5,
      name: "babar",
      email: "babar@gmail.com",
      city: "moscow",
      country: "Russia",
    },
  ];

  const columns = [
    {
        name: 'id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'city',
        selector: row => row.city,
        sortable: true,
    },
    {
    name: "Country",
    selector: row => row.country,
    sortable: true,
    
    },
];


//   useEffect(() => {
//     fetch(Api)
//       .then((response) => response.json())
//       .then((data) => setDatalist(data))
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <>
   
      <DataTable
        title="Data Table"
        data={Data}
        columns={columns}
      

        
      />
 
    </>
  );
};

export default Datatable2;

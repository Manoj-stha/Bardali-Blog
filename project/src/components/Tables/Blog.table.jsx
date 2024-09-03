import React from 'react'

const Blogtable = () => {
    const columns = [
        {
    
          name : 'manoj',
          selector: row => row.name
        },
        {
          name : 'email',
          selector: row => row.email
        },
        {
          name : 'age',
          selector: row => row.age
        }
      ];
      const data = [
        {
          id: 1,
          name:'Manoj',
          email: 'manoj@gmail.com',
          age: 20
        },
        {
          id: 2,
          name:'Manoj',
          email: 'manoj@gmail.com',
          age: 20
        },
        {
          id: 3,
          name:'Manoj',
          email: 'manoj@gmail.com',
          age: 20
        }
      ];
    
      return (
        <div>
          <DataTable>
            columns = {columns}
            data={data} 
          </DataTable>
          
        </div>
      )
}

export default Blogtable

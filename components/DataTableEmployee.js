"use client"

import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"

const DataTableEmployee = () => {
  const colums = [
    {
      name: "First name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.dateStart,
      sortable: true,
    },
    {
      name: "Departement",
      selector: (row) => row.departement,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipcode,
      sortable: true,
    },
  ]

  useEffect(() => {
    const employees = JSON.parse(window.localStorage.getItem("employee"))
    setFilterResult(employees)
    setEmployee(employees)
    setDataIsLoaded(true)
  }, [])

  const [dataIsLoaded, setDataIsLoaded] = useState(false)
  const [search, setSearch] = useState("")
  const [filterResult, setFilterResult] = useState([])
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    // Return an array of employee which include the search word
    const filteredData = [...employee].filter((item) => {
      if (
        item.firstName.toLowerCase().includes(search.toLowerCase()) ||
        item.lastName.toLowerCase().includes(search.toLowerCase()) ||
        item.departement.toLowerCase().includes(search.toLowerCase()) ||
        item.street.toLowerCase().includes(search.toLowerCase()) ||
        item.city.toLowerCase().includes(search.toLowerCase()) ||
        item.state.toLowerCase().includes(search.toLowerCase()) ||
        item.zipcode.toLowerCase().includes(search.toLowerCase()) ||
        item.dateStart.toLowerCase().includes(search.toLowerCase()) ||
        item.dateBirth.toLowerCase().includes(search.toLowerCase())
      ) {
        return item
      }
    })
    setFilterResult(filteredData)
  }, [search, employee])

  return (
    <>
      {!dataIsLoaded ? (
        <p>Loading</p>
      ) : (
        <DataTable
          columns={colums}
          data={filterResult}
          pagination
          fixedHeader
          subHeader
          subHeaderComponent={
            <input
              className="border-2 rounded"
              type="text"
              placeholder="Search ..."
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
              }}
            />
          }
        />
      )}
    </>
  )
}

export default DataTableEmployee

"use client"

import Input from "@/components/Input"
import Toast from "@/components/Toast"
import { useEffect, useState } from "react"

export default function Home() {
  const arrayState = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ]
  const arrayDep = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ]

  // Return all state option
  const optionlistState = arrayState.map((state, index) => {
    return (
      <option key={index} value={state}>
        {state}
      </option>
    )
  })

  // Return all departement option
  const optionlistDep = arrayDep.map((dep, index) => {
    return (
      <option key={index} value={dep}>
        {dep}
      </option>
    )
  })

  const submit = () => {
    const data = {
      firstName,
      lastName,
      dateBirth,
      dateStart,
      street,
      city,
      state,
      zipcode,
      departement,
    }

    if (typeof window !== "undefined") {
      // Put all the employee info in local storage

      const getEmployees =
        JSON.parse(window.localStorage.getItem("employee")) || []

      getEmployees.push(data)

      window.localStorage.setItem("employee", JSON.stringify(getEmployees))
    }
    setToastIsOn(true)
    setFirstName("")
    setLastName("")
    setDateBirth("")
    setDateStart("")
    setStreet("")
    setCity("")
    setState("")
    setZipcode("")
    setDepartement("")
  }

  const [toastIsOn, setToastIsOn] = useState(false)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dateBirth, setDateBirth] = useState("")
  const [dateStart, setDateStart] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("Alabama")
  const [zipcode, setZipcode] = useState("")
  const [departement, setDepartement] = useState("Legal")

  return (
    <>
      <form
        className="max-w-xl mx-auto my-5 flex flex-col"
        onSubmit={(event) => {
          event.preventDefault()
          submit()
        }}
      >
        <Input label="First Name" id="firstName">
          <input
            className="border-2 p-2 rounded"
            type="text"
            id="firstName"
            value={firstName}
            placeholder="John"
            required
            onChange={(event) => {
              setFirstName(event.target.value)
            }}
          />
        </Input>
        <Input label="Last Name" id="lastName">
          <input
            className="border-2 p-2 rounded"
            type="text"
            id="lastName"
            value={lastName}
            placeholder="Doe"
            required
            onChange={(event) => {
              setLastName(event.target.value)
            }}
          />
        </Input>
        <Input label="Date of Birth" id="dateBirth">
          <input
            className="border-2 p-2 rounded max-w-[200px]"
            type="date"
            id="dateBirth"
            value={dateBirth}
            required
            onChange={(event) => {
              setDateBirth(event.target.value)
            }}
          />
        </Input>
        <Input label="Start Date" id="dateStart">
          <input
            className="border-2 p-2 rounded max-w-[200px]"
            type="date"
            id="dateStart"
            value={dateStart}
            required
            onChange={(event) => {
              setDateStart(event.target.value)
            }}
          />
        </Input>
        <div className="border-2 my-2 p-2">
          <h3 className="font-medium -mx-2">Adress</h3>
          <Input label="Street" id="street">
            <input
              className="border-2 p-2 rounded"
              type="text"
              id="street"
              value={street}
              placeholder="5 rue openclassroom"
              required
              onChange={(event) => {
                setStreet(event.target.value)
              }}
            />
          </Input>
          <Input label="City" id="city">
            <input
              className="border-2 p-2 rounded"
              type="text"
              id="city"
              value={city}
              placeholder="New York"
              required
              onChange={(event) => {
                setCity(event.target.value)
              }}
            />
          </Input>
          <Input label="State" id="state">
            <select
              className="border-2 p-2 rounded max-w-[200px] cursor-pointer"
              id="state"
              value={state}
              onChange={(event) => {
                setState(event.target.value)
              }}
            >
              {optionlistState}
            </select>
          </Input>
          <Input label="Zip Code" id="zipCode">
            <input
              className="border-2 p-2 rounded max-w-[150px]"
              type="number"
              id="zipCode"
              value={zipcode}
              required
              onChange={(event) => {
                setZipcode(event.target.value)
              }}
            />
          </Input>
        </div>

        <Input label="Departement" id="departement">
          <select
            className="border-2 p-2 rounded max-w-[200px] cursor-pointer"
            id="departement"
            value={departement}
            onChange={(event) => {
              setDepartement(event.target.value)
            }}
          >
            {optionlistDep}
          </select>
        </Input>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg p-2 mt-8 rounded "
          type="submit"
        >
          Create employee
        </button>
      </form>
      {toastIsOn && <Toast setToastIsOn={setToastIsOn} />}
    </>
  )
}

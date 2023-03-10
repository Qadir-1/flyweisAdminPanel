/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const users = [
  {
 name : 'Arpan' , 
 email : 'Arpan@gmail.com' ,
 phone : 4512369870 , 
 city : 'Delhi'
 
  },

];

const Customers = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users
          </span>
        </div>
      </section>
=
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "2%",
            scrollBehavior: "smooth",
            overflow: "scroll",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th> Phone Number </th>
              <th> City </th>
              <th> Gender </th>
              <th> Age  </th>
              <th> Website </th>
              <th> Rating </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((i, index) => (
              <tr key={index}>
                <td> {i.name} </td>
                <td> {i.phone} </td>
                <td> {i.email} </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <AiFillDelete
                      color="red"
                      cursor="pointer"
                      onClick={() =>
                        toast.success("User Deleted SuccessFully")
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

    </>
  );
};

export default HOC(Customers);

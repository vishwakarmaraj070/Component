import React from "react";
import FieldSet from "../../master/component/FieldSet";
import {
  Table,
  TableFooter,
  TableBody,
  TableHeader,
} from "../../component/Table";
import { TableEditButton, TableDeleteButton } from "../../component/Button";

const index = (props) => {
  return (
    <div className="page-container">
      <div className="mb-3">
        <FieldSet legend="Tables">
          <div className="row-container">
            <div className="component-discription">
              <Table>
                <TableHeader>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile </th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </TableHeader>
                <TableBody>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                </TableBody>
                <TableFooter>
                  <tr>
                    <th colSpan="3">Name</th>
                    <th colSpan="2">Status</th>
                  </tr>
                </TableFooter>
              </Table>
              <div className="discription">
                <pre>{`<Table>
                <TableHeader>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile </th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </TableHeader>
                <TableBody>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                </TableBody>
                <TableFooter>
                  <tr>
                    <th colSpan="3">Name</th>
                    <th colSpan="2">Status</th>
                  </tr>
                </TableFooter>
              </Table>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <div className="discription">
                <pre>{` <Input
                size="sm"
                required
                className="input2"
                error="Field required"
              />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Table small>
                <TableHeader>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile </th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </TableHeader>
                <TableBody>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>
                      <TableEditButton />
                      <TableDeleteButton />
                    </td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>
                      <TableEditButton />
                      <TableDeleteButton />
                    </td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>
                      <TableEditButton />
                      <TableDeleteButton />
                    </td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>
                      <TableEditButton />
                      <TableDeleteButton />
                    </td>
                  </tr>
                </TableBody>
                <TableFooter>
                  <tr>
                    <th colSpan="4">Name</th>
                    <th colSpan="2">Status</th>
                  </tr>
                </TableFooter>
              </Table>
              <div className="discription">
                <pre>{`<Table small>
                <TableHeader>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile </th>
                    <th>Department</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </TableHeader>
                <TableBody>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>
                    <TableEditButton />
                    <TableDeleteButton />
                  </td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>
                    <TableEditButton />
                    <TableDeleteButton />
                  </td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>
                    <TableEditButton />
                    <TableDeleteButton />
                  </td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile </td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>
                    <TableEditButton />
                    <TableDeleteButton />
                  </td>
                  </tr>
                </TableBody>
                <TableFooter>
                  <tr>
                    <th colSpan="4">Name</th>
                    <th colSpan="2">Status</th>
                  </tr>
                </TableFooter>
              </Table>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <div className="discription">
                <pre>{` <Input
                size="sm"
                required
                className="input2"
                error="Field required"
              />`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
    </div>
  );
};

index.propTypes = {};

export default index;

import { gqlClient } from "apis/client";
import { listZellerCustomersByRoleQuery, listZellerCustomersQuery } from "apis/queries";
import { Customer, Role } from "types/customerType";
import { listZellerCustomers } from "../../mock-data/listZellerCustomers";

class CustomerApi {


  async listCustomersByRole(role: Role): Promise<Customer[]> {

    try {

      const res = await fetch('http://192.168.1.3:9002/graphql', {
        method: 'POST',
        body: JSON.stringify({ query: listZellerCustomersQuery, }),
        headers: {
          'Content-Type': 'application/json',
        },

      });

      const jsonResponse = await res.json()

      const items: Customer[] = (jsonResponse?.data?.listZellerCustomers?.items ?? []);
      return items.filter((c) => c?.role === role);
    } catch (error) {

      //Fallback api response since local server and aws amplify is not avaialble
      console.log("ERR", error);
      const items: Customer[] = (listZellerCustomers?.data?.listZellerCustomers?.items ?? []);
      return items.filter((c) => c?.role === role);
    }


  }

  // async listCustomersByRole(role: Role): Promise<Customer[]> {

  //   try {
  //     const res = (await gqlClient.graphql({
  //       query: listZellerCustomersByRoleQuery,
  //       authMode: 'apiKey',
  //       variables: { role },
  //     }));

  //     const items: Customer[] = (res?.data?.listZellerCustomers?.items ?? []);
  //     return items.filter(Boolean);
  //   } catch {
  //     //fallback filter
  //     const res = (await gqlClient.graphql({
  //       query: listZellerCustomersQuery,
  //       authMode: 'apiKey',
  //     }));

  //     const items: Customer[] = (res?.data?.listZellerCustomers?.items ?? []);
  //     return items.filter(Boolean).filter((c) => c?.role === role);
  //   }
  // }
}

export default new CustomerApi()
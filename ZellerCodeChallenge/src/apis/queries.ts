export const listZellerCustomersQuery = `
                  query {
                    listZellerCustomers {
                      items {
                        name
                        id
                        email
                        role
                      }
                    }
                  }`;

export const listZellerCustomersByRoleQuery = `
  query ListZellerCustomersByRole($role: String!) {
    listZellerCustomers(filter: { role: { eq: $role } }) {
      items {
        name
        id
        email
        role
      }
    }
  }`;
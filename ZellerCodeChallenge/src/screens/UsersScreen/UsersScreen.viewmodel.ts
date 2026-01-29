import { useEffect, useState } from "react";
import { Customer, Role } from "../../types/customerType";
import CustomerApi from "apis/CustomerApi";
import { useTheme } from "contexts/ThemeContext";

const useViewmodel = () => {
    const [selectedRole, setSelectedRole] = useState<Role>(Role.Admin)
    const [rolesList, setRolesList] = useState<Array<string>>(Object.values(Role))
    const [usersList, setUsersList] = useState<Array<Customer>>([])



    console.log("ROLES", selectedRole, usersList);

    const onPressRole = (value) => {
        setSelectedRole(value)
    }

    useEffect(() => {
        const run = async () => {
            const res = await CustomerApi.listCustomersByRole(selectedRole)
            setUsersList(res)
        }

        run()
    }, [selectedRole])
    return {
        rolesList,
        usersList,
        selectedRole,
        setSelectedRole,
        onPressRole
    }
};

export default useViewmodel;
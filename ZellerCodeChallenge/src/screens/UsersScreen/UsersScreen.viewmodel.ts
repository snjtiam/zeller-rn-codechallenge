import { useEffect, useState } from "react";
import { Customer, Role } from "../../types/customerType";
import CustomerApi from "apis/CustomerApi";
import { ToastAndroid } from "react-native";
import { t } from "i18next";

const useViewmodel = () => {
    const [selectedRole, setSelectedRole] = useState<Role>(Role.Admin)
    const [rolesList, setRolesList] = useState<Array<string>>(Object.values(Role))
    const [usersList, setUsersList] = useState<Array<Customer>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onPressRole = (value) => {
        setSelectedRole(value)
    }

    const onRefresh = async () => {
        try {
            setIsLoading(true)
            const res = await CustomerApi.listCustomersByRole(selectedRole)
            setUsersList(res)
        } catch (error) {
            console.log("ERR", error);
            ToastAndroid.show(t("common.error.message"), 1000)
        }
        finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        onRefresh()
    }, [selectedRole])
    return {
        isLoading,
        rolesList,
        usersList,
        selectedRole,
        setSelectedRole,
        onPressRole,
        onRefresh
    }
};

export default useViewmodel;
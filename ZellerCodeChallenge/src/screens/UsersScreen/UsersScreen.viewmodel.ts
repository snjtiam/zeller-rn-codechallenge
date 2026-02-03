import { useEffect, useMemo, useState } from "react";
import { Customer, Role } from "../../types/customerType";
import CustomerApi from "apis/CustomerApi";
import { ToastAndroid } from "react-native";
import { t } from "i18next";

const useViewmodel = () => {
    const [selectedRole, setSelectedRole] = useState<Role>(Role.Admin)
    const [rolesList, setRolesList] = useState<Array<string>>(Object.values(Role))
    const [usersList, setUsersList] = useState<Array<Customer>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchKeyword, setSearchKeyword] = useState<string>("")

    const onPressRole = (value) => {
        setSelectedRole(value)
    }

    const onRefresh = async () => {
        try {
            setIsLoading(true)
            setUsersList([])
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

    const onChangeSearchValue = (value) => {
        setSearchKeyword(value)
    }



    const filteredUsers = useMemo(() => {
        const keyword = searchKeyword.trim().toLowerCase()
        return usersList.filter(user =>
            user.name.toLowerCase().includes(keyword)
        )

    }, [usersList, searchKeyword])



    useEffect(() => {
        onRefresh()
    }, [selectedRole])
    return {
        isLoading,
        rolesList,
        usersList: filteredUsers,
        selectedRole,
        setSelectedRole,
        onPressRole,
        onRefresh,
        onChangeSearchValue,
    }
};

export default useViewmodel;
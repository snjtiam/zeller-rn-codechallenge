import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import UsersScreen from 'screens/UsersScreen/UsersScreen';
import { ThemeProvider } from 'contexts/ThemeContext';


jest.mock('apis/CustomerApi', () => ({
    listCustomersByRole: jest.fn((role) => {
        const items =
            require('../mocks/mockListZellerCustomers').mockListZellerCustomers.data.listZellerCustomers.items;
        return Promise.resolve(items.filter((customer) => customer.role === role));
    }),
}));

test('renders users and switches role filter', async () => {
    const { findByText, getByText } = render(
        <ThemeProvider>
            <UsersScreen />
        </ThemeProvider>
    );

    expect(getByText('User Types')).toBeTruthy();
    expect(getByText('Admin Users')).toBeTruthy();

    expect(await findByText('TestCustomer2')).toBeTruthy();

    fireEvent.press(getByText('Manager'));
    expect(await findByText('Manager Users')).toBeTruthy();
    expect(await findByText('TestCustomer1')).toBeTruthy();
});

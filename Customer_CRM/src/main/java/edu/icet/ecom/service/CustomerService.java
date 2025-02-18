package edu.icet.ecom.service;

import edu.icet.ecom.dto.Customer;

import java.util.List;

public interface CustomerService {
    void addCustomer(Customer customer);
    List<Customer> getAll();
    void deleteCustomer(Integer id);
    void updateCustomer(Customer customer);
    Customer searchCustomer(Integer id);
    List<Customer> searchByName(String name);
    List<Customer> searchByAddress(String address);
    List<Customer> searchBySalary(Double salary);

}

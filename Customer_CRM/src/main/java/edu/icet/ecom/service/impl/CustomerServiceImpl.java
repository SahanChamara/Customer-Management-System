package edu.icet.ecom.service.impl;

import edu.icet.ecom.config.Config;
import edu.icet.ecom.dto.Customer;
import edu.icet.ecom.entity.CustomerEntity;
import edu.icet.ecom.repository.CustomerRepository;
import edu.icet.ecom.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper mapper;


    @Override
    public void addCustomer(Customer customer) {
        customerRepository.save(mapper.map(customer, CustomerEntity.class));
    }

    @Override
    public List<Customer> getAll() {
        List<Customer> customerList = new ArrayList<>();
        for (CustomerEntity customerEntity : customerRepository.findAll()) {
            Customer map = mapper.map(customerEntity, Customer.class);
            customerList.add(map);
        }
        return customerList;
    }

    @Override
    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public void updateCustomer(Customer customer) {
        customerRepository.save(mapper.map(customer, CustomerEntity.class));
    }

    @Override
    public Customer searchCustomer(Integer id) {
        if(customerRepository.findById(id).isPresent()){
            return mapper.map(customerRepository.findById(id), Customer.class);
        }
        return null;
    }

    @Override
    public List<Customer> searchByName(String name) {
        List<Customer> customerList = new ArrayList<>();
        for (CustomerEntity customerEntity : customerRepository.findByName(name)) {
            customerList.add(mapper.map(customerEntity, Customer.class));
        }
        return customerList;
    }

    @Override
    public List<Customer> searchByAddress(String address) {
        List<Customer> customerList = new ArrayList<>();
        for(CustomerEntity customerEntity : customerRepository.findByAddress(address)){
            customerList.add(mapper.map(customerEntity, Customer.class));
        }
        return customerList;
    }

    @Override
    public List<Customer> searchBySalary(Double salary) {
        List<Customer> customerList = new ArrayList<>();
        for(CustomerEntity customerEntity : customerRepository.findBySalary(salary)){
            customerList.add(mapper.map(customerEntity, Customer.class));
        }
        return customerList;
    }
}

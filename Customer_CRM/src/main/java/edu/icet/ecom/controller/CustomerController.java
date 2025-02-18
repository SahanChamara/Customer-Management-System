package edu.icet.ecom.controller;

import edu.icet.ecom.dto.Customer;
import edu.icet.ecom.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin
@Slf4j
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/add")
    public void addCustomer(@RequestBody Customer customer){
        customerService.addCustomer(customer);
    }

    @GetMapping("/getAll")
    public List<Customer> getAll(){
        return customerService.getAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCustomer(@PathVariable Integer id){
        customerService.deleteCustomer(id);
    }

    @PutMapping("/update")
    public void updateCustomer(@RequestBody Customer customer){
        customerService.updateCustomer(customer);
    }

    @GetMapping("/search/{id}")
    public Customer searchCustomer(@PathVariable Integer id){
        return customerService.searchCustomer(id);
    }

    @GetMapping("/searchByName/{name}")
    public List<Customer> searchByName(@PathVariable String name){
        return customerService.searchByName(name);
    }

    @GetMapping("/searchByAddress/{address}")
    public List<Customer> searchByAddress(@PathVariable String address){
        return customerService.searchByAddress(address);
    }

    @GetMapping("/searchBySalary/{salary}")
    public List<Customer> searchBySalary(@PathVariable Double salary){
        return customerService.searchBySalary(salary);
    }
}

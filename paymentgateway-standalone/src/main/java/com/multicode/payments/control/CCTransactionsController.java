package com.multicode.payments.control;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.multicode.payments.domain.*;
import com.multicode.payments.exception.*;
import com.multicode.payments.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Tag;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import java.sql.Date;
import java.time.*;
import java.util.*;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin
@Api(value = "/api/payment",  description = "Get and retrieve payment records")
public class CCTransactionsController {

    @Autowired
    CCUtilsService service;

    @ResponseBody
    @GetMapping(produces={MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @ApiOperation(value = "Retrieves payments",
            notes = "Use order=xxx or country=xxx as a query string to restrict the results, or leave blank for all records",
            response = CreditCardTransaction.class,
            responseContainer = "List")
    public Object mappingFunctionForGetAllAndSearch(
            @RequestParam(value ="order", required = false) String orderId,
            @RequestParam(value ="country", required = false) String country) {
        if(country != null) {
            return getForACountry(country);
        }
        else if (orderId != null) {
            return getForAnOrder(orderId);
        }
        else {
            return getAll();
        }
    }

    public List<CreditCardTransaction> getAll() {
        return service.getAllTransactions();
    }

    public List<CreditCardTransaction> getForAnOrder(String orderId) {
        return service.getAllForAnOrder(orderId);
    }

    public List<CreditCardTransaction> getForACountry(String country) {
        return service.getAllForACountry(country);
    }

    @ResponseBody
    @GetMapping(value="/{id}",  produces={MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    @ApiOperation(value = "Retrieves a specific payment",
            notes = "Provide the payment record ID (not the order ID)",
            response = CreditCardTransaction.class)
    public CreditCardTransaction getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    @ResponseBody
    @PostMapping(produces={MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public CreditCardTransaction addTransaction(@RequestBody CreditCardTransactionDTO newTransaction) {

        try {
            return service.saveTransaction(new CreditCardTransaction(newTransaction));
        }
        catch (Exception e) {
            throw new BadRequestException(e.getMessage());
        }
    }

    @ResponseBody
    @PutMapping(value="/{id}", produces={MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public CreditCardTransaction updateTransaction(@PathVariable Integer id, @RequestBody HashMap<String, Object> updatedTransaction) {

        try {
            return service.updateTransaction(id, updatedTransaction);
        }
        catch (Exception e) {
            e.printStackTrace();
            throw new BadRequestException(e.getMessage());
        }
    }
}

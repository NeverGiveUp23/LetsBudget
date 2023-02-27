package com.felix.security.demo;

import com.felix.security.budget.Budget;
import com.felix.security.budget.BudgetRepository;
import com.felix.security.budget.BudgetService;
import com.felix.security.user.User;
import com.felix.security.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class DemoController {
    @Autowired
    private BudgetRepository budgetRepo;

    @Autowired
    private BudgetService budgetService;
    @Autowired
    private UserRepository userRepo;

    @GetMapping
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hello From Secured Endpoint");
    }

    @GetMapping("/budget")
    public List<Budget> findAllBudgets(){
        try {
            return budgetService.findAllBudgets();
        } catch(Exception e) {
            throw new RuntimeException("Failed to retrieve budgets", e);
        }
    }

//    @GetMapping("/budget/{userId}")
//    public List<Budget> findAllBudgetsByUserId(@PathVariable("userId") User userId) {
//        return budgetRepo.findAllByUserId(userId);
//    }

    @PostMapping("/budget")
    public Budget createBudget(@RequestBody Budget budget) {
        return budgetRepo.save(budget);
    }



    @PostMapping("/budgets")
    public Budget createBudget(@RequestBody Budget budget, @RequestParam(name = "userId") Integer userId) {
        if(userId == null){
            throw new IllegalArgumentException("User ID Cannot Be Null");
        }
        return budgetService.createBudget(budget, userId);
    }

    @DeleteMapping("/budget/{id}")
    public ResponseEntity deleteBudget(@PathVariable("id") Integer id){
        budgetRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}

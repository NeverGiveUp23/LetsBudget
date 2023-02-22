package com.felix.security.demo;

import com.felix.security.budget.Budget;
import com.felix.security.budget.BudgetRepository;
import com.felix.security.user.User;
import com.felix.security.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/api")
public class DemoController {
    @Autowired
    private BudgetRepository budgetRepo;
    @Autowired
    private UserRepository userRepo;

    @GetMapping
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hello From Secured Endpoint");
    }

    @GetMapping("/budget")
    public List<Budget> findAllBudgets(){

        return budgetRepo.findAll();
    }

    @GetMapping("/budget/{userId}")
    public List<Budget> findAllBudgetsByUserId(@PathVariable("userId") User userId) {
        return budgetRepo.findAllBy_userId(userId);
    }

    @PostMapping("/budgets/{userId}")
    public Budget createBudget(@RequestBody Budget budget, @PathVariable Integer userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id " + userId));
        budget.set_user(user);
        return budgetRepo.save(budget);
    }

    @DeleteMapping("/budget/{id}")
    public ResponseEntity deleteBudget(@PathVariable("id") Integer id){
        budgetRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}

package com.felix.security.budget;

import com.felix.security.user.User;
import com.felix.security.user.UserRepository;
import com.felix.security.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {
    @Autowired
    private BudgetRepository budgetRepo;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

// Find all budgets
    public List<Budget> findAllBudgets(){
        return budgetRepo.findAll();
    }

//    Create budget
    public Budget createBudget(Budget budget, Integer userId){
        Optional<User> user = userRepository.findById(userId);
        if(user.isEmpty()){
            throw new IllegalArgumentException("Invalid User Id: " + userId);
        }
        budget.setUser(user.get());
        return budgetRepo.save(budget);
    }

    public Budget addBudget(double carPayment,  double entertainment, double housing,  double misc,  String month,  double utilities,  long usersId){
        return budgetRepo.createBudget(carPayment, entertainment, housing, misc, month, utilities, usersId);
    }

}

package com.felix.security.budget;

import com.felix.security.user.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BudgetRepository extends JpaRepository<Budget, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO budget(car_payment, entertainment, housing, misc, month, utilities, users_id) VALUES (:carPayment, :entertainment, :housing, :misc, :month, :utilities, :usersId) RETURNING *", nativeQuery = true)
    public Budget createBudget(@Param("carPayment") double carPayment, @Param("entertainment") double entertainment, @Param("housing") double housing, @Param("misc") double misc, @Param("month") String month, @Param("utilities") double utilities, @Param("usersId") long usersId);

}
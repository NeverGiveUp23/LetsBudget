package com.felix.security.budget;

        import com.felix.security.user.User;
        import jakarta.persistence.*;
        import lombok.AllArgsConstructor;
        import lombok.Builder;
        import lombok.Data;
        import lombok.NoArgsConstructor;
        import org.springframework.format.annotation.DateTimeFormat;

        import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "budgets")
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String month;
    private Integer housing;
    private Integer carPayment;
    private Integer misc;
    private Integer entertainment;
    private Integer utilities;


    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    @PrePersist
    protected void onCreated() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;


    public Budget(String month, Integer housing, Integer carPayment, Integer misc, Integer entertainment, Integer utilities, User users){
        this.month = month;
        this.housing = housing;
        this.carPayment = carPayment;
        this.misc = misc;
        this.entertainment = entertainment;
        this.utilities = utilities;
        this.user = users;
    }

}

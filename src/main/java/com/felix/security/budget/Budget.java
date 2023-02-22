package com.felix.security.budget;

        import com.felix.security.user.User;
        import jakarta.persistence.*;
        import lombok.AllArgsConstructor;
        import lombok.Builder;
        import lombok.Data;
        import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "budget")
public class Budget {
    @Id
    @GeneratedValue
    private Integer Id;
    private String month;
    private Integer housing;
    private Integer carPayment;
    private Integer misc;
    private Integer entertainment;
    private Integer utilities;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "_user")
    private User _user;

    public Budget(String month, Integer housing, Integer carPayment, Integer misc,Integer entertainment, Integer utilities, User user){
        this.month = month;
        this.housing = housing;
        this.carPayment = carPayment;
        this.misc = misc;
        this.entertainment = entertainment;
        this.utilities = utilities;
        this._user = user;
    }

}

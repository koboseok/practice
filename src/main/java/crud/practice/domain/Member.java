package crud.practice.domain;



import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Member {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private String pwd;

    @Column
    private String f_name;

    @Column
    private String l_name;

    @Column
    private int age;

    @Column
    private int salary;

}



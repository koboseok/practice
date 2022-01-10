package crud.practice.controller;

import crud.practice.domain.Member;
import crud.practice.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController /* json <api Controller> */
@RequestMapping("/users")
public class MemberController {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberController(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    /* list */
    @GetMapping
    public List<Member> list() {
        return memberRepository.findAll();
    }

    /* insert */
    @PostMapping
    public void insert(@RequestBody Member member) {
        memberRepository.save(member);
    }

    /* select id */
    @GetMapping("/{id}")
    public Optional<Member> fetchUserByID(@PathVariable long id) {
        return memberRepository.findById(id);
    }

    /* update */
    @PutMapping("/{id}")
    public void update(@PathVariable long id, @RequestBody Member member) {

        Optional<Member> updateMember = memberRepository.findById(id);

        updateMember.ifPresent(selectMember -> {
            selectMember.setF_name(member.getF_name());
            selectMember.setL_name(member.getL_name());
            selectMember.setAge(member.getAge());
            selectMember.setSalary(member.getSalary());

            memberRepository.save(selectMember);
        });
    }

    /* delete */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {

        Optional<Member> member = memberRepository.findById(id);
        /*member.ifPresent(selectMember->{
            memberRepository.delete(selectMember);
        });*/
        member.ifPresent(memberRepository::delete);
    }

}

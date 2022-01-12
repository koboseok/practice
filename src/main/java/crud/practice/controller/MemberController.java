package crud.practice.controller;

import crud.practice.domain.Member;
import crud.practice.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor // 생성자 주입
@CrossOrigin(origins = "*", maxAge = 3600) //  기본적으로 '모든 도메인, 모든 요청방식' 에 대해 허용 한다는 뜻이다.
@RestController /* json <api Controller> */
@RequestMapping("/users")
public class MemberController {

    private final MemberService memberService;

    /* list */
    @GetMapping
    public List<Member> list() {
        return memberService.list();
    }

    /* insert */
    @PostMapping
    public void insert(@RequestBody Member member) {
        memberService.save(member);
    }

    /* select id */
    @GetMapping("/{id}")
    public Optional<Member> fetchUserByID(@PathVariable long id) {
        return memberService.findById(id);
    }

    /* update */
    @PutMapping("/{id}")
    public void update(@RequestBody Member member) {
        memberService.save(member);
    }

    /* delete */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        memberService.delete(id);
    }

}

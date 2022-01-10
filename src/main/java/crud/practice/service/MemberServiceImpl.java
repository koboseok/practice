package crud.practice.service;

import crud.practice.domain.Member;
import crud.practice.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public List<Member> memberList() throws Exception {
        return null;
    }

    @Override
    public void insert(Member member) throws Exception {

    }

    @Override
    public Optional<Member> fetchUserById(long id) throws Exception {
        return Optional.empty();
    }

    @Override
    public Member update(Member member) throws Exception {
        return null;
    }

    @Override
    public int delete(int id) throws Exception {
        return 0;
    }
}

package crud.practice.service;

import crud.practice.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberService {

    List<Member> memberList() throws Exception;

    void insert(Member member) throws Exception;

    Optional<Member> fetchUserById(long id) throws Exception;

    Member update(Member member) throws Exception;

    int delete(int id) throws Exception;
}

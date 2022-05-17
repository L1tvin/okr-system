package com.okr.repository;

import com.okr.model.OKR;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OKRRepository extends JpaRepository<OKR, Long> {
}

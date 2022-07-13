package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.ISP;

@Repository
public interface IspRepository extends JpaRepository<ISP, Long> {

}

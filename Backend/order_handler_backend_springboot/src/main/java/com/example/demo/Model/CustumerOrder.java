package com.example.demo.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class CustumerOrder {

	@Id
	@GeneratedValue
	private String orderNum;
	
	private String lineSpeed;
	
	@Temporal(TemporalType.DATE)
	private Date orderDate;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "installation_date")
	private Date instDate;

	public String getOrderNum() {
		return orderNum;
	}

	public void setOrderNum(String orderNum) {
		this.orderNum = orderNum;
	}

	public String getLineSpeed() {
		return lineSpeed;
	}

	public void setLineSpeed(String lineSpeed) {
		this.lineSpeed = lineSpeed;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Date getInstDate() {
		return instDate;
	}

	public void setInstDate(Date instDate) {
		this.instDate = instDate;
	}
	
	
}

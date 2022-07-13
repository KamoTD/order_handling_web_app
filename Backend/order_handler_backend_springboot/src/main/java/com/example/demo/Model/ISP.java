package com.example.demo.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ISP {
	
	@Id
	@GeneratedValue
	private long custId;

	private String refNum;
	
	private String ispName;
	
	@ManyToOne(targetEntity = CustumerOrder.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "refNum_FK")
	private CustumerOrder order;
	
	public CustumerOrder getOrder() {
		return order;
	}

	public void setOrder(CustumerOrder order) {
		this.order = order;
	}

	public String getRefNum() {
		return refNum;
	}

	public void setRefNum(String refNum) {
		this.refNum = refNum;
	}

	public long getCustId() {
		return custId;
	}

	public void setCustId(long custId) {
		this.custId = custId;
	}

	public String getIspName() {
		return ispName;
	}

	public void setIspName(String ispName) {
		this.ispName = ispName;
	}
	
}

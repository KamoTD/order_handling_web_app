package com.example.demo.Model;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long subId;
	
	private String firstName;
	
	private String lastName;
	
	private String estateName;
	
	@Column(name = "unit_no")
	private String unitNum;
	
	@Column(name = "email_address")
	private String emailId;
	
	private String status;
	
	private int contactNo;
	
	@ManyToOne(targetEntity = ISP.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "subId_FK")
	private ISP isp;
	
	public ISP getIsp() {
		return isp;
	}

	public void setIsp(ISP isp) {
		this.isp = isp;
	}

		//Temporary
		private String lineSpeed;
		
		@Temporal(TemporalType.DATE)
		private Date orderDate;
		
		@Column(name = "installation_date")
		@Temporal(TemporalType.DATE)
		private Date instDate;
		
		@Column(name = "referenceNo")
		private String refNum;
		
		private String ispName;

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

		public String getRefNum() {
			return refNum;
		}

		public void setRefNum(String refNum) {
			this.refNum = refNum;
		}
		////////////////////////////////////////////

		public String getIspName() {
			return ispName;
		}

		public void setIspName(String ispName) {
			this.ispName = ispName;
		}

	public long getSubId() {
		return subId;
	}

	public void setSubId(long subId) {
		this.subId = subId;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getUnitNum() {
		return unitNum;
	}
	
	public void setUnitNum(String unitNum) {
		this.unitNum = unitNum;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public int getContactNo() {
		return contactNo;
	}

	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}
	
	public String getEstateName() {
		return estateName;
	}

	public void setEstateName(String estateName) {
		this.estateName = estateName;
	}

}

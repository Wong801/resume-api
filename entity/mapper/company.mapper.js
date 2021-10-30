class Company {
  constructor(companyName, companySite, startDate, endDate, position, desc) {
    this.companyName = companyName,
    this.companySite = companySite
    this.startDate = startDate,
    this.endDate = endDate,
    this.position = position,
    this.desc = desc,
    this.updatedAt = Date.now()
  }
}

module.exports = Company;

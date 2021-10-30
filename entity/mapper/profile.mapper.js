class Profile {
  constructor(name, bornDate, bornPlace, image, age, lastPosition, lastCompany) {
    this.name = name,
    this.bornDate = bornDate,
    this.bornPlace = bornPlace,
    this.image = image,
    this.age = age,
    this.lastPosition = lastPosition,
    this.lastCompany = lastCompany,
    this.updatedAt = Date.now()
  }
}

module.exports = Profile;

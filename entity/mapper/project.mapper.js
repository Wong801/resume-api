class Project {
  constructor(title, desc, link, image, lang) {
    this.title = title,
    this.desc = desc
    this.link = link,
    this.image = image,
    this.lang = lang,
    this.updatedAt = Date.now()
  }
}

module.exports = Project;

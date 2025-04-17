
class InputForm {
  constructor(page) {
    this.page = page;
  }

  async enterName(name) {
    await this.page.getByRole("textbox", { name: "name" }).fill(name);
  }

  async enterEmail(email) {
    await this.page.getByRole("textbox", { name: "email" }).fill(email);
  }

  async enterPassword(password) {
    await this.page.getByPlaceholder("Password").fill(password);
  }

  async enterCompany(company) {
    await this.page.getByRole("textbox", { name: "company" }).fill(company);
  }

  async enterWebsite(website) {
    await this.page.getByPlaceholder("Website").fill(website);
  }

  async selectCountry() {
    await this.page.locator('//*[@id="seleniumform"]/div[3]/div[1]/select')
      .selectOption("United States");
  }

  async enterCity(city) {
    await this.page.getByPlaceholder("City").fill(city);
  }

  async enterAddress1(address1) {
    await await this.page.getByPlaceholder("Address 1").fill(address1);
  }

  async enterAddress2(address2) {
    await await this.page.getByPlaceholder("Address 2").fill(address2);
  }

  async enterState(state) {
    await this.page.getByPlaceholder("State").fill(state);
  }

  async enterZipCode(zipCode) {
    await this.page.locator('//*[@id="inputZip"]').fill(zipCode);
  }

  async submit() {
    await this.page.getByRole("button", { name: "Submit" }).click();
  }

  async submit() {
    await this.page.getByRole("button", { name: "Submit" }).click();
  }
}

export default InputForm;

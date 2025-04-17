

class FormDemo {
  constructor(page) {
    this.page = page;
  }

  async enterMessage(message) {
    await this.page.getByPlaceholder("Please enter your Message").fill(message);
  }

  async getValue() {
    await this.page.locator('#showInput').click();
  }
}

export default FormDemo;
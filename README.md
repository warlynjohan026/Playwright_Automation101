
Run in Gitpod

Click below to launch this project in a pre-configured Gitpod environment:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/YOUR-USERNAME/Playwright101Project)

---

## Test Scenarios

### Test Scenario 1: Simple Form Demo

1. Open [LambdaTest’s Selenium Playground](https://www.lambdatest.com/selenium-playground)
2. Click **"Simple Form Demo"**
3. Validate that the URL contains `/simple-form-demo`
4. Create a variable with a string (e.g., `"Welcome to LambdaTest"`)
5. Use that variable to input a message
6. Click **"Get Checked Value"**
7. Validate that the message is displayed under **"Your Message:"**

---

###  Test Scenario 2: Drag & Drop Sliders

1. Navigate to the [Selenium Playground](https://www.lambdatest.com/selenium-playground)
2. Click **"Drag & Drop Sliders"**
3. Drag the slider labeled **"Default value 15"** to reach **95**
4. Validate that the displayed value updates to **95**

---

###  Test Scenario 3: Input Form Submit

1. Go to [Selenium Playground](https://www.lambdatest.com/selenium-playground)
2. Click **"Input Form Submit"**
3. Click **"Submit"** without filling the form — assert error messages appear
4. Fill in all required fields, including:
   - Name
   - Email
   - Country (select "United States")
5. Click **"Submit"**
6. Validate the success message:  
   **“Thanks for contacting us, we will get back to you shortly.”**

---


## 💻 How to Run Tests

### ▶️ In Gitpod

Once Gitpod starts:

```bash
npx playwright test

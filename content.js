console.log("Content script is running");

function fillId() {
  chrome.storage.sync.get("userId", (data) => {
    if (chrome.runtime.lastError) {
      console.error("Error retrieving userId:", chrome.runtime.lastError);
      return;
    }
    console.log("User ID retrieved:", data.userId);

    if (data.userId) {
      // List of selectors to try
      const selectors = ["#Ecom_User_Pid", "[name='id_number']"];
      let userIdElement = null;

      // Loop through the selectors
      for (const selector of selectors) {
        userIdElement = document.querySelector(selector);
        if (userIdElement) {
          break; // Exit the loop if an element is found
        }
      }
      if (userIdElement) {
        userIdElement.value = data.userId;
        console.log(
          "Filled user ID",
          data.userId,
          "into element",
          userIdElement
        );
        const loginButton = document.querySelector("#loginButton");
        if (loginButton) {
          // loginButton.click();
          console.log("Clicked login button");
        } else {
          console.info("Login button not found");
        }
      } else {
        console.error("User ID input element not found");
      }
    } else {
      console.error("No userId found in storage");
    }
  });
}

// Run the function when the content script loads
fillId();

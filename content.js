console.log('Content script is running');

function fillId() {
  chrome.storage.sync.get("userId", (data) => {
    if (chrome.runtime.lastError) {
      console.error('Error retrieving userId:', chrome.runtime.lastError);
      return;
    }
    console.log('User ID retrieved:', data.userId);

    if (data.userId) {
      const userIdElements = [document.querySelectorAll("#Ecom_User_Pid"), 
        document.getElementsByName("id_number")];
      // the element is the first element in the array that is not an empty array
    const userIdElement = userIdElements.filter((element) => element.length > 0)[0];
      if (userIdElement) {
        userIdElement[0].value = data.userId;
        console.log("Filled user ID", data.userId, "into element", userIdElement);
        const loginButton = document.querySelector("#loginButton");
        if (loginButton) {
          loginButton.click();
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